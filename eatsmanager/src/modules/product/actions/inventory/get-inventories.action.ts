import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Obj } from "../../interfaces/inventory.interface"






export const getInvenotoriesAction = async() => {


    try {

        const { data } = await eatsmanagerApi.get<Obj>(
            `/inventory/Inventario/getall`
        );

        console.log(data);
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error('Error getter data')
    }
}