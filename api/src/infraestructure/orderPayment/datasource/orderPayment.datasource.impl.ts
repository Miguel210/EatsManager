import { OrderPaymentDatasource } from "../../../domain/datasource/orderPayment/orderPayment.datasource";
import { CreateOrderpaymentDto } from "../../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../../domain/dtos/orderPayment/update-orderPayment.dto";
import { OrderpaymentEntity } from "../../../domain/entities/orderpayment.entity";




export class OrderPaymentDatasourceImpl implements OrderPaymentDatasource {
    
    create(dto: CreateOrderpaymentDto): Promise<OrderpaymentEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<OrderpaymentEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<OrderpaymentEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateOrderpaymentDto): Promise<OrderpaymentEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<OrderpaymentEntity> {
        throw new Error("Method not implemented.");
    }

}