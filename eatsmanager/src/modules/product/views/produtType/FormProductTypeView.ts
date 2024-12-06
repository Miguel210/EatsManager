import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as yup from 'yup';
import { useForm } from "vee-validate";
import { createUpdateProductTypeAction, getproductTypeAction } from "../../actions/productType";


const validationSchema= yup.object({
    description: yup.string(),
    useStock: yup.boolean(),
    isActive: yup.boolean(),
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        productTypeId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

        const router = useRouter();

        const {
            data: productType,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['productTypeForm', props.productTypeId],
            queryFn: () => getproductTypeAction(props.productTypeId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateproductType,
            mutate
        } = useMutation({
            mutationFn: createUpdateProductTypeAction
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
        const [useStock, useStockAttrs] = defineField('useStock');
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
            productType,
            () => {
              if (!productType) return;
      
              resetForm({
                values: productType.value,
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
              values: updateproductType.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            
            description,
            descriptionAttrs,
            useStock,
            useStockAttrs,
            isActive,
            isActiveAttrs,

            onSubmit,
        }
    }
})

