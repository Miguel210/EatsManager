import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Obj } from "../../interfaces/productType.interface"



export const getProductTypesAction = async() => {


    try {

        const { data } = await eatsmanagerApi.get<Obj>(
            `/productType/`
        );


        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error('Error getter data')
    }
}