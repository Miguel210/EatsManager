import { eatsmanagerApi } from "@/api/eatsmanager.api";




export const deleteDocumentById = async(documentId: string) => {
    
    if( !documentId ) return;

    try{

        await eatsmanagerApi.post(`/document/delete/`, {
            id: documentId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting document by id ${ documentId }`)
        
    }
}