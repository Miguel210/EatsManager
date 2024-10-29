import { UpdateSupplierOrderDto } from "../../dtos/supplierOrder/update-supplierOrder.dto";
import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../repositories/supplierOrder/supplierOrder.repository";


export interface UpdateSupplierOrderUseCase {
    execute(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity>;
}


export class UpdateSupplierOrder implements UpdateSupplierOrderUseCase {

    constructor(
        private readonly repository: SupplierOrderRepository
    ) {}
    
    execute(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity> {
        return this.repository.update(dto)
    }
}