import { DevolutionClientDatasource } from "../../../domain/datasource/devolutionClient/devolutionClient.datasource";
import { CreateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/create-devolutionClient.dto";
import { UpdateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/update-devolutionClient.dto";
import { DevolutionClientEntity } from "../../../domain/entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../../domain/repositories/devolutionClient/devolutionClient.repository";



export class DevolutionClientRepositoryImpl implements DevolutionClientRepository {

    constructor(
        private readonly datasource: DevolutionClientDatasource
    ) {}
    create(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<DevolutionClientEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<DevolutionClientEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<DevolutionClientEntity> {
        return this.datasource.delete(id)
    }
}