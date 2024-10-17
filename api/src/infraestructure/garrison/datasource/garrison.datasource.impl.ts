import { GarrisonDatasource } from "../../../domain/datasource/garrison/garrison.datasource";
import { CreateGarrisonDto } from "../../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../../domain/dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../../domain/entities/garrison.entity";




export class GarrisonDatasoruceImpl implements GarrisonDatasource {

    create(dto: CreateGarrisonDto): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(dishId: string): Promise<GarrisonEntity[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateGarrisonDto): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<GarrisonEntity> {
        throw new Error("Method not implemented.");
    }

}