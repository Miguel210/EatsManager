import { eatsmanagerApi } from "@/api/eatsmanager.api";




export const deleteTableById = async(tableId: string) => {
    
    if( !tableId ) return;

    try{

        await eatsmanagerApi.post(`/table/delete/`, {
            id: tableId
        })

    } catch( error ) {

        console.log(error);
        throw new Error(`Error deleting table by id ${ tableId }`)
        
    }
}