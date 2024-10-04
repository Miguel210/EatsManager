import { UpdateSupplierDto } from "../../dtos/supplier/update-supplier.dto";
import { SupplierEntity } from "../../entities/supplier.entity";
import { SupplierRepository } from "../../repositories/supplier/supplier.repository";



export interface UpdateSupplierUseCase {
    execute(dto: UpdateSupplierDto): Promise<SupplierEntity>;
}



export class UpdateSupplier implements UpdateSupplierUseCase {

    constructor(
        private readonly repository: SupplierRepository
    ) {}

    execute(dto: UpdateSupplierDto): Promise<SupplierEntity> {
        return this.repository.updateById(dto);
    }
}