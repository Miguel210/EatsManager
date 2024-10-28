import { CreateMovementDto } from "../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDetailDto } from "../../domain/dtos/movementDetail/update-movementDetail";
import { MovementDetailRepositoryImpl } from "../../infraestructure/movementDetail/repository/movementDetail.repository.impl";




export class MovementsDetailService {
    
    constructor(
        public readonly repository: MovementDetailRepositoryImpl
    ) {}

    public async create(dto: CreateMovementDto) {

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