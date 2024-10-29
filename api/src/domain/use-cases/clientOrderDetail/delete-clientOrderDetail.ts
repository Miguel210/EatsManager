import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface DeleteClientOrderDetailUseCase {
    execure(id: string): Promise<ClientOrderDetailEntity>
}

export class DeleteClientOrderDetail implements DeleteClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}
    
    execure(id: string): Promise<ClientOrderDetailEntity> {
        return this.repository.delete(id)
    }
}