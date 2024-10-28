import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";
import { PaymentRepository } from "../../repositories/payment/payment.repository";



export interface GetAllPaymentUseCase {
    execute(form: any): Promise<PaymentEntity[]>
}

export class GetAllPayment implements GetAllPaymentUseCase {

    constructor(
        private readonly repository: PaymentRepository
    ) {}
    execute(form: any): Promise<PaymentEntity[]> {
        return this.repository.getAll(form)
    }
}