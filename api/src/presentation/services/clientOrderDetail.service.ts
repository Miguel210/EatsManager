import { ClientOrderDetailRepositoryImpl } from "../../infraestructure/clientOrderDetail/repository/clientOrderDetail.repository.impl";
import { CreateClientOrderDetailDto } from '../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto';
import { UpdateClientOrderDetailDto } from '../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto';
import { UpdateClientOrderDetail } from "../../domain/use-cases/clientOrderDetail/update-clientOrderDetail";
import { DeleteClientOrderDetail } from "../../domain/use-cases/clientOrderDetail/delete-clientOrderDetail";
import { GetAllClientOrderDetail } from "../../domain/use-cases/clientOrderDetail/getAll-clientOrderDetail";
import { GetClientOrderDetail } from "../../domain/use-cases/clientOrderDetail/get-clientOrderDetail";
import { CreateClientOrderDetail } from '../../domain/use-cases/clientOrderDetail/create-clientOrderDetail';



export class ClientOrderDetailService {

    constructor(
        private readonly repository: ClientOrderDetailRepositoryImpl
    ) {}

    public async create(dto: CreateClientOrderDetailDto) {

        const detail = await new CreateClientOrderDetail( this.repository ).execute(dto)
        .then( det => det)
        .catch(error => console.log({error}))

        return {
            data: {
                detail
            }
        }
    }

    public async get(id: string) {
        const detail = await new GetClientOrderDetail( this.repository ).execure(id)
        .then( det => det)
        .catch(error => console.log({error}))

        return {
            data: {
                detail
            }
        }
    }

    public async getAll(form: any) {
        const detail = await new GetAllClientOrderDetail( this.repository ).execure(form)
        .then( det => det)
        .catch(error => console.log({error}))

        return {
            data: {
                detail
            }
        }
    }

    public async update(dto: UpdateClientOrderDetailDto) {
        
        const detail = await new UpdateClientOrderDetail( this.repository ).execute(dto)
        .then( det => det)
        .catch(error => console.log({error}))

        return {
            data: {
                detail
            }
        }
    }

    public async delete(id: string) {

        const detail = await new DeleteClientOrderDetail( this.repository ).execure(id)
        .then( det => det)
        .catch(error => console.log({error}))

        return {
            data: {
                detail
            }
        }
    }

}