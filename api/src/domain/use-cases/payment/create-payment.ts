import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";
import { PaymentRepository } from "../../repositories/payment/payment.repository";



export interface CreatePaymentUseCase {
    execute(dto: CreatePaymentDto): Promise<PaymentEntity>
}

export class CreatePayment implements CreatePaymentUseCase {

    constructor(
        private readonly repository: PaymentRepository
    ) {}
    execute(dto: CreatePaymentDto): Promise<PaymentEntity> {
        return this.repository.create(dto);
    }
}