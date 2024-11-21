import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Dashboard } from "../interfaces/dashboard.interface";




export const getDashboardsAction = async(module: string) => {

  try {

    const { data } = await eatsmanagerApi.get<Dashboard>(
      `/dashboard/${module}`,
    );

    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
}
