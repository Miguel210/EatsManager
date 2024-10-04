import { CreateSupplierDto } from "../../dtos/supplier/create-supplier.dto";
import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier/supplier.repository";



export interface CreateSupplierUseCase {
    execute(dto: CreateSupplierDto):  Promise<SupplierEntity>;
}


export class CreateSupplier implements CreateSupplierUseCase {

    constructor(
        private readonly repository: SupplierRepository
    ) {}

    execute(dto: CreateSupplierDto): Promise<SupplierEntity> {
        return this.repository.create(dto)
    }

}