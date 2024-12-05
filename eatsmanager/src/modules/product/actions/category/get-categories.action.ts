import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Obj } from "../../interfaces/category.interface"






export const getCategoriesAction = async() => {


    try {

        const { data } = await eatsmanagerApi.get<Obj>(
            `/category/`
        );


        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error('Error getter data')
    }
}