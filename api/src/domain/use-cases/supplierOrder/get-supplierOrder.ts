import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../repositories/supplierOrder/supplierOrder.repository";


export interface GetSupplierOrderUseCase {
    execute(id: string): Promise<SupplierOrderEntity>;
}


export class GetSupplierOrder implements GetSupplierOrderUseCase {

    constructor(
        private readonly repository: SupplierOrderRepository
    ) {}
    
    execute(id: string): Promise<SupplierOrderEntity> {
        return this.repository.get(id)
    }
}