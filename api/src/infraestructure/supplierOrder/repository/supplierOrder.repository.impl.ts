import { SupplierOrderDatasource } from "../../../domain/datasource/supplierOrder/supplierOrder.datasource";
import { CreateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/create-supplierOrder.dto";
import { UpdateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/update-supplierOrder.dto";
import { SupplierOrderEntity } from "../../../domain/entities/supplierOrder.entity";
import { SupplierOrderRepository } from "../../../domain/repositories/supplierOrder/supplierOrder.repository";




export class SupplierOrderRepositoryImpl implements SupplierOrderRepository {

    constructor(
        private readonly datasource: SupplierOrderDatasource
    ) {}
    create(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<SupplierOrderEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<SupplierOrderEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<SupplierOrderEntity> {
        return this.datasource.delete(id)
    }
}