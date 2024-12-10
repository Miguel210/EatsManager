import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../../interfaces/movement.interface";



export const getMovementAction = ( async(search: boolean) => {

  if( search === false ) {
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
  }

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/movement/?documentId=314bc909-4e7d-423c-8c61-6fb712ab48f4`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
