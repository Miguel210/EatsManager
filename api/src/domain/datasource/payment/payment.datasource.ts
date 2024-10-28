import { UpdateOrderpaymentDto } from "../../dtos/orderPayment/update-orderPayment.dto";
import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";



export abstract class PaymentDatasource {

    abstract create(dto: CreatePaymentDto): Promise <PaymentEntity>;
    abstract get(id: string): Promise <PaymentEntity>;
    abstract getAll(form: any): Promise <PaymentEntity>;
    abstract update(dto: UpdateOrderpaymentDto): Promise <PaymentEntity>;
    abstract delete(id: string): Promise <PaymentEntity>;

}