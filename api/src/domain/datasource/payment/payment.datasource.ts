import { CreatePaymentDto } from "../../dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../dtos/payment/update-payment.dto";
import { PaymentEntity } from "../../entities/payment.entity";



export abstract class PaymentDatasource {

    abstract create(dto: CreatePaymentDto): Promise <PaymentEntity>;
    abstract get(id: string): Promise <PaymentEntity>;
    abstract getAll(form: any): Promise <PaymentEntity[]>;
    abstract update(dto: UpdatePaymentDto): Promise <PaymentEntity>;
    abstract delete(id: string): Promise <PaymentEntity>;

}