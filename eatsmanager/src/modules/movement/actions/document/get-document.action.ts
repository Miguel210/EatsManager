import { eatsmanagerApi } from "@/api/eatsmanager.api"
import type { Obj } from "../../interfaces/document.interface";



export const getDocumentsAction = async() => {

try {

    const { data } = await eatsmanagerApi.get<Obj>('/document/');
   
       return {
           ...data
       }
} catch( error ) {

    console.log(error);
    
    throw new Error('Error getter data')
    
}

}