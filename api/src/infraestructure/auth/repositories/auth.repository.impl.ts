import { AuthRepository } from "../../../domain/repositories/auth/auth.repository";
import { AuthDatasource } from '../../../domain/datasource/auth/auth.datasource';
import { UserEntity } from "../../../domain/entities/user.entity";



export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly datasource: AuthDatasource,
    ){}

    findById(username: string): Promise<UserEntity> {
        return this.datasource.findById(username);
    }
}