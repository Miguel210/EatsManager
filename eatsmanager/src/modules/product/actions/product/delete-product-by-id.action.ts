import { eatsmanagerApi } from "@/api/eatsmanager.api";

export const deleteProductById = async(productId: string) => {
    
    if( !productId ) return;

    try{

        await eatsmanagerApi.post(`/product/delete/`, {
            id: productId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting product by id ${ productId }`)
        
    }
}