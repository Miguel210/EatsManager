import { UserEntity } from "../../entities/user.entity";




export abstract class AuthDatasource {

    abstract findById(username: string): Promise<UserEntity>
    

}