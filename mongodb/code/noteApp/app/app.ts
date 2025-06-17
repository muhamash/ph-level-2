import express, { Application, Request, Response } from 'express';
import { notesRoutes } from './controllers/notes.controllers';

const app: Application = express()

app.use(express.json());

app.use( '/notes', notesRoutes );

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + Mongoose!!");
});

export default app;