import { CreateEvaluationDto } from "../../domain/dtos/evaluation/create-evaluation.dto";
import { EvaluationRepositoryImpl } from "../../infraestructure/evaluation/repository/evaluation.repository.impl";



export class EvaluationService {

    constructor(
        readonly repository: EvaluationRepositoryImpl
    ) {}

    public async create(dto: CreateEvaluationDto){

    }

    public async get(dto: CreateEvaluationDto){

    }

    public async getById(dto: CreateEvaluationDto){

    }

    public async update(dto: CreateEvaluationDto){

    }

}