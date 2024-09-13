import { seedData } from '../../data/seed/data';
import { CustomError } from '../../domain';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';



export class AuthService {


    public async loginUser( loginUserDto: LoginUserDto) {

        const user = await seedData.person.find((elemnt) => (elemnt.username) == loginUserDto.username)
        if( !user ) throw CustomError.badRequest('Username already exist')

        const isMath = await seedData.person.find((elemnt) => (elemnt.password) == loginUserDto.password)
        if( !isMath ) throw CustomError.badRequest('Password is not valid')

        const {password, ...userEntity} = UserEntity.fromObject(user)


        const module = await seedData.profile.find((e) => (e.id) == user.profileId)

        return {
            user: userEntity,
            module: module
        }
    }
}