import express from "express";
import { createTodos, deleteTodos, editTodosById, getTodos, getTodosById } from "../handlers/todos";

export const todosRouter = express.Router()

todosRouter.get("/", getTodos)

todosRouter.post( '/create-todo',  createTodos);

todosRouter.get( "/:id", getTodosById);

todosRouter.put( "/update-todo/:id", editTodosById );

todosRouter.delete( "/delete-todo/:id", deleteTodos );