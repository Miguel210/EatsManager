import { CreateOrderpaymentDto } from "../../dtos/orderPayment/create-orderPayment.dto";
import { OrderpaymentEntity } from "../../entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../repositories/orderPayment/orderPayment.repository";



export interface DeleteOrderPaymentUseCase {
    execute(id: string): Promise<OrderpaymentEntity>;
}

export class DeleteOrderPayment implements DeleteOrderPaymentUseCase {

    constructor(
        private readonly repository: OrderPaymentRepository
    ) {}
    execute(id: string): Promise<OrderpaymentEntity> {
        return this.repository.delete(id)
    }
}