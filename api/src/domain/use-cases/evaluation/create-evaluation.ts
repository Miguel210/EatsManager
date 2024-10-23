import { CreateEvaluationDto } from "../../dtos/evaluation/create-evaluation.dto";
import { EvaluationEntity } from "../../entities/evaluation.entity";
import { EvaluationRepository } from "../../repositories/evaluation/evaluation.repository";


export interface CreateEvaluationUseCase {
    execute(dto: CreateEvaluationDto): Promise <EvaluationEntity>;
}


export class CreateEvaluation implements CreateEvaluationUseCase {
    constructor(
        private readonly repository: EvaluationRepository
    ) {}

    execute(dto: CreateEvaluationDto): Promise <EvaluationEntity> {
        return this.repository.create(dto)
    }
}