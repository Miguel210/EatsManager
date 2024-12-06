import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as yup from 'yup';
import { useForm } from "vee-validate";
import { createUpdateCategoryAction, getCategoryAction } from "../../actions/category";


const validationSchema= yup.object({
    categoryName: yup.string(),
    isActive: yup.boolean(),
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        categoryId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

        const router = useRouter();

        const {
            data: category,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['categoryForm', props.categoryId],
            queryFn: () => getCategoryAction(props.categoryId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateCategory,
            mutate
        } = useMutation({
            mutationFn: createUpdateCategoryAction
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

        const [categoryName, categoryNameAttrs] = defineField('categoryName');
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
            category,
            () => {
              if (!category) return;
      
              resetForm({
                values: category.value,
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
              values: updateCategory.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            category,
            
            categoryName,
            categoryNameAttrs,
            isActive,
            isActiveAttrs,

            onSubmit,
        }
    }
})