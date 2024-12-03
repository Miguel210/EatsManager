import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { DataTableDt } from "../../interfaces/evaluation.interface";



export const getEvaluationsAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<DataTableDt>(
      `/evaluation/`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
