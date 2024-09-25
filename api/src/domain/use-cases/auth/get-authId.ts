import { UserEntity } from '../../entities/user.entity';
import { AuthRepository } from '../../repositories/auth/auth.repository';



export interface GetAuthUseCase {
    execute(id: string): Promise<UserEntity>;
}

export class GetAuthId implements GetAuthUseCase {

    constructor(
        private readonly repository: AuthRepository
    ){}
    execute(id: string): Promise<UserEntity> {
        return this.repository.findById(id)
    }
}