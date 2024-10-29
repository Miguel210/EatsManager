import { CreateDevolutionSupplierDto } from "../../dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { UpdateDevolutionSupplierDto } from "../../dtos/devolutionSupplier/update-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../entities/devolutionSupplier.entity";


export abstract class DevolutionSupplierDatasource {

    abstract create(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity>;

    abstract get(id: string): Promise<DevolutionSupplierEntity>;
    abstract getAll(form: any): Promise<DevolutionSupplierEntity[]>;
    abstract update(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity>;
    abstract delete(id: string): Promise<DevolutionSupplierEntity>;

}