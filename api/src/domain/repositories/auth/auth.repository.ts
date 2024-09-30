import { UserEntity } from "../../entities/user.entity";



export abstract class AuthRepository {

    abstract findByUsername(username: string): Promise<UserEntity>

}