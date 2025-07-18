import express, { Request, Response } from "express";
import { z } from "zod";
import { User } from "../models/users.models";

export const usersRoutes = express.Router();

const CreateUserZodSchema = z.object(
    {
        firstName: z.string(),
        lastName: z.string(),
        // age: z.number(),
        email: z.string(),
        password: z.string(),
        role: z.string().optional(),
        address: z.object().optional()
    }
);

usersRoutes.post( '/create-user', async ( req: Request, res: Response ) =>
{

    // const body = req.body
    try
    {
        // const body = await CreateUserZodSchema.parseAsync( req.body );
        // console.log( body )

        const user = await User.create( req.body )
        console.log( "new user",user )

        res.status( 201 ).json( {
            success: true,
            message: "user created successfully",
            user
        } );
    }
    catch ( error )
    {
        console.log(error)
        res.status( 400 ).json( {
            message: error?.message || error
        } )
    }
} );

usersRoutes.get( "/", async ( req: Request, res: Response ) =>
{
    // const users = await user.find().countDocuments();
    // const users = await user.find( {}, { title: 1, content: 1 } );
    const users = await User.find();

    res.status( 200 ).json( {
        success: true,
        message: "Database operation oka!",
        users
    })
} );

// get all users
usersRoutes.get( "/all", async ( req: Request, res: Response ) =>
{
    // const users = await user.find().countDocuments();
    // const users = await user.find( {}, { title: 1, content: 1 } );
    const users = await User.find().populate('notes') // virtual
    .populate('notesWithTags') // virtual
    .populate('notesCount') // virtual
    .sort( { createdAt: -1 } );

    res.status( 200 ).json( {
        success: true,
        message: "Database operation oka!",
        users
    })
} );

usersRoutes.get( "/:id", async ( req: Request, res: Response ) =>
{
    const id = req.params.id;
    // const user = await user.findById(id)
    const user = await User.findById(id)
    .populate('notes') // virtual
    // .populate('notesWithTags') // virtual
    .populate('notesCount') // virtual
    .exec();

    // console.log( user, id )
    
    res.status( 200 ).json( {
        success: true,
        message: "user found!",
        user
    } )
} );

usersRoutes.delete('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const user = await user.findByIdAndDelete(userId)
    // const user1 = await user.findOneAndDelete({ _id: userId })
    // const user2 = await user.deleteOne({ _id: userId })

    res.status(201).json({
        success: true,
        message: "user updated successfully",
        user,
        userId
    })
} )

usersRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true, })
    // const user = await user.findOneAndUpdate({ _id: userId }, updatedBody, { new: true, })
    // const user = await user.updateOne({ _id: userId }, updatedBody, { new: true, })
    console.log(user)

    res.status(201).json({
        success: true,
        message: "user updated successfully",
        user
    })
})