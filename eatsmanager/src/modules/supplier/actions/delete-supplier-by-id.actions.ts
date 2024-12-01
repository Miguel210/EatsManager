import { eatsmanagerApi } from "@/api/eatsmanager.api";




export const deleteSupplierById = async(supplierId: string) => {
    
    if( !supplierId ) return;

    try{

        await eatsmanagerApi.delete(`/supplier/Proveedor/deleted`, {
            data: supplierId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting supplier by by id ${ supplierId }`)
        
    }
}