import { CreateOrderpaymentDto } from "../../dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../dtos/orderPayment/update-orderPayment.dto";
import { OrderpaymentEntity } from "../../entities/orderpayment.entity";



export abstract class OrderPaymentRepository {

    abstract create(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity>;
    abstract get(id: string): Promise<OrderpaymentEntity>;
    abstract getAll(form: any): Promise<OrderpaymentEntity[]>;
    abstract update(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity>;
    abstract delete(id: string): Promise<OrderpaymentEntity>;

}