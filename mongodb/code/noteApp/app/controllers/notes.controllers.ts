import express, { Request, Response } from "express";
import { ObjectId } from 'mongodb';
import { Note } from "../models/notes.models";

export const notesRoutes = express.Router()

notesRoutes.post( '/create-note', async ( req: Request, res: Response ) =>
{

    const body = req.body
    console.log(body)
    const note = await (await Note.create( body )).populate("userId")
    console.log( note );

    res.status( 201 ).json( {
        success: true,
        message: "Note created successfully",
        note
    } );
} );

notesRoutes.get( "/", async ( req: Request, res: Response ) =>
{
    // const notes = await Note.find().countDocuments();
    // const notes = await Note.find( {}, { title: 1, content: 1 } );
    const notes = await Note.find();

    res.status( 200 ).json( {
        success: true,
        message: "Database operation oka!",
        notes
    })
} );

notesRoutes.get( "/:id", async ( req: Request, res: Response ) =>
{
    const id = req.params.id;
    // const note = await Note.findById(id)
    const note = await Note.find( { _id: new ObjectId( id ) }, { tags: 1, title: 1 } );
    console.log( note, id )
    
    res.status( 200 ).json( {
        success: true,
        message: "Note found!",
        note
    } )
} );

notesRoutes.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findByIdAndDelete(noteId)
    // const note1 = await Note.findOneAndDelete({ _id: noteId })
    // const note2 = await Note.deleteOne({ _id: noteId })

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note,
        noteId
    })
})
notesRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true, })
    // const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, { new: true, })
    // const note = await Note.updateOne({ _id: noteId }, updatedBody, { new: true, })
    console.log(note)

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note
    })
})