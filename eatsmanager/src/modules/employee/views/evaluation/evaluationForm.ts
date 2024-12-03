import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import InputText from 'primevue/inputtext';
import { createUpdateEvaluationAction, getEvaluationById } from '../../actions/evaluation';

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
    const [employeeIdx, employeeIdAttrs] = defineField('employeeId');
    const [punctuality, punctualityAttrs] = defineField('punctuality');
    const [attitude, attitudeAttrs] = defineField('attitude');
    const [quality, qualityAttrs] = defineField('quality');
    const [efficiency, efficiencyAttrs] = defineField('efficiency'); 
    const [initiative, initiativeAttrs] = defineField('initiative');
    const [hygiene, hygieneAttrs] = defineField('hygiene');
    const [evaluations, evaluationAttrs] = defineField('evaluatorId');

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


      employeeIdx,
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
