import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/category.interface";



export const createUpdateCategoryAction = async(category: Partial<Data>) => {

    const categoryId = category.id;

    if( category.id && category.id !== '' ) {
        return await updateCategory(categoryId!, category);
    }

    return await createCategory(category);
}

const updateCategory = async(categoryId: string, category: Partial<Data>) => {

    delete category.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/category/update/`,
            {
                id: categoryId,
                category
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading document');
    }
}


const createCategory = async(category: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/category/create/`,
            {
                category
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating category')
        
    }
}