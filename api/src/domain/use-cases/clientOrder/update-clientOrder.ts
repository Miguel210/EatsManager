import { UpdateClientOrderDto } from "../../dtos/clientOrder/update-clientOrder.dto";
import { ClientOrderEntity } from "../../entities/clientOrder.entity";
import { ClientOrderRepository } from "../../repositories/clientOrder/clientOrder.repository";


export interface UpdateClientOrderUseCase {
    execute(dto: UpdateClientOrderDto): Promise<ClientOrderEntity>;
}


export class UpdateClientOrder implements UpdateClientOrderUseCase {

    constructor(
        private readonly repository: ClientOrderRepository
    ) {}
    
    execute(dto: UpdateClientOrderDto): Promise<ClientOrderEntity> {
        return this.repository.update(dto)
    }
}