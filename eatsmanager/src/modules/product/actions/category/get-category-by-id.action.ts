import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/category.interface"



export const getCategoryAction = async(categoryId: string) => {

    if( categoryId === 'create' ) {
        return {

        }
    }

    try {
        const { data } = await eatsmanagerApi.post<Main>(
            `/category/get/`,
            {
                id: categoryId
            }
        )
        console.log(data);
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting category by id ${categoryId}`);
        
    }
}