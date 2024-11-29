import { eatsmanagerApi } from "@/api/eatsmanager.api"




export const getSupplierById = async(supplierId: string) => {

    if( supplierId === 'create' ) {

    }

    try{

        const { data }  = await eatsmanagerApi.get(`/supplier/getById/${supplierId}`);

        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting supplier by id ${supplierId}`)
        
    }
}