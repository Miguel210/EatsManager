import { UserEntity } from "../../entities/user.entity";




export abstract class AuthDatasource {

    abstract findByUsername(username: string): Promise<UserEntity>

}