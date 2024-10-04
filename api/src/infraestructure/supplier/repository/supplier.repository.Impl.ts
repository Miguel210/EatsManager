import { SupplierDatasource } from "../../../domain/datasource/supplier/supplier.datasource";
import { CreateSupplierDto } from "../../../domain/dtos/supplier/create-supplier.dto";
import { UpdateSupplierDto } from "../../../domain/dtos/supplier/update-supplier.dto";
import { SupplierEntity } from "../../../domain/entities/supplier.entity";
import { SupplierRepository } from "../../../domain/repositories/supplier/supplier.repository";



export class SupplierRepositoryImpl implements SupplierRepository {

    constructor(
        private readonly datasource: SupplierDatasource
    ) {}

    create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
        return this.datasource.create(createSupplierDto);
    }
    getAll(): Promise<SupplierEntity[]> {
        return this.datasource.getAll();
    }
    findbyId(id: string): Promise<SupplierEntity> {
        return this.datasource.findbyId(id);
    }
    updateById(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity> {
        return this.datasource.updateById(updateSupplierDto);
    }
    deleteById(id: string): Promise<SupplierEntity> {
        return this.datasource.deleteById(id);
    }
}