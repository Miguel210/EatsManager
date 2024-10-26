import { CreateMovementDto } from "../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../domain/dtos/movement/update-movement.dto";
import { MovementRepositoryImpl } from "../../infraestructure/movement/repository/movement.repository.impl";



export class MovementService {

    constructor(
        readonly repository: MovementRepositoryImpl
    ) {}

    public async create(dto: CreateMovementDto) {

    }

    public async getById(id: string) {

    }

    public async getAll(form: any ) {

    }

    public async update(dto: UpdateMovementDto) {
        
    }
}