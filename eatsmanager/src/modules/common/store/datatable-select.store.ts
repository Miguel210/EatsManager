import { defineStore } from "pinia";
import { ref } from "vue";





export const useDataTableSelectStore = defineStore('selectData', () => {
    const selecetId = ref<string | undefined>();


    const getSelect = (seletedData: string) => {
        console.log(seletedData);
        
        return;
        
    }

    return {
        selecetId,
        
        getSelect
    }
})