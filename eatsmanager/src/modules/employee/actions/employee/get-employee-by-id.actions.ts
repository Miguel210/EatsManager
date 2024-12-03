import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/employee.interface";




export const getEmployeeById = async(employeeId: string) => {
    
    if( employeeId === 'create' ) {
        
        return {
            
        }
    }
    
    
    try{
        
        const { data }  = await eatsmanagerApi.post<Main>(`/employee/get/`, {
            id: employeeId
        });
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting employee by id ${employeeId}`)
        
    }
}