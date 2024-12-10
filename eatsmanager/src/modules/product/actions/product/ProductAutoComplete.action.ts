import { eatsmanagerApi } from "@/api/eatsmanager.api";



export const getProductAutoCompleteAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<{id: string, personId: string}[]>(
      `/utils/autocomplete/product/description`,
    );
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
