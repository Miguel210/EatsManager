import { ClientOrderEntity } from "../../entities/clientOrder.entity";
import { ClientOrderRepository } from "../../repositories/clientOrder/clientOrder.repository";


export interface GetClientOrderUseCase {
    execute(id: string): Promise<ClientOrderEntity>;
}


export class GetClientOrder implements GetClientOrderUseCase {

    constructor(
        private readonly repository: ClientOrderRepository
    ) {}
    
    execute(id: string): Promise<ClientOrderEntity> {
        return this.repository.get(id)
    }
}