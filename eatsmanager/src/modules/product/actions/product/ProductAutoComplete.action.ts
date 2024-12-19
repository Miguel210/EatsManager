import { eatsmanagerApi } from "@/api/eatsmanager.api";

export interface main {
  data: Data[]
}
export interface Data {
  id: string,
  description: string
}

export const getProductAutoCompleteAction = ( async() => {

  try {

    const { data } = await eatsmanagerApi.get<main>(
      `/utils/autocomplete/product/description`,
    );
    
    console.log(data);
    
    return{ ...data }

  } catch(error) {
    console.log(error);
    throw new Error('Error getting data');

  }
});
