import { CreateClientOrderDto } from "../../domain/dtos/clientOrder/create-clientOrder.dto";
import { CreateClientOrder } from "../../domain/use-cases/clientOrder/create-clientOrder";
import { GetClientOrder } from "../../domain/use-cases/clientOrder/get-clientOrder";
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

    public async get(id: string) {
        
        const order = await new GetClientOrder( this.repository ).execute(id)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
    }

    public async getAll() {
        
    }

    public async update() {
        
    }

    public async delete() {
        
    }

}