import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../interfaces/employee.interface";




export const createUpdateEmployeeAction = async(employee: Partial<Data>) => {

    const employeeId = employee.id;

    if( employee.id  && employee.id !== '' ) {
        return await updateEmployee(employeeId!, employee);
    }
    
    return await createEmployee(employee);
}


const updateEmployee = async(employeeId: string, employee: Partial<Data>) => {

    delete employee.id
    try {
        const {data} = await eatsmanagerApi.post<Data>(`/employee/update/`,{

            id: employeeId,
            employee
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading employee')
        
    }
}

const createEmployee = async( employee: Partial<Data>) => {
    try {
        const {data} = await eatsmanagerApi.post<Data>(`/employee/create/`, employee)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating employee')
        
    }
}