import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface GetClientOrderDetailUseCase {
    execure(id: string): Promise<ClientOrderDetailEntity>
}

export class GetClientOrderDetail implements GetClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}
    
    execure(id: string): Promise<ClientOrderDetailEntity> {
        return this.repository.get(id)
    }
}