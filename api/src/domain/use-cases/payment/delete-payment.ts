import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";
import { PaymentRepository } from "../../repositories/payment/payment.repository";



export interface DeletePaymentUseCase {
    execute(id: string): Promise<PaymentEntity>
}

export class DeleteePayment implements DeletePaymentUseCase {

    constructor(
        private readonly repository: PaymentRepository
    ) {}
    execute(id: string): Promise<PaymentEntity> {
        return this.repository.delete(id);
    }
}