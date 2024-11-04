import { CreateClientOrderDto } from "../../domain/dtos/clientOrder/create-clientOrder.dto";
import { UpdateClientOrderDto } from "../../domain/dtos/clientOrder/update-clientOrder.dto";
import { CreateClientOrder } from "../../domain/use-cases/clientOrder/create-clientOrder";
import { DeleteClientOrder } from "../../domain/use-cases/clientOrder/delete-clientOrder";
import { GetClientOrder } from "../../domain/use-cases/clientOrder/get-clientOrder";
import { GetAllClientOrder } from "../../domain/use-cases/clientOrder/getAll-clientOrder";
import { UpdateClientOrder } from "../../domain/use-cases/clientOrder/update-clientOrder";
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

    public async getAll(form: any) {
        
        const order = await new GetAllClientOrder( this.repository ).execute(form)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
    }

    public async update(dto: UpdateClientOrderDto) {
        
        const order = await new UpdateClientOrder( this.repository ).execute(dto)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
    }

    public async delete(id: string) {

        const order = await new DeleteClientOrder( this.repository ).execute(id)
        .then(order => order)
        .catch(error => console.log({error}))

        return {
            data: {
                order
            }
        }
    }

}