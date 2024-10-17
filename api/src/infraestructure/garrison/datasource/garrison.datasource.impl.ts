import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { GarrisonDatasource } from "../../../domain/datasource/garrison/garrison.datasource";
import { CreateGarrisonDto } from "../../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../../domain/dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../../domain/entities/garrison.entity";




export class GarrisonDatasoruceImpl implements GarrisonDatasource {

    async create(dto: CreateGarrisonDto): Promise<GarrisonEntity> {
        const garrison = await prisma.garrison.create({
            data: {
                id: Uuid.uuid(),
                dishId: dto.dishId,
                garrisonId: dto.garrisonId,
                quantity: dto.quantity,
                identifier: dto.identifier,
                isActive: dto.isActive

            }
        });

        if( !garrison ) throw `Garrison with data ${garrison} not found`;

        return GarrisonEntity.fromObject(garrison);
    }
    async getAll(dishId: string): Promise<GarrisonEntity[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<GarrisonEntity> {
        
        const garrison = await prisma.garrison.findFirst({
            where: {
                id: id,
                isDelete: false
            }
        })

        if( !garrison ) throw `Garrison with id ${id} not found`;

        return GarrisonEntity.fromObject(garrison);
    }
    async update(dto: UpdateGarrisonDto): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }

}