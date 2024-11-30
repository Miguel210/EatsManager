import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../interfaces/supplier.interface";



export const getSuppliersAction = ( async(module: string) => {

  try {

    const { data } = await eatsmanagerApi.get<Obj>(
      `/supplier/${module}`,
    );

    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
