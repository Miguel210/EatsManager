import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { SupplierOrderDatasource } from "../../../domain/datasource/supplierOrder/supplierOrder.datasource";
import { CreateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/create-supplierOrder.dto";
import { UpdateSupplierOrderDto } from "../../../domain/dtos/supplierOrder/update-supplierOrder.dto";
import { SupplierOrderEntity } from "../../../domain/entities/supplierOrder.entity";




export class SupplierOrderDatasourceImpl implements SupplierOrderDatasource {
    
    async create(dto: CreateSupplierOrderDto): Promise<SupplierOrderEntity> {

        const order = await prisma.supplierOrder.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                invoiceFolio: dto.inoiceFolio,
                paymentDate: dto.paymentDate,
                status: dto.status,
                isActive: true
            }
        })
        if( !order ) throw `supplierOrder with data ${dto} not found`;
        return SupplierOrderEntity.fromObject(order);
    }
    async get(id: string): Promise<SupplierOrderEntity> {

        const order = await prisma.supplierOrder.findFirst({
            where: {
                id: id
            }
        })
        if( !order ) throw `supplierOrder with id ${id} not found`;
        return SupplierOrderEntity.fromObject(order);
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