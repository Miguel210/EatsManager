import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Main } from '../../interfaces/supplierOrder.interface'




export const createUpdateSUpplierOrderAction = async(supplier: Partial<Main>) => {

    const supplierId = supplier.data?.id

    if( supplier.data?.id  && supplier.data?.id !== '' ) {
        return await updateSupplier(supplierId!, supplier);
    }
    
    return await createSupplier(supplier);
}


const updateSupplier = async(supplierId: string, supplier: Partial<Main>) => {

    try {
        const {data} = await eatsmanagerApi.post<Main>(`/movement//update/`,{

            id: supplierId,
            supplier
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading Supplier')
        
    }
}

const createSupplier = async( supplier: Partial<Main>) => {
    try {
        const {data} = await eatsmanagerApi.post<Main>(`/movement/create/`, supplier)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating Supplier')
        
    }
}