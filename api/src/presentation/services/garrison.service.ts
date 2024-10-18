import { CreateGarrisonDto } from "../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../domain/dtos/garrison/update-garrison.dto";
import { CreateGarrison } from "../../domain/use-cases/garrison/create-garrison";
import { GetGarrison } from "../../domain/use-cases/garrison/get-garrison";
import { GetGarrisons } from "../../domain/use-cases/garrison/get-garrisons";
import { UpdateGarrison } from "../../domain/use-cases/garrison/update-garrison";
import { GarrisonRepositoryImpl } from "../../infraestructure/garrison/repositories/garrison.repository.impl";


export class GarrisonService {

    constructor(
        readonly repository: GarrisonRepositoryImpl
    ) {}

    public async create(dto: CreateGarrisonDto) {

        const garrison = await new CreateGarrison(this.repository).execute(dto)
        .then(garrison => garrison)
        .catch(error => console.log({error}));

        return {
            data: {
                garrison
            }
        }
    }

    public async get(id: string) {

        const garrison = await new GetGarrison(this.repository).execute(id)
        .then(garrison => garrison)
        .catch(error => console.log({error}));

        return {
            data: {
                garrison
            }
        }
    }

    public async getAll(dishId: string) {
        const garrison = await new GetGarrisons(this.repository).execute(dishId)
        .then(garrison => garrison)
        .catch(error => console.log({error}));

        return {
            data: {
                garrison
            }
        }
    }


    public async update(dto: UpdateGarrisonDto) {
        const garrison = await new UpdateGarrison(this.repository).execute(dto)
        .then(garrison => garrison)
        .catch(error => console.log({error}));

        return {
            data: {
                garrison
            }
        }
    }

    public async delete(id: string) {
        
    }
}