import { UpdateEvaluationDto } from "../../dtos/evaluation/update-evaluation.dto";
import { EvaluationEntity } from "../../entities/evaluation.entity";
import { EvaluationRepository } from "../../repositories/evaluation/evaluation.repository";


export interface UpdateEvaluationUseCase {
    execute(dto: UpdateEvaluationDto): Promise <EvaluationEntity>;
}


export class UpdateEvaluation implements UpdateEvaluationUseCase {
    constructor(
        private readonly repository: EvaluationRepository
    ) {}

    execute(dto: UpdateEvaluationDto): Promise <EvaluationEntity> {
        return this.repository.update(dto)
    }
}