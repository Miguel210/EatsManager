import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import InputText from 'primevue/inputtext';
import { createUpdateEmployeeAction, getEmployeeById } from '../../actions/employee/index';

const validationSchema = yup.object({
  fullname: yup.string(),
  genderId: yup.string(),
  profileId: yup.string(),
  typePersonId: yup.string(),
  isActive: yup.string(),
  salary: yup.string(),
  input: yup.date(),
  output: yup.date(),
});

export default defineComponent({
  components: {
    InputText,
  },
  props: {
    employeeId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // initializations
    const router = useRouter();

    // ConsultData
    const {
      data: employee,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['employee', props.employeeId],
      queryFn: () => getEmployeeById(props.employeeId),
      retry: false,
    });

    const {
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateEmployee,
      mutate,
    } = useMutation({
      mutationFn: createUpdateEmployeeAction,
    });
    const { values, defineField, errors, resetForm, handleSubmit, meta } = useForm({
      validationSchema,
    });
    const [fullname, fullnameAttrs] = defineField('person.fullname');
    const [gender, genderAttrs] = defineField('person.genderId');
    const [profile, profileAttrs] = defineField('person.profileId');
    const [typePerson, typePersonAttrs] = defineField('person.typePersonId');
    const [isActive, isActiveAttrs] = defineField('isActive'); //? It's equals employee and person 
//todo Employee data
    const [hireDate, hireDateAttrs] = defineField('hireDate');
    const [input, inputAttrs] = defineField('input');
    const [output, outputAttrs] = defineField('output');
    const [salary, salaryAttrs] = defineField('salary');

  

    const onSubmit = handleSubmit(async (values) => {
        mutate(values)
    });

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/empleado');
        return;
      }
    });
    watch(
      employee,
      () => {
        if (!employee) return;

        resetForm({
          values: employee.value,
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
        values: updateEmployee.value,
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

      hireDate,
      hireDateAttrs,
      input,
      inputAttrs,
      output,
      outputAttrs,
      salary,
      salaryAttrs,

      onSubmit,
    };
  },
});
