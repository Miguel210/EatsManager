import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Main } from "../../interfaces/clientOrder.interface";

export const getClientOrderDataAction = ( async(id: string) => {

  try {

    const { data } = await eatsmanagerApi.post<Main>(
      `/table/getorders/`,
      {
          id: id
      }
    );
    console.log(data);
    
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
