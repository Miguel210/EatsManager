import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/clientOrder.interface";



export const createUpdateClientOrderAction = async(clientOrder: Partial<Data>) => {

    console.log(clientOrder);
    const clientOrderId = clientOrder.id;

    

    if( clientOrder.id && clientOrder.id !== '' ) {
        return await updateclientOrder(clientOrderId!, clientOrder!);
    }

    return await createclientOrder(clientOrder);
}

const updateclientOrder = async(clientOrderId: string, clientOrder: Partial<Data>) => {

    delete clientOrder.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/table/clientOrder/`,
            {
                id: clientOrderId,
                clientOrder
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading clientOrder');
    }
}


const createclientOrder = async(clientOrder: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/table/clientOrder/`,
            {
                clientOrder
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating clientOrder')
        
    }
}