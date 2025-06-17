import express, { Request, Response } from "express";
import { Note } from "../models/notes.models";

export const notesRoutes = express.Router()

notesRoutes.post( '/create-note', async ( req: Request, res: Response ) =>
{

    const body = req.body
    const note = await Note.create( body )
    console.log( body )

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
    console.log(notes)

    res.status( 200 ).json( {
        success: true,
        message: "Database operation oka!",
        notes
    })
} );