import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { defineComponent, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as yup from 'yup';
import { useForm } from "vee-validate";
import { createUpdateProductAction, getproductAction } from "../../actions/product";
import { getCategoriesAction } from "../../actions/category";
import type { Obj } from "../../interfaces/category.interface";
import { getProductTypesAction } from "../../actions/productType";
import type { Obj2 } from "../../interfaces/productType.interface";


const validationSchema= yup.object({
    description: yup.string(),
    code: yup.string(),
    existence: yup.number(),
    price: yup.number(),

    productTypeId: yup.string(),
    categoryId: yup.string(),

    viewMenu: yup.boolean(),
    isActive: yup.boolean(),
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        productId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

        const router = useRouter();

        const {
            data: product,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['productForm', props.productId],
            queryFn: () => getproductAction(props.productId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateproduct,
            mutate
        } = useMutation({
            mutationFn: createUpdateProductAction
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

//todo extra data
        const {
            data: productTypeData,
            
        } = useQuery<Obj2>({
            queryKey: ['productType'],
            queryFn: () => getProductTypesAction(),
          });

        const {
            data: categoryData

        } = useQuery<Obj>({
            queryKey: ['category'],
            queryFn: () => getCategoriesAction(),
          });


        const [description, descriptionAttrs] = defineField('description');
        const [code, codeAttrs] = defineField('code');
        const [existence, existenceAttrs] = defineField('existence');
        const [price, priceAttrs] = defineField('price');

        const [productType, productTypeAttrs] = defineField('productTypeId');
        const [category, categoryAttrs] = defineField('categoryId');

        const [isActive, isActiveAttrs] = defineField('isActive');
        const [viewMenu, viewMenuAttrs] = defineField('viewMenu');

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
            product,
            () => {
              if (!product) return;
      
              resetForm({
                values: product.value,
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
              values: updateproduct.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            categoryData,
            productTypeData,
            
            
            description,
            descriptionAttrs,
            code,
            codeAttrs,
            existence,
            existenceAttrs,
            price,
            priceAttrs,
            productType,
            productTypeAttrs,
            category,
            categoryAttrs,
            viewMenu,
            viewMenuAttrs,
            isActive,
            isActiveAttrs,

            onSubmit,
        }
    }
})