import { EvaluationEntity } from "../../entities/evaluation.entity";
import { EvaluationRepository } from "../../repositories/evaluation/evaluation.repository";


export interface GetsEvaluationUseCase {
    execute(form: any): Promise <EvaluationEntity[]>;
}


export class GetsEvaluation implements GetsEvaluationUseCase {
    constructor(
        private readonly repository: EvaluationRepository
    ) {}

    execute(form: any): Promise <EvaluationEntity[]> {
        return this.repository.gets(form)
    }
}