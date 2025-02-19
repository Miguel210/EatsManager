import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import type { Obj } from '../../interfaces/employee.interface';

import InputText from 'primevue/inputtext';
import { createUpdateEvaluationAction, getEvaluationById } from '../../actions/evaluation';
import { getEmployeesAction } from '../../actions/employee';

const validationSchema = yup.object({
  employeeId: yup.string(),
  punctuality: yup.string(),
  attitude: yup.string(),
  quality: yup.string(),
  efficiency: yup.date(),
  initiative: yup.date(),
  hygiene: yup.date(),
  evaluationId: yup.string(),

});

export default defineComponent({
  components: {
    InputText,
  },
  props: {
    evaluationId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // initializations
    const router = useRouter();

    // ConsultData
    const {
      data: evaluation,
      isError,
      isLoading,
    } = useQuery({
      queryKey: ['evaluations', props.evaluationId],
      queryFn: () => getEvaluationById(props.evaluationId),
      retry: false,
    });

    const {
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateEvaluation,
      mutate,
    } = useMutation({
      mutationFn: createUpdateEvaluationAction,
    });
    const { values, defineField, errors, resetForm, handleSubmit, meta } = useForm({
      validationSchema,
    });
    const [employeeId, employeeIdAttrs] = defineField('data.evaluation.employeeId.id');
    const [punctuality, punctualityAttrs] = defineField('data.evaluation.punctuality');
    const [attitude, attitudeAttrs] = defineField('data.evaluation.attitude');
    const [quality, qualityAttrs] = defineField('data.evaluation.quality');
    const [efficiency, efficiencyAttrs] = defineField('data.evaluation.efficiency'); 
    const [initiative, initiativeAttrs] = defineField('data.evaluation.initiative');
    const [hygiene, hygieneAttrs] = defineField('data.evaluation.hygiene');
    const [evaluations, evaluationAttrs] = defineField('evaluatorId');

    const onSubmit = handleSubmit(async (values) => {
        mutate(values.data.evaluation)
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

      employeeList: employeeCheckList(),
      employee,
      
      employeeId,
      employeeIdAttrs,
      punctuality,
      punctualityAttrs,
      attitude,
      attitudeAttrs,
      quality,
      qualityAttrs,
      efficiency,
      efficiencyAttrs,
      initiative,
      initiativeAttrs,
      hygiene,
      hygieneAttrs,
      evaluations,
      evaluationAttrs,

      onSubmit,
    };
  },
});
