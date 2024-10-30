import { CreateClientOrderDto } from "../../domain/dtos/clientOrder/create-clientOrder.dto";
import { CreateClientOrder } from "../../domain/use-cases/clientOrder/create-clientOrder";
import { ClientOrderRepositoryImpl } from "../../infraestructure/clientOrder/repository/clientOrder.repository.impl";



export class ClientOrderService {

    constructor(
        private readonly repository: ClientOrderRepositoryImpl
    ) {}

    public async create(dto: CreateClientOrderDto) {

        const order = await new CreateClientOrder( this.repository ).execute(dto)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
    }

    public async get() {
        
    }

    public async getAll() {
        
    }

    public async update() {
        
    }

    public async delete() {
        
    }

}