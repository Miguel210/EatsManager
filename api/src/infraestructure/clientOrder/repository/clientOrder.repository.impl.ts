import { ClientOrderDatasource } from "../../../domain/datasource/clientOrder/clientOrder.datasource";
import { CreateClientOrderDto } from "../../../domain/dtos/clientOrder/create-clientOrder.dto";
import { UpdateClientOrderDto } from "../../../domain/dtos/clientOrder/update-clientOrder.dto";
import { ClientOrderEntity } from "../../../domain/entities/clientOrder.entity";
import { ClientOrderRepository } from "../../../domain/repositories/clientOrder/clientOrder.repository";



export class ClientOrderRepositoryImpl implements ClientOrderRepository {

    constructor(
        private readonly datasource: ClientOrderDatasource
    ) {}
    create(dto: CreateClientOrderDto): Promise<ClientOrderEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<ClientOrderEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<ClientOrderEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateClientOrderDto): Promise<ClientOrderEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<ClientOrderEntity> {
        return this.datasource.delete(id)
    }
}