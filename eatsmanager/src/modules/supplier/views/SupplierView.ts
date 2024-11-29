import { useMutation, useQuery } from "@tanstack/vue-query";
import { watch, watchEffect, defineComponent } from 'vue';
import {  useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { getSupplierById } from "../actions/get-supplier-by-id.action";
import { createUpdateSUpplierAction } from "../actions/create-update-supplier.action";


import InputText from 'primevue/inputtext';
import CustomSelect from "@/modules/common/components/CustomSelect.vue";

import type { Main } from "@/modules/common/interfaces/utils.interface";
import { getUtilsAction } from "@/modules/common/actions/getUtils.actions";
const validationSchema = yup.object({
    genderId: yup.string().required(),
    profileId: yup.string().required(),
    typePerson: yup.string().required(),
    fullname: yup.string().required(),
    personId: yup.string().required(),
    isActive: yup.string().required(),
});


export default defineComponent({
    components: {
      InputText,
      CustomSelect,
    },
    props: {
        supplierId: {
            type: String,
            requerid: true,
        },
    },
    setup(props) {
        // initializations
        const router = useRouter()
        // const toast = useToast()


        // ConsultData 
        const { data: supplier, isError, isLoading, refetch  } = useQuery({
            queryKey: ['supplier', props.supplierId ],
            queryFn: () => getSupplierById( props.supplierId as string ),
            retry: false
        });

        //tanck query update
        const { isPending, isSuccess: isUpdateSuccess, data: updateSupplier, mutate} = useMutation({
            mutationFn: createUpdateSUpplierAction
        })

        const { values, defineField, errors, handleSubmit, resetForm, meta} = useForm({
            validationSchema,
        })


        //
        const [personId, personIdAttrs ] = defineField('personId');
        const [isActive, isActiveAttrs ] = defineField('isActive');
        const [gender, genderAttrs ] = defineField('gender');
        const [profile, profileAttrs ] = defineField('profile');
        const [typePerson, typePersonAttrs ] = defineField('typePerson');
        const [fullname, fullnameAttrs ] = defineField('fullname');


        //update data
        const onSubmit = handleSubmit((values) => {
            mutate(values)
        })

        //slectOptiosn tanck query 
        const { data: profileDt  } = useQuery<Main>({
            queryKey: ['profile', { module: 'autocomplete/profile/name' }],
            queryFn: () => getUtilsAction('autocomplete/profile/name' )
          });
          const { data: typeProfileDt } = useQuery<Main>({
            queryKey: ['typeProfile', { module: 'autocomplete/typeperson/description'  }],
            queryFn: () => getUtilsAction('autocomplete/typeperson/description' )
          });

        watchEffect(() => {
            if (isError.value && !isLoading.value) {
                router.replace('/admin/supplier');
                return;
            }
        })
        watch( supplier, () => {
            if( !supplier ) return;
      
            resetForm({
              values: supplier.value
            })
          },  {
            deep: true,
            immediate: true
          })
      
          watch( isUpdateSuccess, (value) => {
            // console.log();
            if( !value ) return;
      
            // toast.add'Producto actualizado correctamente');
            router.replace(`/admin/products/${updateSupplier.value?.id}`) //! change route
      
            resetForm( {
              values: updateSupplier.value
            })
            
          })
      
          watch( () => props.supplierId, () => {
            refetch();
          })


          return {
            values,
            errors,
            meta,

            profileDt,
            typeProfileDt,

            personId,
            personIdAttrs,
            isActive,
            isActiveAttrs,
            gender,
            genderAttrs,
            profile,
            profileAttrs,
            typePerson,
            typePersonAttrs,
            fullname,
            fullnameAttrs,
            isPending,

            onSubmit,
          }
    }
})