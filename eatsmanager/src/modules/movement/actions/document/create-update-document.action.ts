import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/document.interface";



export const createUpdateDocumentAction = async(document: Partial<Data>) => {

    const doucmentId = document.id;

    if( document.id && document.id !== '' ) {
        return await updateDocument(doucmentId!, document);
    }

    return await createDocuemnt(document);
}

const updateDocument= async(documentId: string, document: Partial<Data>) => {

    delete document.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/document/update/`,
            {
                id: documentId,
                document
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading document');
    }
}


const createDocuemnt = async(document: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/document/create/`,
            {
                document
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating Document')
        
    }
}