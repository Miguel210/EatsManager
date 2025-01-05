import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { Obj } from '../../interfaces/employee.interface';

import InputText from 'primevue/inputtext';
import { getEmployeesAction } from '../../actions/employee';
import { createUpdateAttendanceAction, getAttendanceById } from '../../actions/attendance';

const validationSchema = yup.object({
  employeeId: yup.string(),
  documentId: yup.string(),
  date: yup.date(),
  hour: yup.date(),

});

export default defineComponent({
  components: {
    InputText,
  },
  props: {
      empleadoId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // initializations
    const router = useRouter();
    let timeAttendace;
    // ConsultData
    const {
      data: evaluation,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['attencanceById', props.empleadoId],
      queryFn: () => getAttendanceById(props.empleadoId),
      retry: false,
    });

    const {
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateEvaluation,
      mutate,
    } = useMutation({
      mutationFn: createUpdateAttendanceAction,
    });
    const { values, defineField, errors, resetForm, handleSubmit, meta } = useForm({
      validationSchema,
    });
    const [employeeId, employeeIdAttrs] = defineField('data.employeeId');

    const [documentId, documentIdAttrs] = defineField('data.documentId');
    const [date, dateAttrs] = defineField('data.date');
    const [hour, hourAttrs] = defineField('data.hour');


    const onSubmit = handleSubmit(async (values) => {
        mutate(values)
    });

    //todo EMPLEADOS
    const {
      data: employee,
    } = useQuery<Obj>({
      queryKey: ['employee'],
      queryFn: () => getEmployeesAction(),
    });

    
    const employeeCheckList = () => {

      
      return employee.value!.data.map((item) => {
        return {
          label: item.person.fullname,
          value: item.id,
        };
      });
    }
    

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/empleado');
        return;
      }
    });

    watchEffect(() => {

      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      timeAttendace = `${year}-${month}-${day}T${hours}:${minutes}`;
      
      const offset = -6;

      date.value = new Date(now.getTime() + offset * 60 * 60 * 1000);
      hour.value = new Date(now.getTime() + offset * 60 * 60 * 1000);; 
      console.log(date.value);
    })

    watch(
      evaluation,
      () => {
        if (!evaluation) return;

        resetForm({
          values: evaluation.value,
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
        values: updateEvaluation.value,
      })
      
    })

    return {
      values,
      errors,
      meta,
      isPending,

      timeAttendace,
      employeeList: employeeCheckList(),
      employee,


      
      employeeId,
      employeeIdAttrs,
      documentId,
      documentIdAttrs,
      date,
      dateAttrs,
      hour,
      hourAttrs,

      onSubmit,
    };
  },
});
