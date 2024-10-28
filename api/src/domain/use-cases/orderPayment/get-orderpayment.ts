import { OrderpaymentEntity } from "../../entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../repositories/orderPayment/orderPayment.repository";



export interface GetOrderPaymentUseCase {
    execute(id: string): Promise<OrderpaymentEntity>;
}

export class GetOrderPayment implements GetOrderPaymentUseCase {

    constructor(
        private readonly repository: OrderPaymentRepository
    ) {}
    execute(id: string): Promise<OrderpaymentEntity> {
        return this.repository.get(id)
    }
}