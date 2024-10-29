import { CreateClientOrderDetailDto } from "../../dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface CreateClientOrderDetailUseCase {
    execure(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity>
}

export class CretaeClientOrderDetail implements CreateClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}

    execure(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        return this.repository.create(dto);
    }
}