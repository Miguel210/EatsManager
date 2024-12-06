import { eatsmanagerApi } from "@/api/eatsmanager.api";

export const deleteCategoryById = async(categoryId: string) => {
    
    if( !categoryId ) return;

    try{

        await eatsmanagerApi.post(`/category/delete/`, {
            id: categoryId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting category by id ${ categoryId }`)
        
    }
}