import { eatsmanagerApi } from "@/api/eatsmanager.api";

export const deleteProductTypeById = async(productTypeId: string) => {
    
    if( !productTypeId ) return;

    try{

        await eatsmanagerApi.post(`/producttype/delete/`, {
            id: productTypeId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting productType by id ${ productTypeId }`)
        
    }
}