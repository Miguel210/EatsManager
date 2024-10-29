import { SupplierOrderDatasource } from "../../../domain/datasource/supplierOrder/supplierOrder.datasource";
import { CreateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/create-supplierOrder.dto";
import { UpdateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/update-supplierOrder.dto";
import { SupplierOrderEntity } from "../../../domain/entities/supplierOrder.entity";




export class SupplierOrderDatasourceImpl implements SupplierOrderDatasource {
    
    create(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<SupplierOrderEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<SupplierOrderEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<SupplierOrderEntity> {
        throw new Error("Method not implemented.");
    }
    
}