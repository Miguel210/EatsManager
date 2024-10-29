import { CreateSupplierOrderDto } from "../../dtos/supplierOrder/create-supplierOrder.dto";
import { UpdateSupplierOrderDto } from "../../dtos/supplierOrder/update-supplierOrder.dto";
import { SupplierOrderEntity } from "../../entities/supplierOrder.entity";


export abstract class SupplierOrderRepository {

    abstract create(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity>;

    abstract get(id: string): Promise<SupplierOrderEntity>;
    abstract getAll(form: any): Promise<SupplierOrderEntity[]>;
    abstract update(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity>;
    abstract delete(id: string): Promise<SupplierOrderEntity>;

}