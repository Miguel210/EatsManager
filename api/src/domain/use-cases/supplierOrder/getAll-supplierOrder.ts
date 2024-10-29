import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../repositories/supplierOrder/supplierOrder.repository";


export interface GetAllSupplierOrderUseCase {
    execute(form: any): Promise<SupplierOrderEntity[]>;
}


export class GetAllSupplierOrder implements GetAllSupplierOrderUseCase {

    constructor(
        private readonly repository: SupplierOrderRepository
    ) {}
    
    execute(form: any): Promise<SupplierOrderEntity[]> {
        return this.repository.getAll(form)
    }
}