import { NextFunction, Request, Response } from "express";



export class OperationMiddlewares {

    static async validateOperation(req: Request, res: Response, next: NextFunction) {

        const user = req.body.user;
        const params = req.params;

        try {


            req.body.operation = {
                operation: [
                    {module: 'create'},
                    {module: 'read'},
                    {module: 'update'},
                    {module: 'readAll'},

                ],
                module: params.module
            };
            next();

        } catch( error ) {
            console.log(error);
            res.status(500).json({error: 'Internal server error'})
        }
    }
}