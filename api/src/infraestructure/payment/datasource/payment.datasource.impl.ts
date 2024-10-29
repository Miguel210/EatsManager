import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { PaymentDatasource } from "../../../domain/datasource/payment/payment.datasource";
import { CreatePaymentDto } from "../../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../../domain/dtos/payment/update-payment.dto";
import { PaymentEntity } from "../../../domain/entities/payment.entity";





export class PaymentDatasourceImpl implements PaymentDatasource {
    
    async create(dto: CreatePaymentDto): Promise<PaymentEntity> {

        const payment = await prisma.payment.create({
            data: {
                id: Uuid.uuid(),
                orderPaymentId: dto.orderpaymentId,
                amount: dto.amount,
                typePaymentId: dto.typePaymentId

            }
        })
        
        if( !payment ) throw `movementDetail with data ${dto} not found`;        
        console.log(payment);
        
        return PaymentEntity.fromObject(payment)
    }
    async get(id: string): Promise<PaymentEntity> {
        
        const payment = await prisma.payment.findFirst({
            where: {
                id: id
            }
        })
        
        if( !payment ) throw `movementDetail with id ${id} not found`;        
        
        return PaymentEntity.fromObject(payment)
    }
    async getAll(form: any): Promise<PaymentEntity[]> {
        
        const payment = await prisma.payment.findMany({
            where: {
                typePaymentId: {
                    in: form.typePaymentId ||undefined
                }
            }
        })
        
        if( !payment ) throw `movementDetail with form ${form} not found`;        
        
        return payment.map( payment => PaymentEntity.fromObject(payment))
    }
    async update(dto: UpdatePaymentDto): Promise<PaymentEntity> {
        
        const payment = await prisma.payment.update({
            where: {
                id: dto.id
            },
            data: {
                typePaymentId: dto.typePaymentId,
                amount: dto.amount,
                isActive: dto.isActive
            }
        })

        if( !payment ) throw `movementDetail with id ${dto.id} not found`;        
        
        return PaymentEntity.fromObject(payment)
    }
    async delete(id: string): Promise<PaymentEntity> {
    
        const payment = await prisma.payment.update({
            where: {
                id: id
            },
            data: {/*
                isDelete: true,
                deleteAt: new Date()*/
            }
        })

        if( !payment ) throw `movementDetail with id ${id} not found`;        
        
        return PaymentEntity.fromObject(payment)
    }

}