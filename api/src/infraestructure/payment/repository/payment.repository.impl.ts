import { PaymentDatasource } from "../../../domain/datasource/payment/payment.datasource";
import { CreatePaymentDto } from "../../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../../domain/dtos/payment/update-payment.dto";
import { PaymentEntity } from "../../../domain/entities/payment.entity";
import { PaymentRepository } from "../../../domain/repositories/payment/payment.repository";




export class PaymentRepositoryImpl implements PaymentRepository {

    constructor(
        private readonly datasource: PaymentDatasource
    ) {}
    create(dto: CreatePaymentDto): Promise<PaymentEntity> {
        return this.datasource.create(dto);
    }
    get(id: string): Promise<PaymentEntity> {
        return this.datasource.get(id);
    }
    getAll(form: any): Promise<PaymentEntity[]> {
        return this.datasource.getAll(form);
    }
    update(dto: UpdatePaymentDto): Promise<PaymentEntity> {
        return this.datasource.update(dto);
    }
    delete(id: string): Promise<PaymentEntity> {
        return this.datasource.delete(id);
    }

    
}