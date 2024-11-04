import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { ClientOrderDetailDatasource } from "../../../domain/datasource/clientOrderDetail/clientOrderDetail.datasource";
import { CreateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { UpdateClientOrderDetailDto } from "../../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto";
import { ClientOrderDetailEntity } from "../../../domain/entities/clientOrderDetail.entity";



export class ClientOrderDetailDatasourceImpl implements ClientOrderDetailDatasource {
    async create(dto: CreateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {

        const detail = await prisma.clientOrderDetail.create({
            data: {
                id: Uuid.uuid(),
                clientOrderId: dto.clientOrderId,
                garrisonId: dto.garrisonId
            }
        })
        if( !detail ) throw `ClientOrderDetail with data ${dto} not found`;

        return ClientOrderDetailEntity.fromObject(detail)
    }
    async get(id: string): Promise<ClientOrderDetailEntity> {

        const detail = await prisma.clientOrderDetail.findFirst({
            where: {
                id: id
            }
        })
        if( !detail ) throw `ClientOrderDetail with id ${id} not found`;

        return ClientOrderDetailEntity.fromObject(detail)
    }
    async getAll(form: any): Promise<ClientOrderDetailEntity[]> {

        const detail = await prisma.clientOrderDetail.findMany({
            where: {
                id: form.id
            }
        })
        if( !detail ) throw `ClientOrderDetail with data ${form} not found`;

        return detail.map( detail => ClientOrderDetailEntity.fromObject(detail))
    }
    async update(dto: UpdateClientOrderDetailDto): Promise<ClientOrderDetailEntity> {

        const detail = await prisma.clientOrderDetail.update({
            where: {
                id: dto.id
            },
            data: {
                clientOrderId: dto.clientOrderId,
                garrisonId: dto.garrisonId
            }
        })
        if( !detail ) throw `ClientOrderDetail with data ${dto} not found`;

        return ClientOrderDetailEntity.fromObject(detail)
    }
    async delete(id: string): Promise<ClientOrderDetailEntity> {

        const detail = await prisma.clientOrderDetail.update({
            where: {
                id:id
            },
            data: {
                /*
                isDelete: true,
                deleteAt: new Date()
                */
            }
        })
        if( !detail ) throw `ClientOrderDetail with id ${id} not found`;

        return ClientOrderDetailEntity.fromObject(detail)
    }

}