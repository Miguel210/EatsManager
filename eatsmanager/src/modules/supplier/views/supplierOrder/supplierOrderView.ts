import { watchEffect, defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import InputText from 'primevue/inputtext';
import { getSupplierOrderById } from '../../actions/supplierOrder';
import { createUpdateSUpplierOrderAction } from '../../actions/supplierOrder/create-update-supplierOrder.action';
import AutoComplete from 'primevue/autocomplete';
import { getProductAutoCompleteAction } from '@/modules/product/actions/product/ProductAutoComplete.action';
import type { main } from '@/modules/product/actions/product/ProductAutoComplete.action';
import type { Obj } from '../../interfaces/supplier.interface';
import { getSuppliersAction } from '../../actions/get-suppliers.action';


// import type { Data } from "../interfaces/supplier.interface";
const validationSchema = yup.object({
  //OrderSupllier
  folio: yup.string(),
  paymentDate: yup.string(),
  supplierId: yup.string(),
  supplierOrder: yup.string(),

  //movementDetail
  productId: yup.string(),
  quantity: yup.number(),
  priceUnit: yup.number(),
  subTotal: yup.number(),
  tax: yup.number(),
  total: yup.number(),
  costUnit: yup.number(),
  //movement
  personId: yup.string(),
  amount: yup.number(),
  status: yup.string(),
  documentId: yup.string(),
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
    const [movementDetail, movementDetailAttrs] = defineField('data.movementDetail');
    const [supplierId, supplierIdAttrs] = defineField('supplierId');

    const [amount, amountAttrs] = defineField('data.amount');
    const [status, statusAttrs] = defineField('data.status');
    const [documentId, documentIdAttrs] = defineField('data.documentId');

    //! Added query autocomplete

    const {
      data: ProductAutoComplete,
    } = useQuery<main>({
      queryKey: ['ProductAutoComplete'],
      queryFn: () => getProductAutoCompleteAction(),
      retry: false,
    });

    const module = 'Proveedor/getAll';
    const { data: supplierAutocomplete } = useQuery<Obj>({
      queryKey: ['supplier', { module: module }],
      queryFn: () => getSuppliersAction(module),
    });


    const onSubmit = handleSubmit(async (values) => {
      mutate(values)
    });

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/proveedor');
        return;
      }
    });

    watchEffect(() => {

      if (movementDetail.value) {
        let totalAux: number = 0;
        amount.value = movementDetail.value.map((item: { total: number; }) => {

          totalAux = Number(item.total) + Number(totalAux);
        })
        amount.value = totalAux

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

    watch(isUpdateSuccess, (value) => {
      console.log('isUpdateSuccess');

      if (!value) return;

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
      movementDetail,
      movementDetailAttrs,
      supplierId,
      supplierIdAttrs,

      amount,
      amountAttrs,
      status,
      statusAttrs,
      documentId,
      documentIdAttrs,


      supplierAutocomplete,
      ProductAutoComplete,
      addNewRecord: () => { movementDetail.value.push({ product: { id: '' }, quantity: 0, priceUnit: 0, subTotal: 0, tax: 0, total: 0, costUnit: 0 }); },

      updateSubtotal: (item: { quantity: number; priceUnit: number; subTotal: number, tax: number; total: number; }) => {
        item.subTotal = item.quantity * item.priceUnit;
        item.total = item.subTotal + (item.tax * item.subTotal);
      },
      updateTotal: (item: { tax: number; total: number; subTotal: number }) => {
        return item.total = item.subTotal + (item.tax * item.subTotal);
      },
      onSubmit,
    };
  },
});