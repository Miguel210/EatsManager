import { CreateSupplierDto } from '../../dtos/supplier/create-supplier.dto';
import { SupplierEntity } from '../../entities/supplier.entity';
import { UpdateSupplierDto } from '../../dtos/supplier/update-supplier.dto';



export abstract class SupplierRepository {

    abstract create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;

    abstract getAll(): Promise<SupplierEntity[]>;
    abstract findbyId(id: string): Promise<SupplierEntity>
    abstract updateById(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity>
    abstract deleteById(id: string): Promise<SupplierEntity>
}