import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';


import InputText from 'primevue/inputtext';
import { getSupplierOrderById } from '../../actions/supplierOrder';
import { createUpdateSUpplierOrderAction } from '../../actions/supplierOrder/create-update-supplierOrder.action';
import AutoComplete from 'primevue/autocomplete';

// import type { Data } from "../interfaces/supplier.interface";
const validationSchema = yup.object({
  personId: yup.string(),
  folio: yup.string(),
  paymentDate: yup.string(),
  
  productId: yup.string(),
  quantity: yup.string(),
  priceUnit: yup.string(),
  subTotal: yup.string(),
  tax: yup.string(),
  total: yup.string(),
  costUnit: yup.string(),

});

export default defineComponent({
  components: {
    InputText,
    AutoComplete,
  },
  props: {
    suppierOrderId: {
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
      queryKey: ['supplierOrderById', props.suppierOrderId],
      queryFn: () => getSupplierOrderById(props.suppierOrderId),
      retry: false,
    });

    const {
      isPending,
      isSuccess: isUpdateSuccess,
      data: updateSupplier,
      mutate,
    } = useMutation({
      mutationFn: createUpdateSUpplierOrderAction,
    });
    const { values, defineField, errors, handleSubmit, resetForm, meta } = useForm({
      validationSchema,
      // initialValues: supplier.value
    });

    const [personId, personIdAttrs] = defineField('data.personId.id');
    const [folio, folioAttrs] = defineField('data.supplierOrders[0].invoiceFolio');
    const [paymentDate, paymentDateAttrs] = defineField('data.supplierOrders[0].paymentDate');

    const [productId, productIdAttrs] = defineField('data.movementDetail');
    const [quantity, quantityAttrs] = defineField('data.movementDetail');
    const [priceUnit, priceUnitAttrs] = defineField('data.movementDetail.priceUnit');
    const [subTotal, subTotalAttrs] = defineField('data.movementDetail.subTotal');
    const [tax, taxAttrs] = defineField('data.movementDetail.tax');
    const [total, totalAttrs] = defineField('data.movementDetail.total');
    const [costUnit, costUnitAttrs] = defineField('data.movementDetail.costUnit');
  
    //! Added query autocomplete

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

      personId,
      personIdAttrs,
      folio,
      folioAttrs,
      paymentDate,
      paymentDateAttrs,
      productId,
      productIdAttrs,
      quantity,
      quantityAttrs,
      priceUnit,
      priceUnitAttrs,
      subTotal,
      subTotalAttrs,
      tax,
      taxAttrs,
      total,
      totalAttrs,
      costUnit, 
      costUnitAttrs,
      
      column: [
        { data: 'product', title: 'Documento' },
        { data: 'quantity', title: 'folio' },
        { data: 'priceUnit', title: 'Fecha' },
        { data: 'subTotal', title: 'Elaborado' },
        { data: 'tax', title: 'Cliente' },
        { data: 'total', title: 'Cantidad' },
        { data: 'costUnit', title: 'Estatus' },
      ],

      onSubmit,
    };
  },
});