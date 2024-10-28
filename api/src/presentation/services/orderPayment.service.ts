import { CreateOrderpaymentDto } from "../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../domain/dtos/orderPayment/update-orderPayment.dto";
import { CreateOrderPayment } from "../../domain/use-cases/orderPayment/create-orderpayment";
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

    }

    public async getAll(form: any) {

    }

    public async update(dto: UpdateOrderpaymentDto) {

    }

    public async delete(id: string) {

    }
}