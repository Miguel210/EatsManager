import { CreateMovementDto } from "../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../domain/dtos/movement/update-movement.dto";
import { CreateMovement } from "../../domain/use-cases/movement/create-movement";
import { GetMovement } from "../../domain/use-cases/movement/get-movement";
import { MovementRepositoryImpl } from "../../infraestructure/movement/repository/movement.repository.impl";



export class MovementService {

    constructor(
        readonly repository: MovementRepositoryImpl
    ) {}

    public async create(dto: CreateMovementDto) {

        const movement = await new CreateMovement( this.repository ).execute(dto)
        .then(mov => mov)
        .catch(error => console.log({error}))

        return {
            data: {
                movement
            }
        }
    }

    public async getById(id: string) {

        const movement = await new GetMovement( this.repository ).execute(id)
        .then( mov => mov)
        .catch(error => console.log({error}))

        return {
            data: {
                movement
            }
        }

    }

    public async getAll(form: any ) {

    }

    public async update(dto: UpdateMovementDto) {
        
    }
}