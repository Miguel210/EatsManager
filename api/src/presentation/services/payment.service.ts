import { CreatePaymentDto } from "../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../domain/dtos/payment/update-payment.dto";
import { CreatePayment } from "../../domain/use-cases/payment/create-payment";
import { GetPayment } from "../../domain/use-cases/payment/get-payment";
import { PaymentRepositoryImpl } from "../../infraestructure/payment/repository/payment.repository.impl";



export class PaymentService {

    constructor(
        private readonly repository: PaymentRepositoryImpl
    ) {}

    public async create(dto: CreatePaymentDto) {

        const payment = await new CreatePayment( this.repository ).execute(dto)
        .then(pay => pay)
        .catch(error => console.log({error}))

        return {
            data: {
                payment
            }
        }
    }

    public async get(id: string) {
        
        const payment = await new GetPayment( this.repository ).execute(id)
        .then(pay => pay)
        .catch(error => console.log({error}))

        return {
            data: {
                payment
            }
        }
    }

    public async getAll(form: any) {
        
    }

    public async update(dto: UpdatePaymentDto) {
        
    }

    public async delete(id: string) {
        
    }
}