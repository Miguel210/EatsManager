import { CreateMovementDetailDto } from "../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../domain/dtos/movementDetail/update-movementDetail";
import { CreateMovementDetail } from "../../domain/use-cases/movementDetail/create-movementDetail";
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

    }

    public async getAll(form: any) {

    }

    public async update(dto: UpdateMovementDetailDto) {

    }

    public async delete(id: string) {

    }
}