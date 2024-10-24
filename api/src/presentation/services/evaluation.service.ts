import { CreateEvaluationDto } from "../../domain/dtos/evaluation/create-evaluation.dto";
import { CreateEvaluation } from "../../domain/use-cases/evaluation/create-evaluation";
import { GetEvaluation } from "../../domain/use-cases/evaluation/get-evaluation";
import { EvaluationRepositoryImpl } from "../../infraestructure/evaluation/repository/evaluation.repository.impl";



export class EvaluationService {

    constructor(
        readonly repository: EvaluationRepositoryImpl
    ) {}

    public async create(dto: CreateEvaluationDto){

        const evaluation = await new CreateEvaluation( this.repository ).execute(dto)
        .then( evaluation => evaluation )
        .catch( error => console.log(error) );

        return {
            data: {
                evaluation
            }
        }
    }
    
    public async getById(id: string){

        const evaluation = await new GetEvaluation( this.repository ).execute(id)
        .then( evaluation => evaluation )
        .catch( error => console.log(error) );

        return {
            data: {
                evaluation
            }
        }
    }

    public async get(dto: CreateEvaluationDto){

    }

    public async update(dto: CreateEvaluationDto){

    }

}