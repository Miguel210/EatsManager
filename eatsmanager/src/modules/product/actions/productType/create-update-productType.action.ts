import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/productType.interface";



export const createUpdateProductTypeAction = async(productType: Partial<Data>) => {

    const productTypeId = productType.id;

    if( productType.id && productType.id !== '' ) {
        return await updateproductType(productTypeId!, productType);
    }

    return await createproductType(productType);
}

const updateproductType = async(productTypeId: string, productType: Partial<Data>) => {

    delete productType.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/producttype/update/`,
            {
                id: productTypeId,
                productType
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading productType');
    }
}


const createproductType = async(productType: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/productType/create/`,
            {
                productType
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating productType')
        
    }
}