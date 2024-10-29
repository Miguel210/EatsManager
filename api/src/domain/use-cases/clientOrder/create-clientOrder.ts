import { CreateClientOrderDto } from "../../dtos/clientOrder/create-clientOrder.dto";
import { ClientOrderEntity } from "../../entities/clientOrder.entity";
import { ClientOrderRepository } from "../../repositories/clientOrder/clientOrder.repository";


export interface CreateClientOrderUseCase {
    execute(dto: CreateClientOrderDto): Promise<ClientOrderEntity>;
}


export class CreateClientOrder implements CreateClientOrderUseCase {

    constructor(
        private readonly repository: ClientOrderRepository
    ) {}
    
    execute(dto: CreateClientOrderDto): Promise<ClientOrderEntity> {
        return this.repository.create(dto)
    }
}