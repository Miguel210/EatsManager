import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { ClientOrderDatasource } from "../../../domain/datasource/clientOrder/clientOrder.datasource";
import { CreateClientOrderDto } from "../../../domain/dtos/clientOrder/create-clientOrder.dto";
import { UpdateClientOrderDto } from "../../../domain/dtos/clientOrder/update-clientOrder.dto";
import { ClientOrderEntity } from "../../../domain/entities/clientOrder.entity";



export class ClientOrderDatasourceImpl implements ClientOrderDatasource {
    async create(dto: CreateClientOrderDto): Promise<ClientOrderEntity> {
        
        const order = await prisma.clientOrder.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                invoiceFolio: dto.inoiceFolio,
                paymentDate: dto.paymentDate,
                status: dto.status,
                tableId: dto.tableId
            }
        })

        if( !order ) throw 'is not found';
        return ClientOrderEntity.fromObject(order);
    }
    async get(id: string): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<ClientOrderEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateClientOrderDto): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<ClientOrderEntity> {
        throw new Error("Method not implemented.");
    }

}