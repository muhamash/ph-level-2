import express, { Application, Request, Response } from 'express';
import { notesRoutes } from './controllers/notes.controllers';
import { usersRoutes } from './controllers/users.controllers';

const app: Application = express()

app.use(express.json());

app.use( '/notes', notesRoutes );
app.use( '/users', usersRoutes );

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + Mongoose!!");
});

export default app;