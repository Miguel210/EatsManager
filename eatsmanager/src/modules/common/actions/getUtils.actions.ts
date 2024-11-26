import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Main } from "../interfaces/utils.interface";




export const getUtilsAction = async(module: string) => {

  try {

    const { data } = await eatsmanagerApi.post<Main>(
      `/utils/${module}`,
    );

    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
}
