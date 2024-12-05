import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { createUpdateDocumentAction, getDocumentAction } from "../../actions";
import * as yup from 'yup';
import { useForm } from "vee-validate";


const validationSchema= yup.object({
    description: yup.string(),
    isActive: yup.boolean(),
    folio: yup.number(), 
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        documentId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

        const router = useRouter();

        const {
            data: document,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['document', props.documentId],
            queryFn: () => getDocumentAction(props.documentId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateDocument,
            mutate
        } = useMutation({
            mutationFn: createUpdateDocumentAction
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
        const [folio, folioAttrs] = defineField('folio');
        const [isActive, isActiveAttrs] = defineField('isActive');

        const onSubmit = handleSubmit ( async(values) => {
            mutate(values);
        }) 

        watchEffect(() => {
            if (isError.value && !isLoading.value) {
              router.replace('/movimiento');
              return;
            }
          });
          watch(
            document,
            () => {
              if (!document) return;
      
              resetForm({
                values: document.value,
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
              values: updateDocument.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            
            description,
            descriptionAttrs,
            folio,
            folioAttrs,
            isActive,
            isActiveAttrs,

            onSubmit,
        }
    }
})