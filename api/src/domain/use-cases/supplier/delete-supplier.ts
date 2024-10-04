import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier/supplier.repository";



export interface DeleteSupplierUseCase {
    execute(id: string): Promise<SupplierEntity>;
}

export class DeleteSupplier implements DeleteSupplierUseCase {

    constructor(
        private readonly repository: SupplierRepository
    ) {}

    execute(id: string): Promise<SupplierEntity> {
        return this.repository.deleteById(id)
    }

}