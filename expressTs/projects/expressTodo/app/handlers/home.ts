import { NextFunction, Request, Response } from 'express';


const home =  async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('Welcome to Todos App')
    } catch (error) {
        next(error)
    }
}

export default home