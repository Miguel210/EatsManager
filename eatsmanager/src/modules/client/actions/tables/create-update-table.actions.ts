import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { Data } from "../../interfaces/tables.interface";



export const createUpdateTableAction = async(table: Partial<Data>) => {

    const tableId = table.id;

    if( table.id && table.id !== '' ) {
        return await updatetable(tableId!, table);
    }

    return await createtable(table);
}

const updatetable = async(tableId: string, table: Partial<Data>) => {

    delete table.id;
    
    try {

        const { data } = await eatsmanagerApi.post<Data>(
            `/table/update/`,
            {
                id: tableId,
                table
            }
        );

            return data;

    } catch( error ) {
        console.log(error);
        throw new Error('Uploading document');
    }
}


const createtable = async(table: Partial<Data>) => {

    try {
        const { data } = await eatsmanagerApi.post(
            `/table/create/`,
            {
                table
            }
        )

        return data;
    } catch( error ) {
        console.log( error );
        throw new Error('Error creating table')
        
    }
}