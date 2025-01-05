import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Attendance } from "../../interfaces/attendance.interface";




export const getAttendanceById = async(empleadoId: string) => {
    
    console.log(empleadoId);
    
    if( empleadoId === 'create' ) {
        
        return {
            data: {
                employeeId: '',
                date: '',
                hour: '',
                isActive: true,
                documentId: '',
            }

        }
    }
    
    
    try{
        
        const { data }  = await eatsmanagerApi.post<Attendance>(`/attendance/get/`, {
            id: empleadoId
        });
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting attendance by id ${empleadoId}`)
        
    }
}