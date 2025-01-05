import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { DataForm } from "../../interfaces/evaluation.interface";




export const getEvaluationById = async(evaluationId: string) => {
    
    if( evaluationId === 'create' ) {
        
        return {
            evaluatorId: 'AddEvaluator',
            evaluationId: 'AddEvaluation',
            employeeId: '',
            punctuality: 0,
            attitude: 0,
            quality: 0,
            efficiency: 0,
            initiative: 0,
            hygiene: 0,
            
        }
    }
    
    
    try{
        
        const { data }  = await eatsmanagerApi.post<DataForm>(`/evaluation/get/`, {
            id: evaluationId
        });
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting employee by id ${evaluationId}`)
        
    }
}