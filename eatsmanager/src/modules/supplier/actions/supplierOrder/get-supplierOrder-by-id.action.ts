import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/supplierOrder.interface";




export const getSupplierOrderById = async(movementId: string) => {
    
    if( movementId === 'create' ) {
        
        return {
            data: {
                extra: 'supplierOrder',
                isCreate: true,
                movementDetail: [
                    {
                        isCreatemov: true,
                        id: "",
                        product: {
                          id: "",
                          description: ""
                        },
                        quantity: 0,
                        priceUnit: 0,
                        subTotal: 0,
                        tax: 0,
                        total: 0,
                        costUnit: 0,
                    }
                ],
            }

        }
    }
    
    
    try{
        console.log(movementId);
        
        const { data }  = await eatsmanagerApi.post<Main>(`/movement/get/`, {
            id: movementId
        });
        console.log(data);
        
        return {
            ...data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting movementDetailSupplierOrder by id ${movementId}`)
        
    }
}