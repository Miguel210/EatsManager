import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../repositories/supplierOrder/supplierOrder.repository";


export interface DeleteSupplierOrderUseCase {
    execute(id: string ): Promise<SupplierOrderEntity>;
}


export class DeleteSupplierOrder implements DeleteSupplierOrderUseCase {

    constructor(
        private readonly repository: SupplierOrderRepository
    ) {}
    
    execute(id: string ): Promise<SupplierOrderEntity> {
        return this.repository.delete(id)
    }
}