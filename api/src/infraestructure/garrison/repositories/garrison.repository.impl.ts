import { GarrisonDatasource } from "../../../domain/datasource/garrison/garrison.datasource";
import { CreateGarrisonDto } from "../../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../../domain/dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../../domain/entities/garrison.entity";
import { GarrisonRepository } from "../../../domain/repositories/garrison/garrison.repository";


export class GarrisonRepositoryImpl implements GarrisonRepository {

    constructor(
        private readonly datasource: GarrisonDatasource
    ) {}
    create(dto: CreateGarrisonDto): Promise<GarrisonEntity> {
        return this.datasource.create(dto);
    }
    getAll(dishId: string): Promise<GarrisonEntity[]> {
        return this.datasource.getAll(dishId);
    }
    getById(id: string): Promise<GarrisonEntity> {
        return this.datasource.getById(id);
    }
    update(dto: UpdateGarrisonDto): Promise<GarrisonEntity> {
        return this.datasource.update(dto);
    }
    delete(id: string): Promise<GarrisonEntity> {
        return this.datasource.delete(id);
    }
}