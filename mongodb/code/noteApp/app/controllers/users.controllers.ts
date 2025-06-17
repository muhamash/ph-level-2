import express, { Request, Response } from "express";
import { ObjectId } from 'mongodb';
import { z } from "zod";
import { user } from "../models/users.models";

export const usersRoutes = express.Router();

const CreateUserZodSchema = z.object(
    {
        firstName: z.string(),
        lastName: z.string(),
        age: z.number(),
        email: z.string(),
        password: z.string(),
        role: z.string().optional()
    }
);

usersRoutes.post( '/create-user', async ( req: Request, res: Response ) =>
{

    // const body = req.body
    const body = await CreateUserZodSchema.parseAsync( req.body );

    const user = await user.create( body )
    console.log( body )

    res.status( 201 ).json( {
        success: true,
        message: "user created successfully",
        user
    } );
} );

usersRoutes.get( "/", async ( req: Request, res: Response ) =>
{
    // const users = await user.find().countDocuments();
    // const users = await user.find( {}, { title: 1, content: 1 } );
    const users = await user.find();

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
    const user = await user.find( { _id: new ObjectId( id ) }, { tags: 1, title: 1 } );
    console.log( user, id )
    
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
})
usersRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const updatedBody = req.body;
    const user = await user.findByIdAndUpdate(userId, updatedBody, { new: true, })
    // const user = await user.findOneAndUpdate({ _id: userId }, updatedBody, { new: true, })
    // const user = await user.updateOne({ _id: userId }, updatedBody, { new: true, })
    console.log(user)

    res.status(201).json({
        success: true,
        message: "user updated successfully",
        user
    })
})