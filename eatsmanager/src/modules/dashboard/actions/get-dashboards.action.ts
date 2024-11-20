import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../interfaces/dashboard.interface";




export const getDashboardsAction = async() => {

  try {

    const { data } = await eatsmanagerApi.get<Data>(
      `/dashboard/dashboardEmp`,
    );

    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
}
