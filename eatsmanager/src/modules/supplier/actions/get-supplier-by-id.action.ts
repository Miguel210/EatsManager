import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { SupplierModel } from "../interfaces/supplier.interface";




export const getSupplierById = async(supplierId: string) => {
    
    if( supplierId === 'create' ) {
        
        return {
            
        }
    }
    
    
    try{
        
        const { data }  = await eatsmanagerApi.post<SupplierModel>(`/supplier/Proveedor/getSupplier/`, {
            id: supplierId
        });
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting supplier by id ${supplierId}`)
        
    }
}