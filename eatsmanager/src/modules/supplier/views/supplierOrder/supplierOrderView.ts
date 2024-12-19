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
  personId: yup.string(),
  folio: yup.string(),
  paymentDate: yup.string(),
  supplierId: yup.string(),
  supplierOrder: yup.string(),


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
    const [suppierOrder, suppierOrderAttrs] = defineField('data.movementDetail');
    const [supplierId, supplierIdAttrs] = defineField('supplierId');
    // const [subTotal, subTotalAttrs] = defineField('data.movementDetail.subTotal');
    // const [tax, taxAttrs] = defineField('data.movementDetail.tax');
    // const [total, totalAttrs] = defineField('data.movementDetail.total');
    // const [costUnit, costUnitAttrs] = defineField('data.movementDetail.costUnit');

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
      suppierOrder,
      suppierOrderAttrs,
      supplierId,
      supplierIdAttrs,

      supplierAutocomplete,
      ProductAutoComplete,
      addNewRecord: () => { suppierOrder.value.push({ product: { id: '' }, quantity: 0, priceUnit: 0, subTotal: 0, tax: 0, total: 0, costUnit: 0 }); },

      // column: [
      //   { data: 'product', title: 'Producto' },
      //   { data: 'quantity', title: 'folio' },
      //   { data: 'priceUnit', title: 'Fecha' },
      //   { data: 'subTotal', title: 'Elaborado' },
      //   { data: 'tax', title: 'Cliente' },
      //   { data: 'total', title: 'Cantidad' },
      //   { data: 'costUnit', title: 'Estatus' },
      // ],
      updateSubtotal : (item: { quantity: number; priceUnit: number; subTotal: number, tax: number; total: number; }) => {
        item.subTotal = item.quantity * item.priceUnit;
        item.total = item.subTotal + (item.tax * item.subTotal);
      },
      updateTotal : (item: { tax: number; total: number; subTotal: number }) => {
        return item.total = item.subTotal + (item.tax * item.subTotal);
      },
      onSubmit,
    };
  },
});