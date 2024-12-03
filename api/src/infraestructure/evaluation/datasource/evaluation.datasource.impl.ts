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

        if( !evaluation ) throw `Evaluation with data ${dto} not found`;

        return EvaluationEntity.fromObject(evaluation);
    }
    async getById(id: string): Promise<EvaluationEntity> {

        const evaluation = await prisma.evaluation.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                empoyee: {
                    select: {
                        id: true,
                        person: {
                            select: {
                                fullname: true
                            }
                        }
                    }
                },
                evaluator: {
                    select:{
                        id: true,
                        person:{
                            select: {
                                fullname: true
                            }
                        }
                    }
                },
                date: true,
                punctuality: true,
                attitude: true,
                quality: true,
                efficiency: true,
                initiative: true,
                hygiene: true,
                isActive: true
            }
        })
        
        if( !evaluation ) throw `Evaluation with id ${id} not found`;

        return EvaluationEntity.fromObject(evaluation);
    }
    async gets(form: any): Promise<EvaluationEntity[]> {

        let date: any = form.date;
        if( date ) {
            date = new Date(date)
        } 
        console.log(date);
        
        const evaluation = await prisma.evaluation.findMany({
            where: {
                employeeId: {
                    in: form.employeeId || undefined
                },
                evaluatorId: {
                    in: form.evaluatorId || undefined
                },
                date: date || undefined,
                isActive: form.isActive
            },
            select: {
                id: true,
                employeeId: true,
                date: true,
                empoyee :{
                    select: {
                        person: {
                            select: {
                                fullname: true,
                            }
                        }
                    }
                },
            }
        })
        
        if( !evaluation ) throw `Evaluation with form ${form} not found`;

        return evaluation.map( evaluation => EvaluationEntity.fromObject(evaluation));
    }
    async update(dto: UpdateEvaluationDto): Promise<EvaluationEntity> {

        await this.getById(dto.id);
        
        const evaluation = await prisma.evaluation.update({
            where: {
                id: dto.id
            },
            data: {
                punctuality: dto.punctuality,
                attitude: dto.attitude,
                quality: dto.quality,
                efficiency: dto.efficiency,
                initiative: dto.initiative,
                hygiene: dto.hygiene
            }
        })
        
        if( !evaluation ) throw `Evaluation with id ${dto.id} not found`;

        return EvaluationEntity.fromObject(evaluation);

    }

}