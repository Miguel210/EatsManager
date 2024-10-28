import { UpdateOrderpaymentDto } from "../../dtos/orderPayment/update-orderPayment.dto";
import { OrderpaymentEntity } from "../../entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../repositories/orderPayment/orderPayment.repository";



export interface UpdateOrderPaymentUseCase {
    execute(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity>;
}

export class UpdateOrderPayment implements UpdateOrderPaymentUseCase {

    constructor(
        private readonly repository: OrderPaymentRepository
    ) {}
    execute(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity> {
        return this.repository.update(dto)
    }
}