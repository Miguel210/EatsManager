import { DevolutionSupplierDatasource } from "../../../domain/datasource/devolutionSupplier/devolutionSupplier.datasource";
import { CreateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { UpdateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../../domain/entities/devolutionSupplier.entity";



export class DevolutionSupplierDatasourceImpl implements DevolutionSupplierDatasource {

    create(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<DevolutionSupplierEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    
}