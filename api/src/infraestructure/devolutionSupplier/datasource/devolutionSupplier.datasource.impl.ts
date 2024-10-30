import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { DevolutionSupplierDatasource } from "../../../domain/datasource/devolutionSupplier/devolutionSupplier.datasource";
import { CreateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { UpdateDevolutionSupplierDto } from "../../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto";
import { DevolutionSupplierEntity } from "../../../domain/entities/devolutionSupplier.entity";



export class DevolutionSupplierDatasourceImpl implements DevolutionSupplierDatasource {

    async create(dto: CreateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        
        const devolution = await prisma.devolutionSupplier.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                paymentDate: dto.paymentDate,
                status: dto.status,
                invoiceFolio: dto.inoiceFolio
            }
        })
        
        if( !devolution ) throw 'devolution is not found';
        return DevolutionSupplierEntity.fromObject(devolution)
    }
    async get(id: string): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<DevolutionSupplierEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<DevolutionSupplierEntity> {
        throw new Error("Method not implemented.");
    }
    
}