import { eatsmanagerApi } from "@/api/eatsmanager.api";




export const deleteSupplierById = async(supplierId: string) => {
    
    if( !supplierId ) return;

    try{

        await eatsmanagerApi.post(`/supplier/Proveedor/deleted`, {
            id: supplierId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting supplier by by id ${ supplierId }`)
        
    }
}