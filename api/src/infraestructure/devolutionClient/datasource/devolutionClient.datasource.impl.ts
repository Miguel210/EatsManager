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
                paymentDate: dto.paymentDate,
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