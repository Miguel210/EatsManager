import { CreateDevolutionClientDto } from "../../dtos/devolutionClient/create-devolutionClient.dto";
import { UpdateDevolutionClientDto } from "../../dtos/devolutionClient/update-devolutionClient.dto";
import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";


export abstract class DevolutionClientDatasource {

    abstract create(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity>;

    abstract get(id: string): Promise<DevolutionClientEntity>;
    abstract getAll(form: any): Promise<DevolutionClientEntity[]>;
    abstract update(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity>;
    abstract delete(id: string): Promise<DevolutionClientEntity>;

}