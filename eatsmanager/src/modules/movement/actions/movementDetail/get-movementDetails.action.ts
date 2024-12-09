import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../../interfaces/movementDetail.interface";



export const getMovementDetailsAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/movementDetail/`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
