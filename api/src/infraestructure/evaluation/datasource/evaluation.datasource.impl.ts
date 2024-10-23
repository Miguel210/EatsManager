import { EvaluationDatasource } from "../../../domain/datasource/evaluation/evaluation.datasource";
import { CreateEvaluationDto } from "../../../domain/dtos/evaluation/create-evaluation.dto";
import { UpdateEvaluationDto } from "../../../domain/dtos/evaluation/update-evaluation.dto";
import { EvaluationEntity } from "../../../domain/entities/evaluation.entity";



export class EvaluationDatasourceImpl implements EvaluationDatasource {
    
    async create(dto: CreateEvaluationDto): Promise<EvaluationEntity> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<EvaluationEntity> {
        throw new Error("Method not implemented.");
    }
    async gets(form: any): Promise<EvaluationEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateEvaluationDto): Promise<EvaluationEntity> {
        throw new Error("Method not implemented.");
    }

}