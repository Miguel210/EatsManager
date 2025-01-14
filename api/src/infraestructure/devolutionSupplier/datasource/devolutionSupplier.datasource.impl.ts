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
                paymentDate: new Date(dto.paymentDate),
                status: dto.status,
                invoiceFolio: dto.inoiceFolio
            }
        })
        
        if( !devolution ) throw 'devolution is not found';
        return DevolutionSupplierEntity.fromObject(devolution)
    }
    async get(id: string): Promise<DevolutionSupplierEntity> {

        const devolution = await prisma.devolutionSupplier.findFirst({
            where: {
                id: id
            }
        })
        if( !devolution ) throw 'devolution is not found';
        return DevolutionSupplierEntity.fromObject(devolution)
    }
    async getAll(form: any): Promise<DevolutionSupplierEntity[]> {

        const devolution = await prisma.devolutionSupplier.findMany()

        if( !devolution ) throw 'devolution is not found';
        return devolution.map(devolution => DevolutionSupplierEntity.fromObject(devolution))
    }
    async update(dto: UpdateDevolutionSupplierDto): Promise<DevolutionSupplierEntity> {
        
        const devolution = await prisma.devolutionSupplier.update({
            where: {
                id: dto.id
            },
            data: {
                paymentDate: new Date(dto.paymentDate),
                status: dto.status,
                isActive: dto.isActive
            }
        })

        if( !devolution ) throw 'devolution is not found';
        return DevolutionSupplierEntity.fromObject(devolution)
    }
    async delete(id: string): Promise<DevolutionSupplierEntity> {
        const devolution = await prisma.devolutionSupplier.update({
            where: {
                id: id
            },
            data: {/*
                isDelete: true,
                deleteAt: new Date()*/
            }
        })
        if( !devolution ) throw 'devolution is not found';
        return DevolutionSupplierEntity.fromObject(devolution)
    }
    
}