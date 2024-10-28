import { OrderpaymentEntity } from "../../entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../repositories/orderPayment/orderPayment.repository";



export interface GetAllOrderPaymentUseCase {
    execute(form: any): Promise<OrderpaymentEntity[]>;
}

export class GetAllOrderPayment implements GetAllOrderPaymentUseCase {

    constructor(
        private readonly repository: OrderPaymentRepository
    ) {}
    execute(form: any): Promise<OrderpaymentEntity[]> {
        return this.repository.getAll(form)
    }
}