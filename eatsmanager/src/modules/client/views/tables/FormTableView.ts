import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as yup from 'yup';
import { useForm } from "vee-validate";
import { createUpdateTableAction, getTableAction } from "../../actions/tables/index";


const validationSchema= yup.object({
    categoryName: yup.string(),
    isActive: yup.boolean(),
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        tableId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

        const router = useRouter();

        const {
            data: table,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['tableForm', props.tableId],
            queryFn: () => getTableAction(props.tableId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateTable,
            mutate
        } = useMutation({
            mutationFn: createUpdateTableAction
        })

        const {
            values,
            defineField,
            errors,
            handleSubmit,
            resetForm,
            meta
        } = useForm({
            validationSchema
        })

        const [description, descriptionAttrs] = defineField('description');
        const [status, statusAttrs] = defineField('status');
        const [isActive, isActiveAttrs] = defineField('isActive');


        const onSubmit = handleSubmit ( async(values) => {
            mutate(values);
        }) 

        watchEffect(() => {
            if (isError.value && !isLoading.value) {
              router.replace('/producto');
              return;
            }
          });
          watch(
            table,
            () => {
              if (!table) return;
      
              resetForm({
                values: table.value,
              });
            },
            {
              deep: true,
              immediate: true,
            },
          );
      
          watch( isUpdateSuccess, (value) => {
            console.log('isUpdateSuccess');
      
            if( !value ) return;
      
            resetForm({
              values: updateTable.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            table,
            
            description,
            descriptionAttrs,
            status,
            statusAttrs,
            isActive,
            isActiveAttrs,

            statusModiefied: (): boolean => {
                if( status.value === 'Ocupada') return true;
                if( status.value === 'Esperando Orden') return true;
                if( status.value === 'Orden Tomada') return true;
                if( status.value === 'Combinada') return true;

                return false;
            },
            onSubmit,
        }
    }
})