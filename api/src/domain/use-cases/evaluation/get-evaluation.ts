import { EvaluationEntity } from "../../entities/evaluation.entity";
import { EvaluationRepository } from "../../repositories/evaluation/evaluation.repository";


export interface GetEvaluationUseCase {
    execute(id: string): Promise <EvaluationEntity>;
}


export class GetEvaluation implements GetEvaluationUseCase {
    constructor(
        private readonly repository: EvaluationRepository
    ) {}

    execute(id: string): Promise <EvaluationEntity> {
        return this.repository.getById(id)
    }
}