import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../interfaces/supplier.interface";




export const createUpdateSUpplierAction = async(supplier: Partial<Data>) => {

    const supplierId = supplier.id;

    if( supplier.id  && supplier.id !== '' ) {
        return await updateSupplier(supplierId!, supplier);
    }
    
    return await createSupplier(supplier);
}


const updateSupplier = async(supplierId: string, supplier: Partial<Data>) => {

    delete supplier.id
    try {
        const {data} = await eatsmanagerApi.post<Data>(`/supplier/Proveedor/update`,{

            id: supplierId,
            supplier
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading Supplier')
        
    }
}

const createSupplier = async( supplier: Partial<Data>) => {
    try {
        const {data} = await eatsmanagerApi.post<Data>(`/supplier/Proveedor/`, supplier)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating Supplier')
        
    }
}