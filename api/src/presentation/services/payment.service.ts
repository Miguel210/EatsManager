import { CreatePaymentDto } from "../../domain/dtos/payment/create-payment.dto";
import { UpdatePaymentDto } from "../../domain/dtos/payment/update-payment.dto";
import { PaymentRepositoryImpl } from "../../infraestructure/payment/repository/payment.repository.impl";



export class PaymentService {

    constructor(
        private readonly repository: PaymentRepositoryImpl
    ) {}

    public async create(dto: CreatePaymentDto) {

    }

    public async get(id: string) {
        
    }

    public async getAll(form: any) {
        
    }

    public async update(dto: UpdatePaymentDto) {
        
    }

    public async delete(id: string) {
        
    }
}