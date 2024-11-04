import { CreateClientOrderDetailDto } from "../../dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface CreateClientOrderDetailUseCase {
    execute(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity>
}

export class CreateClientOrderDetail implements CreateClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}

    execute(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        return this.repository.create(dto);
    }
}