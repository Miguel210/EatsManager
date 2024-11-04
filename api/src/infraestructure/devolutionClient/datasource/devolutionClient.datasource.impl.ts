import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { DevolutionClientDatasource } from "../../../domain/datasource/devolutionClient/devolutionClient.datasource";
import { CreateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/create-devolutionClient.dto";
import { UpdateDevolutionClientDto } from "../../../domain/dtos/devolutionClient/update-devolutionClient.dto";
import { DevolutionClientEntity } from "../../../domain/entities/devolutionClient.entity";



export class DevolutionClientDatasourceImpl implements DevolutionClientDatasource {
    async create(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity> {

        const devolution = await prisma.devolutionClient.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                paymentDate: new Date( dto.paymentDate),
                status: dto.status,
                invoiceFolio: 'devolucionClient'
            }
        });

        if( !devolution ) throw 'is not found'
        return DevolutionClientEntity.fromObject(devolution);
    }
    async get(id: string): Promise<DevolutionClientEntity> {
        const devolution = await prisma.devolutionClient.findFirst({
            where: {
                id: id
            }
        })

        if( !devolution ) throw 'is not found'
        return DevolutionClientEntity.fromObject(devolution);
    }
    async getAll(form: any): Promise<DevolutionClientEntity[]> {
        
        const devolution = await prisma.devolutionClient.findMany()

        if( !devolution ) throw 'is not found'
        return devolution.map(devolution => DevolutionClientEntity.fromObject(devolution));
    }
    async update(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity> {
        
        const devolution = await prisma.devolutionClient.update({
            where: {
                id: dto.id
            },
            data: {
                paymentDate: new Date( dto.paymentDate),
                status: dto.status,
                isActive: dto.isActive
            }
        })
        
        if( !devolution ) throw 'is not found'
        return DevolutionClientEntity.fromObject(devolution);
    }
    async delete(id: string): Promise<DevolutionClientEntity> {

        const devolution = await prisma.devolutionClient.update({
            where: {
                id: id
            },
            data: {/*
                isDelete: true,
                deleteAt: new Date()*/
            }
        })
        
        if( !devolution ) throw 'is not found'
        return DevolutionClientEntity.fromObject(devolution);
    }

}