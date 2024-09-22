import { UserEntity } from '../../entities/user.entity';
import { AuthRepository } from '../../repositories/auth/auth.repository';



export interface GetAuthUseCase {
    execute(username: string): Promise<UserEntity>;

}

export class GetAuth implements GetAuthUseCase {

    constructor(
        private readonly repository: AuthRepository
    ){}
    execute(username: string): Promise<UserEntity> {
        return this.repository.findById(username)
    }
}