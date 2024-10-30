import { ClientOrderDetailDatasource } from "../../../domain/datasource/clientOrderDetail/clientOrderDetail.datasource";
import { CreateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { UpdateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../../domain/entities/clientOrderDetail.entity";



export class ClientOrderDetailDatasourceImpl implements ClientOrderDetailDatasource {
    create(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<ClientOrderDetailEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<ClientOrderDetailEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<ClientOrderDetailEntity> {
        throw new Error("Method not implemented.");
    }

}