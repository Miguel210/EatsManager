import { ClientOrderEntity } from "../../entities/clientOrder.entity";
import { ClientOrderRepository } from "../../repositories/clientOrder/clientOrder.repository";


export interface DeleteClientOrderUseCase {
    execute(id: string ): Promise<ClientOrderEntity>;
}


export class DeleteClientOrder implements DeleteClientOrderUseCase {

    constructor(
        private readonly repository: ClientOrderRepository
    ) {}
    
    execute(id: string ): Promise<ClientOrderEntity> {
        return this.repository.delete(id)
    }
}