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
                paymentDate: new Date(dto.paymentDate),
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
    async getAll(form: any): Promise<SupplierOrderEntity[]> {

        const order = await prisma.supplierOrder.findMany()

        if( !order ) throw `supplierOrder with form ${form} not found`;
        return order.map(order => SupplierOrderEntity.fromObject(order));
    }
    async update(dto: UpdateSupplierOrderDto): Promise<SupplierOrderEntity> {
         await this.get(dto.id);

         const order = await prisma.supplierOrder.update({
            where: {
                id: dto.id
            },
            data: {
                paymentDate: new Date(dto.paymentDate),
                status: dto.status,
                isActive: dto.isActive
            }
         })

        if( !order ) throw `supplierOrder with id ${dto.id} not found`;
        return SupplierOrderEntity.fromObject(order);
    }
   async  delete(id: string): Promise<SupplierOrderEntity> {
        await this.get(id);

        const order = await prisma.supplierOrder.update({
           where: {
               id: id
           },
           data: {/*
               isDelete: true,
               deleteAt: new Date() */
           }
        })

       if( !order ) throw `supplierOrder with id ${id} not found`;
       return SupplierOrderEntity.fromObject(order);
    }

}