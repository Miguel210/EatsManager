import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { DataForm } from "../../interfaces/evaluation.interface";




export const createUpdateEvaluationAction = async(evaluation: Partial<DataForm>) => {
    
    const evaluationId = evaluation.id;

    if( evaluation.id  && evaluation.id !== '' ) {
        return await updateEvaluation(evaluationId!, evaluation);
    }
    
    return await createEvaluation(evaluation);
}


const updateEvaluation = async(evaluationId: string, evaluation: Partial<DataForm>) => {

    delete evaluation.id
    try {
        const {data} = await eatsmanagerApi.post<DataForm>(`/evaluation/update/`,{

            id: evaluationId,
            evaluation
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading evaluation')
        
    }
}

const createEvaluation = async( evaluation: Partial<DataForm>) => {
    
    try {
        const {data} = await eatsmanagerApi.post<DataForm>(`/evaluation/create/`, evaluation)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating evaluation')
        
    }
}