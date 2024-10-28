import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../dtos/payment/update-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";
import { PaymentRepository } from "../../repositories/payment/payment.repository";



export interface UpdatePaymentUseCase {
    execute(dto: UpdatePaymentDto): Promise<PaymentEntity>
}

export class UpdatePayment implements UpdatePaymentUseCase {

    constructor(
        private readonly repository: PaymentRepository
    ) {}
    execute(dto: UpdatePaymentDto): Promise<PaymentEntity> {
        return this.repository.update(dto);
    }
}