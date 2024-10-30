import { ClientOrderDetailDatasource } from "../../../domain/datasource/clientOrderDetail/clientOrderDetail.datasource";
import { CreateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { UpdateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../../domain/entities/clientOrderDetail.entity";
import { ClientOrderDetailRepository } from "../../../domain/repositories/clientOrderDetail/clientOrderDetail.repository";



export class ClientOrderDetailRepositoryImpl implements ClientOrderDetailRepository {

    constructor(
        private readonly datasource: ClientOrderDetailDatasource
    ) {}

    create(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<ClientOrderDetailEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<ClientOrderDetailEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<ClientOrderDetailEntity> {
        return this.datasource.delete(id)
    }
}