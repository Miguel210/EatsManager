import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { AuthService } from '../services/auth.service';


export class AuthController {
    constructor(
        private readonly authservice: AuthService
    ){}

    private handleEror = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }

        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    loginUser = (req: Request, res: Response) => {

        const [error, loginUserDto] = LoginUserDto.login(req.body)
        if(error) throw res.status(400).json({error})
        
        


        this.authservice.loginUser(loginUserDto!)
        .then(user => res.json(user))
        .catch(error => this.handleEror(error,res))
    }

}