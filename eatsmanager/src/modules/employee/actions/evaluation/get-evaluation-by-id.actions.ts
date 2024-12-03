import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { DataForm } from "../../interfaces/evaluation.interface";




export const getEvaluationById = async(evaluationId: string) => {
    
    if( evaluationId === 'create' ) {
        
        return {
            
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