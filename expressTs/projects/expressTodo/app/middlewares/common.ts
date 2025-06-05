import { NextFunction, Request, Response } from 'express';

export const consoleData = ( req: Request, res: Response, next: NextFunction ) =>
{
    console.log({
        url: req.url,
        method: req.method,
        header: req.header
    });
    next()
}

export const errorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send('Welcome to error er duniya')
        } catch (error) {
            next(error)
        }
    }