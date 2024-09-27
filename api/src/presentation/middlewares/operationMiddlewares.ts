import { NextFunction, Request, Response } from "express";



export class OperationMiddlewares {

    static async validateOperation(req: Request, res: Response, next: NextFunction) {

        const user = req.body.user;

        try {

            

        } catch( error ) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'})
        }
    }
}