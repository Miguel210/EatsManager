import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";
import { PaymentRepository } from "../../repositories/payment/payment.repository";



export interface GetPaymentUseCase {
    execute(id: string): Promise<PaymentEntity>
}

export class GetPayment implements GetPaymentUseCase {

    constructor(
        private readonly repository: PaymentRepository
    ) {}
    execute(id: string): Promise<PaymentEntity> {
        return this.repository.get(id);
    }
}