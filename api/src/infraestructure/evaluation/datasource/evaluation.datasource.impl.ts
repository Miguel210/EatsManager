import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { EvaluationDatasource } from "../../../domain/datasource/evaluation/evaluation.datasource";
import { CreateEvaluationDto } from "../../../domain/dtos/evaluation/create-evaluation.dto";
import { UpdateEvaluationDto } from "../../../domain/dtos/evaluation/update-evaluation.dto";
import { EvaluationEntity } from "../../../domain/entities/evaluation.entity";



export class EvaluationDatasourceImpl implements EvaluationDatasource {
    
    async create(dto: CreateEvaluationDto): Promise<EvaluationEntity> {
        
        const evaluation = await prisma.evaluation.create({
            data: {
                id: Uuid.uuid(),
                employeeId: dto.employeeId,
                evaluatorId: dto.evaluatorId,
                date:  new Date(),
                punctuality: dto.punctuality,
                attitude: dto.attitude,
                quality: dto.quality,
                efficiency: dto.efficiency,
                initiative: dto.initiative,
                hygiene: dto.hygiene
            }
        })

        if( !evaluation ) throw `Evaluation with id ${dto} not found`;

        return EvaluationEntity.fromObject(evaluation);
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