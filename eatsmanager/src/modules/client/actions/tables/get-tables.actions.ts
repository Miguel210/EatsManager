
import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../../interfaces/tables.interface";

export const getClientsAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/table`,
    );
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
