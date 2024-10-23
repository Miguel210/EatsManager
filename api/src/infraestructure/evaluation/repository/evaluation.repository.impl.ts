import { EvaluationDatasource } from "../../../domain/datasource/evaluation/evaluation.datasource";
import { CreateEvaluationDto } from "../../../domain/dtos/evaluation/create-evaluation.dto";
import { UpdateEvaluationDto } from "../../../domain/dtos/evaluation/update-evaluation.dto";
import { EvaluationEntity } from "../../../domain/entities/evaluation.entity";
import { EvaluationRepository } from "../../../domain/repositories/evaluation/evaluation.repository";




export class EvaluationRepositoryImpl implements EvaluationRepository {

    constructor(
        private readonly datasource: EvaluationDatasource
    ) {}
    create(dto: CreateEvaluationDto): Promise<EvaluationEntity> {
        return this.datasource.create(dto)
    }
    getById(id: string): Promise<EvaluationEntity> {
        return this.datasource.getById(id)
    }
    gets(form: any): Promise<EvaluationEntity[]> {
        return this.datasource.gets(form)
    }
    update(dto: UpdateEvaluationDto): Promise<EvaluationEntity> {
        return this.datasource.update(dto)
    }

    
}