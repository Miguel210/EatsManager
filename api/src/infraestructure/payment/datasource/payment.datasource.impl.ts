import { PaymentDatasource } from "../../../domain/datasource/payment/payment.datasource";
import { CreatePaymentDto } from "../../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../../domain/dtos/payment/update-payment.dto";
import { PaymentEntity } from "../../../domain/entities/payment.entity";





export class PaymentDatasourceImpl implements PaymentDatasource {
    
    create(dto: CreatePaymentDto): Promise<PaymentEntity> {
        throw new Error("Method not implemented.");
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