import { ClientOrderDatasource } from "../../../domain/datasource/clientOrder/clientOrder.datasource";
import { CreateClientOrderDto } from "../../../domain/dtos/clientOrder/create-clientOrder.dto";
import { UpdateClientOrderDto } from "../../../domain/dtos/clientOrder/update-clientOrder.dto";
import { ClientOrderEntity } from "../../../domain/entities/clientOrder.entity";



export class ClientOrderDatasourceImpl implements ClientOrderDatasource {
    create(dto: CreateClientOrderDto): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<ClientOrderEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateClientOrderDto): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }

}