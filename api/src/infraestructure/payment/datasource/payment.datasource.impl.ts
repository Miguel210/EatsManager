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
    get(id: string): Promise<PaymentEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<PaymentEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdatePaymentDto): Promise<PaymentEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<PaymentEntity> {
        throw new Error("Method not implemented.");
    }

}