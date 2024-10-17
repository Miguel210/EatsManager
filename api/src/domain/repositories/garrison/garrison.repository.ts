import { CreateGarrisonDto } from "../../dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../entities/garrison.entity";



export abstract class GarrisonRepository {

    abstract create(dto: CreateGarrisonDto): Promise <GarrisonEntity>; 

    abstract getAll(dishId: string):  Promise <GarrisonEntity[]>;
    abstract getById(id: string):  Promise <GarrisonEntity>;
    abstract update(dto: UpdateGarrisonDto):  Promise <GarrisonEntity>;
    abstract delete(id: string):  Promise <GarrisonEntity>;

}