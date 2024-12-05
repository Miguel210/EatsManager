import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/document.interface"



export const getDocumentAction = async(documentId: string) => {

    if( documentId === 'create' ) {
        return {

        }
    }

    try {
        const { data } = await eatsmanagerApi.post<Main>(
            `/document/get/`,
            {
                id: documentId
            }
        )
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting document by id ${documentId}`);
        
    }
}