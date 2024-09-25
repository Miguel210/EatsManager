import { Request, Response } from "express";
import { CustomError } from "../../domain";



export class DashboardController {

    constructor(
        
    ){}

    private handleEror = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }

        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    inicio = (req: Request, res: Response) => {
        console.log(req.body.user);
    

        res.send({ok: 'init ok'})
    }
    
}