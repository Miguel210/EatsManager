import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { SupplierDatasource } from "../../../domain/datasource/supplier/supplier.datasource";
import { CreateSupplierDto } from "../../../domain/dtos/supplier/create-supplier.dto";
import { UpdateSupplierDto } from "../../../domain/dtos/supplier/update-supplier.dto";
import { SupplierEntity } from "../../../domain/entities/supplier.entity";



export class SupplierDatasoruceImpl implements SupplierDatasource {

    async create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
        const supplier = await prisma.supplier.create({
            data: {
                id: Uuid.uuid.toString(),
                personId: createSupplierDto.personId!
            }
        })

        if( !supplier ) throw `Supplier no created`;
        return SupplierEntity.fromObj(supplier);
    }

    async getAll(): Promise<SupplierEntity[]> {
        const suppliers = await prisma.supplier.findMany();

        return suppliers.map(supplier => SupplierEntity.fromObj(supplier));
    }

    async findbyId(id: string): Promise<SupplierEntity> {
        const supplier = await prisma.supplier.findFirst({
            where: {
                id: id
            }
        });

        if( !supplier ) throw `Supplier with id ${id} not found`;
        return SupplierEntity.fromObj(supplier);
    }

    async updateById(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity> {
        await this.findbyId( updateSupplierDto.id);

        const updateSupplier = await prisma.supplier.update({
            where: {
                id: updateSupplierDto.id
            },
            data: updateSupplierDto!.values
        })

        return SupplierEntity.fromObj(updateSupplier)
    }

    async deleteById(id: string): Promise<SupplierEntity> {
        await this.findbyId(id);

        const deleted = await prisma.supplier.delete({
            where: {id}
        });

        return SupplierEntity.fromObj(deleted);
    }

}