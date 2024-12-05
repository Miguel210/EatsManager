import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Obj } from "../../interfaces/product.interface"






export const getProductsAction = async() => {


    try {

        const { data } = await eatsmanagerApi.get<Obj>(
            `/product/`
        );


        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error('Error getter data')
    }
}