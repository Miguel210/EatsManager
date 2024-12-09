import { CreateMovementDetailDto } from "../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../domain/dtos/movementDetail/update-movementDetail";
import { CreateMovementDetail } from "../../domain/use-cases/movementDetail/create-movementDetail";
import { DeleteMovementDetail } from "../../domain/use-cases/movementDetail/delete-movementDetail";
import { GetMovementDetail } from "../../domain/use-cases/movementDetail/get-movementDetail";
import { GetAllMovementDetail } from "../../domain/use-cases/movementDetail/getAll-movementDetail";
import { UpdateMovementDetail } from "../../domain/use-cases/movementDetail/update-movementDetail";
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
            data: movementDet
        }
    }

    public async get(id: string) {

        const movementDet = await new GetMovementDetail( this.repository).execute(id)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: movementDet
        }
    }

    public async getAll(form: any) {
        
        const movementDet = await new GetAllMovementDetail( this.repository).execute(form)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: movementDet
        }
    }

    public async update(dto: UpdateMovementDetailDto) {

        const movementDet = await new UpdateMovementDetail( this.repository ).execute(dto)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: movementDet
        }
    }

    public async delete(id: string) {

        const movementDet = await new DeleteMovementDetail( this.repository ).execute(id)
        .then(movement => movement)
        .catch(error => console.log({error}))

        return {
            data: movementDet
        }
    }
}