import { Request, Response } from "express";
import { CustomError } from "../../domain";




export class MenuController {

    constructor(

    ){}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    menu = (req: Request, res: Response) => {
        
        res.send({menu: `Welcome ${req.body.user['fullname']}`})
    }

}