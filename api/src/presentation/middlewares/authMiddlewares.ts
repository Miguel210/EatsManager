import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config/jwt.adapter";
import { AuthDatasourceImpl } from "../../infraestructure/auth/datasource/auth.datasource.impl";
import { UserEntity } from "../../domain/entities/user.entity";
import { ModuleDatasourceImpl } from "../../infraestructure/module/datasource/module.datasource.impl";
import { ProfileOperationDatasourceImpl } from "../../infraestructure/profileOperation/datasource/profileOperation.datasource.impl";





export class AuthMiddlewares {

    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const module: string = req.params.module || '';
        const authorization = req.header('Authorization');
        if( !authorization ) return res.status(401).json({error: 'No token provided'});
        if( !authorization.startsWith('Bearer') ) return res.status(401).json({error: 'Invalid Bearer token'});

        const token = authorization.split(' ').at(1) || '';

        try {
            const payload = await JwtAdapter.validateToken<{id: string}>(token);
            if( !payload ) return res.status(401).json({error: 'Invalid token'});
            
            const user = await new AuthDatasourceImpl().findById(payload.id)
            if( !user ) return res.status(401).json({error: 'Invalid token - user'})
            
            const {password, ...userEntity} = UserEntity.fromObject(user);
            req.body.user = userEntity

            //console.log(req.body.user);
            

            const module = await new ModuleDatasourceImpl().findById(userEntity.profileId)
            //console.log(req.params.module);
         
            const operation = await new ProfileOperationDatasourceImpl().find(req.params.module,userEntity.profileId)
            //console.log(operation);
            
            req.body._meta= {
                module,
                operation,
                id: userEntity.profileId
            }
            next()
            
        }catch( error ){
            console.log(error);
            res.status(500).json({error: 'Internal server error'})
            
        }
    }
}