import { CreateOrderpaymentDto } from "../../dtos/orderPayment/create-orderPayment.dto";
import { OrderpaymentEntity } from "../../entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../repositories/orderPayment/orderPayment.repository";



export interface CreateOrderPaymentUseCase {
    execute(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity>;
}

export class CreateOrderPayment implements CreateOrderPaymentUseCase {

    constructor(
        private readonly repository: OrderPaymentRepository
    ) {}
    execute(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity> {
        return this.repository.create(dto)
    }
}