import { JwtAdapter } from '../../config/jwt.adapter';
import { CustomError } from '../../domain';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { ModulesDto } from '../../domain/dtos/module/create-module.dto';
import { ModuleEntity } from '../../domain/entities/module.enity';
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

        const [error, moduleDto] =  ModulesDto.modules(userEntity);
        if(error) throw CustomError.badRequest(error)

        const modulos = await this.modulesUser(moduleDto!)
        //! Repair this map | any type modulo
        const moduloEntity = modulos.map((modulo: any) => ModuleEntity.fromObject(modulo!))

        return {
            user: userEntity,
            module: moduloEntity,
            token: token,
        }
    }

    public async modulesUser(moduleDto: ModulesDto){
        return await new GetsModule(this.moduleRepository).execute(moduleDto.id)
        .then(module => module)
        .catch( error => error)
    }

    public async operationsModule(){

    }
}