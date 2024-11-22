import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Supplier } from "../interfaces/supplier.interface";



export const getSuppliersAction = ( async(module: string) => {

  try {

    const { data } = await eatsmanagerApi.get<Supplier>(
      `/supplier/${module}`,
    );

    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
