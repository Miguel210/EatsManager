import { eatsmanagerApi } from "@/api/eatsmanager.api";



export const getEmployeesAutoCompleteAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<{id: string, personId: string}[]>(
      `/utils/autocomplete/employee/personId`,
    );
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
