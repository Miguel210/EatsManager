import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { OrderPaymentDatasource } from "../../../domain/datasource/orderPayment/orderPayment.datasource";
import { CreateOrderpaymentDto } from "../../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../../domain/dtos/orderPayment/update-orderPayment.dto";
import { OrderpaymentEntity } from "../../../domain/entities/orderpayment.entity";




export class OrderPaymentDatasourceImpl implements OrderPaymentDatasource {
    
    async create(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity> {
    
        const order = await prisma.orderPayment.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                amount: dto.amount,
                status: dto.status
            }
        });
        if( !order ) throw `orderPayment with data ${dto} not found`;
        return OrderpaymentEntity.fromObject(order);
    }
    async get(id: string): Promise<OrderpaymentEntity> {

        const order = await prisma.orderPayment.findFirst({
            where: {
                id: id
            }
        })

        if( !order ) throw `orderPayment with id ${id} not found`;
        
        return OrderpaymentEntity.fromObject(order);

    }
    async getAll(form: any): Promise<OrderpaymentEntity[]> {

        const order = await prisma.orderPayment.findMany({
            where: {
                isActive: form.isActive
            }
        })
        
        if( !order ) throw `orderPayment with form ${form} not found`;
        return order.map(order => OrderpaymentEntity.fromObject(order));
        
    }
    async update(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity> {
        await this.get(dto.id);

        
        const order = await prisma.orderPayment.update({
            where: {
                id: dto.id
            },
            data: {
                isActive: dto.isActive,
                amount: dto.amount,
                status: dto.status
            }
        })

        if( !order ) throw `orderPayment with id ${dto.id} not found`;
        return OrderpaymentEntity.fromObject(order);
    }
    async delete(id: string): Promise<OrderpaymentEntity> {

        await this.get(id);
        const order = await prisma.orderPayment.update({
            where: {
                id: id
            },
            data: {/*
                isDelete: true,
                deleteAt: new Date()*/
            }
        })
        if( !order ) throw `orderPayment with id ${id} not found`;

        return OrderpaymentEntity.fromObject(order);
    }

}