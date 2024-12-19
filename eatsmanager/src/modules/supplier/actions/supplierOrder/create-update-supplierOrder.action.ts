import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Main } from '../../interfaces/supplierOrder.interface'




export const createUpdateSUpplierOrderAction = async(supplier: Partial<Main>) => {

    const supplierId = supplier.data?.id

    console.log('pase por aqui compaaaaaa');
    


    if( supplier.data?.id  && supplier.data?.id !== '' ) {
        return await updateSupplierOrder(supplierId!, supplier);
    }
    
    return await createSupplierOrder(supplier);
}


const updateSupplierOrder = async(supplierId: string, supplier: Partial<Main>) => {

    try {
        const {data} = await eatsmanagerApi.post<Main>(`/movement/update/`,{

            id: supplierId,
            supplier
        })
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('uploading Supplier')
        
    }
}

const createSupplierOrder = async( supplier: Partial<Main>) => {
    try {
        const {data} = await eatsmanagerApi.post<Main>(`/movement/create/`, supplier)
        return data;

    } catch ( error ){
        console.log(error);
        throw new Error('Error creating Supplier')
        
    }
}