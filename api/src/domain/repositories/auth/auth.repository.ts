import { UserEntity } from "../../entities/user.entity";



export abstract class AuthRepository {

    abstract findById(username: string): Promise<UserEntity>

}