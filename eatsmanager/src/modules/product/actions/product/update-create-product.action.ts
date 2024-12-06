import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/product.interface";



export const createUpdateProductAction = async(product: Partial<Data>) => {

    const productId = product.id;

    if( product.id && product.id !== '' ) {
        return await updateproduct(productId!, product);
    }

    return await createproduct(product);
}

const updateproduct = async(productId: string, product: Partial<Data>) => {

    delete product.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/product/update/`,
            {
                id: productId,
                product
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading product');
    }
}


const createproduct = async(product: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/product/create/`,
            {
                product
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating product')
        
    }
}