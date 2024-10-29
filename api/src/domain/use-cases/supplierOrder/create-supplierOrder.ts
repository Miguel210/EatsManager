import { CreateSupplierOrderDto } from "../../dtos/supplierOrder/create-supplierOrder.dto";
import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../repositories/supplierOrder/supplierOrder.repository";


export interface CreateSupplierOrderUseCase {
    execute(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity>;
}


export class CreateSupplierOrder implements CreateSupplierOrderUseCase {

    constructor(
        private readonly repository: SupplierOrderRepository
    ) {}
    
    execute(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity> {
        return this.repository.create(dto)
    }
}