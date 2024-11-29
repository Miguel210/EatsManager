import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { SupplierModel } from "../interfaces/supplier.interface";




export const createUpdateSUpplierAction = async(supplier: Partial<SupplierModel>) => {

    const supplierId = supplier.id;

    if( supplier.id  && supplier.id !== '' ) {
        return await updateSupplier(supplierId!, supplier);
    }

    return await createSupplier(supplier);
}


// const cleanSupplierForCreateUpdate = (supplier: Partial<SupplierModel>) => {


// }


const updateSupplier = async(supplierId: string, supplier: Partial<SupplierModel>) => {
    try {
        const {data} = await eatsmanagerApi.post<SupplierModel>(`/supplier/${supplierId}`, supplier)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading Supplier')
        
    }
}

const createSupplier = async( supplier: Partial<SupplierModel>) => {
    try {
        const {data} = await eatsmanagerApi.post<SupplierModel>(`/supplier/`, supplier)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating Supplier')
        
    }
}