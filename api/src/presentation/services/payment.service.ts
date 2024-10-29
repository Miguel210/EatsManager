import { CreatePaymentDto } from "../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../domain/dtos/payment/update-payment.dto";
import { CreatePayment } from "../../domain/use-cases/payment/create-payment";
import { DeleteePayment } from "../../domain/use-cases/payment/delete-payment";
import { GetPayment } from "../../domain/use-cases/payment/get-payment";
import { GetAllPayment } from "../../domain/use-cases/payment/getAll-payment";
import { UpdatePayment } from "../../domain/use-cases/payment/update-payment";
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
        
        const payment = await new GetAllPayment( this.repository ).execute(form)
        .then(pay => pay)
        .catch(error => console.log({error}))
        
        return {
            data: {
                payment
            }
        }
    }

    public async update(dto: UpdatePaymentDto) {
           
        const payment = await new UpdatePayment( this.repository ).execute(dto)
        .then(pay => pay)
        .catch(error => console.log({error}))
        
        return {
            data: {
                payment
            }
        }
    }

    public async delete(id: string) {
        const payment = await new DeleteePayment( this.repository ).execute(id)
        .then(pay => pay)
        .catch(error => console.log({error}))
        
        return {
            data: {
                payment
            }
        }
    }
}