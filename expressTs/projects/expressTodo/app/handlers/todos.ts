import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../../config/mongo";

export const getTodos = async ( req: Request, res: Response ) =>
{

    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const cursor = collection.find({})
    const todos = await cursor.toArray()
    res.json(todos)
}

export const createTodos = async ( req: Request, res: Response ) =>
{
    const { title, description, priority } = req.body;


    const db = await client.db( "todosDB" )
    const collection = await db.collection( "todos" )
    await collection.insertOne( {
        title: title,
        description: description,
        priority: priority,
        isCompleted: false
    } )

    const cursor = collection.find( {} )
    const todos = await cursor.toArray()



    // const todos = collection.find({})

    res.status( 202 ).send( JSON.stringify( {
        message: "todo created",
        data: {
            title: title,
            description: description,
            priority: priority
        }
    } ) );
}

export const getTodosById = async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const todo = await collection.findOne({ _id: new ObjectId(id) })
    res.json(todo)
}

export const editTodosById = async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const { title, description, priority, isCompleted } = req.body;
    const filter = { _id: new ObjectId(id) }

    const updatedTodo = await collection.updateOne(
        filter, 
        { $set: { title, description, priority, isCompleted } }, 
    )
    res.json(updatedTodo)
}

export const deleteTodos = async (req: Request, res: Response) => {
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    await collection.deleteOne({ _id: new ObjectId(id) })
    res.json({
        message: "deleted succesfully"
    })
}