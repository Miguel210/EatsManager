import { DevolutionSupplierDatasource } from "../../../domain/datasource/devolutionSupplier/devolutionSupplier.datasource";
import { CreateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { UpdateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../../domain/entities/devolutionSupplier.entity";
import { DevolutionSupplierRepository } from "../../../domain/repositories/devolutionSupplier/devolutionSupplier.repository";




export class DevolutionSupplierRepositoryImpl implements DevolutionSupplierRepository {

    constructor(
        private readonly datasource: DevolutionSupplierDatasource
    ) {}
    create(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<DevolutionSupplierEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<DevolutionSupplierEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<DevolutionSupplierEntity> {
        return this.datasource.delete(id)
    }
}