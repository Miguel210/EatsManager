import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/product.interface"



export const getproductAction = async(productId: string) => {

    if( productId === 'create' ) {
        return {

        }
    }

    try {
        const { data } = await eatsmanagerApi.post<Main>(
            `/product/get/`,
            {
                id: productId
            }
        )
        console.log(data);
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting product by id ${productId}`);
        
    }
}