import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import { getSupplierById } from '../actions/get-supplier-by-id.action';

import InputText from 'primevue/inputtext';
import { createUpdateSUpplierAction } from '../actions/create-update-supplier.action';

// import type { Data } from "../interfaces/supplier.interface";
const validationSchema = yup.object({
  fullname: yup.string(),
  genderId: yup.string(),
  profileId: yup.string(),
  typePersonId: yup.string(),
  isActive: yup.string(),
});

export default defineComponent({
  components: {
    InputText,
  },
  props: {
    supplierId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // initializations
    const router = useRouter();

    // ConsultData
    const {
      data: supplier,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['supplier', props.supplierId],
      queryFn: () => getSupplierById(props.supplierId),
      retry: false,
    });

    const {
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateSupplier,
      mutate,
    } = useMutation({
      mutationFn: createUpdateSUpplierAction,
    });
    const { values, defineField, errors, handleSubmit, resetForm, meta } = useForm({
      validationSchema,
      // initialValues: supplier.value
    });

    const [fullname, fullnameAttrs] = defineField('person.fullname');
    const [gender, genderAttrs] = defineField('person.genderId');
    const [profile, profileAttrs] = defineField('person.profileId');
    const [typePerson, typePersonAttrs] = defineField('person.typePersonId');
    const [isActive, isActiveAttrs] = defineField('isActive');

  

    const onSubmit = handleSubmit(async (values) => {
        mutate(values)
    });

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/proveedor');
        return;
      }
    });
    watch(
      supplier,
      () => {
        if (!supplier) return;

        resetForm({
          values: supplier.value,
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
        values: updateSupplier.value,
      })
      
    })

    return {
      values,
      errors,
      meta,
      isPending,


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

      onSubmit,
    };
  },
});
