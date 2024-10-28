import { OrderPaymentDatasource } from "../../../domain/datasource/orderPayment/orderPayment.datasource";
import { CreateOrderpaymentDto } from "../../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../../domain/dtos/orderPayment/update-orderPayment.dto";
import { OrderpaymentEntity } from "../../../domain/entities/orderpayment.entity";
import { OrderPaymentRepository } from "../../../domain/repositories/orderPayment/orderPayment.repository";




export class OrderPaymentRepositoryImpl implements OrderPaymentRepository {

    constructor(
        private readonly datasource: OrderPaymentDatasource
    ) {}
    create(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity> {
        return this.datasource.create(dto);
    }
    get(id: string): Promise<OrderpaymentEntity> {
        return this.datasource.get(id);
    }
    getAll(form: any): Promise<OrderpaymentEntity[]> {
        return this.datasource.getAll(form);
    }
    update(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity> {
        return this.datasource.update(dto);
    }
    delete(id: string): Promise<OrderpaymentEntity> {
        return this.datasource.delete(id);
    }
}