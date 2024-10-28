import { CreateOrderpaymentDto } from "../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../domain/dtos/orderPayment/update-orderPayment.dto";
import { CreateOrderPayment } from "../../domain/use-cases/orderPayment/create-orderpayment";
import { GetOrderPayment } from "../../domain/use-cases/orderPayment/get-orderpayment";
import { GetAllOrderPayment } from "../../domain/use-cases/orderPayment/getAll-orderpayment";
import { OrderPaymentRepositoryImpl } from "../../infraestructure/orderPayment/repository/orderPayment.repository.impl";




export class OrderPaymentService {
    
    constructor(
        private readonly repository: OrderPaymentRepositoryImpl
    ) {}

    public async create(dto: CreateOrderpaymentDto) {

        const orderPayment = await new CreateOrderPayment( this.repository ).execute(dto)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                orderPayment
            }
        }
    }

    public async get(id: string) {

        const orderPayment = await new GetOrderPayment( this.repository ).execute(id)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                orderPayment
            }
        }
    }

    public async getAll(form: any) {

        const orderPayment = await new GetAllOrderPayment( this.repository ).execute(form)
        .then(order => order)
        .catch(error => console.log({error}))
        
        return {
            data: {
                orderPayment
            }
        }
    }

    public async update(dto: UpdateOrderpaymentDto) {

    }

    public async delete(id: string) {

    }
}