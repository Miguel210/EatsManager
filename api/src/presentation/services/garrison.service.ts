import { CreateGarrisonDto } from "../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../domain/dtos/garrison/update-garrison.dto";
import { GarrisonRepositoryImpl } from "../../infraestructure/garrison/repositories/garrison.repository.impl";


export class GarrisonService {

    constructor(
        readonly repository: GarrisonRepositoryImpl
    ) {}

    public async create(dto: CreateGarrisonDto) {

    }

    public async getAll(dishId: string) {
        
    }

    public async get(id: string) {
        
    }

    public async update(dto: UpdateGarrisonDto) {
        
    }

    public async delete(id: string) {
        
    }
}