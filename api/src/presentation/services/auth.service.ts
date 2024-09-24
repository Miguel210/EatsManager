import { JwtAdapter } from '../../config/jwt.adapter';
import { CustomError } from '../../domain';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { ModulesDto } from '../../domain/dtos/module/create-module.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { GetAuth } from '../../domain/use-cases/auth/get-auth';
import { GetsModule } from '../../domain/use-cases/module/get-module';
import { AuthRepositoryImpl } from '../../infraestructure/auth/repositories/auth.repository.impl';
import { ModelRepositoryImpl } from "../../infraestructure/module/repositories/module.repository.impl";




export class AuthService {

    constructor(
        readonly authrepository: AuthRepositoryImpl,
        readonly moduleRepository: ModelRepositoryImpl
    ){}

    public async loginUser( loginUserDto: LoginUserDto) {
        console.log(loginUserDto.username);

        const user = await new GetAuth(this.authrepository).execute(loginUserDto.username)
        .then(user => user)
        .catch(error => error)

        if( !user ) throw CustomError.badRequest('Username already exist')

        //todo isMatching the passwod


        //todo Create token
        const token = await JwtAdapter.generateToken({id: user.id});

        if( !token ) throw CustomError.internalServer('Error wile creating JWT')

        //todo Create modules

        const {password, ...userEntity} = UserEntity.fromObject(user)

        // const mod = new ModulesDto(userEntity.profile);
        // const modules = await new GetsModule(this.moduleRepository).execute(mod.id)

        // console.log(modules);

        console.log(userEntity);
        return {
            user: userEntity,
            module: 'modules',
            token: token,
        }
    }

    public async modulesUser(){
        
    }

    public async operationsModule(){

    }
}