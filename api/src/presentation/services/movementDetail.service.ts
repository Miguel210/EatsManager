import { CreateMovementDetailDto } from "../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../domain/dtos/movementDetail/update-movementDetail";
import { CreateMovementDetail } from "../../domain/use-cases/movementDetail/create-movementDetail";
import { GetMovementDetail } from "../../domain/use-cases/movementDetail/get-movementDetail";
import { GetAllMovementDetail } from "../../domain/use-cases/movementDetail/getAll-movementDetail";
import { MovementDetailRepositoryImpl } from "../../infraestructure/movementDetail/repository/movementDetail.repository.impl";




export class MovementsDetailService {

    constructor(
        public readonly repository: MovementDetailRepositoryImpl
    ) {}

    public async create(dto: CreateMovementDetailDto) {

        const movementDet = await new CreateMovementDetail( this.repository).execute(dto)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: {
                movementDet
            }
        }
    }

    public async get(id: string) {

        const movementDet = await new GetMovementDetail( this.repository).execute(id)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: {
                movementDet
            }
        }
    }

    public async getAll(form: any) {
        console.log(form);
        
        const movementDet = await new GetAllMovementDetail( this.repository).execute(form)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: {
                movementDet
            }
        }
    }

    public async update(dto: UpdateMovementDetailDto) {

    }

    public async delete(id: string) {

    }
}