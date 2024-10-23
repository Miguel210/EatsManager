import { CreateEvaluationDto } from "../../dtos/evaluation/create-evaluation.dto";
import { UpdateEvaluationDto } from "../../dtos/evaluation/update-evaluation.dto";
import { EvaluationEntity } from "../../entities/evaluation.entity";


export abstract class EvaluationRepository {

    abstract create(dto: CreateEvaluationDto): Promise <EvaluationEntity>;
    abstract getById(id: string): Promise <EvaluationEntity>;
    abstract gets(form: any): Promise <EvaluationEntity[]>;
    abstract update(dto: UpdateEvaluationDto): Promise <EvaluationEntity>;

}