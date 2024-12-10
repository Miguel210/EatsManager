import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/supplierOrder.interface";




export const getSupplierOrderById = async(movementId: string) => {
    
    if( movementId === 'create' ) {
        
        return {
            
        }
    }
    
    
    try{
        console.log(movementId);
        
        const { data }  = await eatsmanagerApi.post<Main>(`/movement/get/`, {
            id: movementId
        });
        console.log(data);
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting movementDetailSupplierOrder by id ${movementId}`)
        
    }
}