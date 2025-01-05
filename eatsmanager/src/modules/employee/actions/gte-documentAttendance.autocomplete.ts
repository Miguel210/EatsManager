import { eatsmanagerApi } from "@/api/eatsmanager.api";



export const getDocumentAttendanceAutoCompleteAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<{id: string, description: string}[]>(
      `/utils/autocomplete/documentAttendance/description`,
    );
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
