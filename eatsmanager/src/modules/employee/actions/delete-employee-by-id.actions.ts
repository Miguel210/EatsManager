import { eatsmanagerApi } from "@/api/eatsmanager.api";




export const deleteEmployeeById = async(employeeId: string) => {
    
    if( !employeeId ) return;

    try{

        await eatsmanagerApi.post(`/employee/delete`, {
            id: employeeId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting employee by id ${ employeeId }`)
        
    }
}