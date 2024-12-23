
import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Main } from "../../interfaces/tables.interface"



export const getTableAction = async(tableId: string) => {

    if( tableId === 'create' ) {
        return {

        }
    }

    try {
        const { data } = await eatsmanagerApi.post<Main>(
            `/table/get/`,
            {
                id: tableId
            }
        )
        console.log(data);
        
        return {
            ...data.data
        }
    } catch( error ) {
        console.log(error);
        throw new Error(`Error getting table by id ${tableId}`);
        
    }
}