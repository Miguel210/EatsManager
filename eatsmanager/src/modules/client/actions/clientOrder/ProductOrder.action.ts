import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Main } from "../../interfaces/productOrder.interface"

export const getProductOrderAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Main>(
      `/utils/productOrder`,
    );
    
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
