import { DevolutionClientDatasource } from "../../../domain/datasource/devolutionClient/devolutionClient.datasource";
import { CreateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/create-devolutionClient.dto";
import { UpdateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/update-devolutionClient.dto";
import { DevolutionClientEntity } from "../../../domain/entities/devolutionClient.entity";



export class DevolutionClientDatasourceImpl implements DevolutionClientDatasource {
    create(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<DevolutionClientEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<DevolutionClientEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<DevolutionClientEntity> {
        throw new Error("Method not implemented.");
    }

}