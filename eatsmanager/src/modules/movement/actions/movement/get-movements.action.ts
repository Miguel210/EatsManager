import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../../interfaces/movement.interface";



export const getMovementAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/movement/`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
