import { UpdateClientOrderDetailDto } from "../../dtos/clientOrderDetail/update-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../repositories/clientOrderDetail/clientOrderDetail.repository";



export interface UpdateClientOrderDetailUseCase {
    execute(dto: UpdateClientOrderDetailDto): Promise<ClientOrderDetailEntity>
}

export class UpdateClientOrderDetail implements UpdateClientOrderDetailUseCase {

    constructor(
        private readonly repository: ClientOrderDetailRepository
    ) {}
    
    execute(dto: UpdateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        return this.repository.update(dto)
    }
}