import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../../interfaces/employee.interface";



export const getEmployeesAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/employee/`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
