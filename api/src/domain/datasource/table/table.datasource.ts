import { CreateTableDto } from "../../dtos/table/create-table.dto";
import { UpdateTableDto } from "../../dtos/table/update-table.dto";
import { TableEntity } from "../../entities/table.entity";


export abstract class TableDatasoruce {

    abstract create(dto: CreateTableDto): Promise <TableEntity>;

    abstract get(id: string): Promise <TableEntity>;
    abstract getAll(form: any): Promise <TableEntity[]>;
    abstract update(dto: UpdateTableDto): Promise <TableEntity>;
    abstract delete(id: string): Promise <TableEntity>;
    abstract getDataTable(id: string): Promise <TableEntity>;
    abstract clientOrderDataTable(dto: UpdateTableDto): Promise <TableEntity>;
    abstract PayclientOrderDataTable(dto: UpdateTableDto): Promise <TableEntity>;
    abstract finalizateclientOrderDataTable(dto: UpdateTableDto): Promise <TableEntity>;

}