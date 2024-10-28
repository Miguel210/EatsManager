import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { MovementDatasource } from "../../../domain/datasource/movement/movement.datasource";
import { CreateMovementDto } from "../../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../../domain/dtos/movement/update-movement.dto";
import { MovementEntity } from "../../../domain/entities/movement.entity";




export class MovementDatasourceImpl implements MovementDatasource {

    async create(dto: CreateMovementDto): Promise<MovementEntity> {
        
        const movement = await prisma.movement.create({
            data: {
                id: Uuid.uuid(),
                personId: dto.personId,
                documentId: dto.documentId,
                elaborateId: dto.elaborateid || undefined,
                amount: dto.amout,
                status: dto.status,
                isActive: true,
                referenceId: dto.referenceId || undefined,
                date: new Date()
            }
        });
        
        if( !movement ) throw `Movement with data ${dto} not created`;
        console.log(movement);
        
        return MovementEntity.fromObject(movement);

    }
    async getById(id: string): Promise<MovementEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(form: any): Promise<MovementEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateMovementDto): Promise<MovementEntity> {
        throw new Error("Method not implemented.");
    }

}