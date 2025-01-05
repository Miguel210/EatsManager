import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/attendance.interface";



export const getAttendancesAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<Data>(
      `/attendance/`,
    );
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
