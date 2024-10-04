import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier/supplier.repository";



export interface GetSupplierUseCase {
    execute(id: string): Promise<SupplierEntity>;
}


export class GetSupplier implements GetSupplierUseCase {

    constructor(
        private readonly repository: SupplierRepository
    ) {}

    execute(id: string): Promise<SupplierEntity> {
        return this.repository.findbyId(id);
    }

}