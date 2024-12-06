import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/productType.interface"



export const getproductTypeAction = async(productTypeId: string) => {

    if( productTypeId === 'create' ) {
        return {

        }
    }

    try {
        const { data } = await eatsmanagerApi.post<Main>(
            `/producttype/get/`,
            {
                id: productTypeId
            }
        )
        console.log(data);
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting productType by id ${productTypeId}`);
        
    }
}