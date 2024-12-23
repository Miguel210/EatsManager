import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { TableDatasoruce } from "../../../domain/datasource/table/table.datasource";
import { CreateTableDto } from "../../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../../domain/dtos/table/update-table.dto";
import { TableEntity } from "../../../domain/entities/table.entity";


export class TableDatasourceImpl implements TableDatasoruce {

    async create(dto: CreateTableDto): Promise<TableEntity> {

        const table = await prisma.table.create({
            data: {
                id: Uuid.uuid(),
                description: dto.description,
                status: dto.status,
                mainTableId: dto.mainTable
            }
        })
        if( !table ) throw `Table no created`;
        return TableEntity.fromObject(table);
    }
    async get(id: string): Promise<TableEntity> {

        const table = await prisma.table.findFirst({
            where: {
                id: id,
                isDelete: false
            }
        })
        if( !table ) throw `Table not found`;
        return TableEntity.fromObject(table);
    }
    async getAll(form: any): Promise<TableEntity[]> {

        const table = await prisma.table.findMany({
            where: {
                isDelete: false
            }
        })
        console.log('table');

        if( !table ) throw `Table no created`;
        
        return table.map(e => TableEntity.fromObject(e));
    }
    async update(dto: UpdateTableDto): Promise<TableEntity> {
        await this.get(dto.id);
        console.log(dto);
        

        const table = await prisma.table.update({
            where: {
                id: dto.id
            },
            data: {
                description: dto.description,
                status: dto.status,
                mainTableId: dto.mainTable,
                isActive: dto.isActive
            }
        })
        if( !table ) throw `Table no created`;
        return TableEntity.fromObject(table);
    }
    async delete(id: string): Promise<TableEntity> {
        await this.get(id);

        const table = await prisma.table.update({
            where: {
                id: id
            },
            data: {
                isDelete: true,
                deleteAt: new Date()
            }
        })
        if( !table ) throw `Table no created`;
        return TableEntity.fromObject(table);
    }

}