import { EvaluationRepositoryImpl } from "../../infraestructure/evaluation/repository/evaluation.repository.impl";



export class EvaluationService {

    constructor(
        readonly repository: EvaluationRepositoryImpl
    ) {}
}