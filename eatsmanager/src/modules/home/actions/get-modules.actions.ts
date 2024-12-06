import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Obj } from "../interface/modules.inerface";





export const getModulesAction = async() => {


    try {

        const { data } = await eatsmanagerApi.get<Obj>(`/auth/modules`);

        console.log(data);
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error('Error getting data')
        
    }
}