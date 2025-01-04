import { useMutation, useQuery } from "@tanstack/vue-query";
import { InputText } from "primevue";
import { computed, defineComponent, reactive, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import * as yup from 'yup';
import { useForm } from "vee-validate";
import { getClientOrderDataAction, createUpdateClientOrderAction} from "../../actions/clientOrder";

import type { Main, Data } from '@/modules/client/interfaces/productOrder.interface';
import { getProductOrderAction } from "../../actions/clientOrder/ProductOrder.action";

const validationSchema= yup.object({
    description: yup.string(),
    status: yup.string(),
    isActive: yup.boolean(),

    clientOrder: yup.string(),
    Movement: yup.string(),
    MovementDetail: yup.string(),
    Product: yup.string(),
    
})

export default defineComponent({
    components: {
        InputText,
    },
    props: {
        tableId: {
            type: String,
            requerid: true
        },
    },
    setup(props) {

      const newProduct = reactive({
        product: null as Data | null, // Tipo Data definido en tu interfaz
        quantity: 1,
      });
  
        const router = useRouter();

        const {
            data: table,
            isError,
            isLoading
        } = useQuery({
            queryKey: ['tableCLientOrderForm', props.tableId],
            queryFn: () => getClientOrderDataAction(props.tableId!),
        });


        const {
            isPending,
            isSuccess: isUpdateSuccess,
            data: updateClientOrder,
            mutate
        } = useMutation({
            mutationFn: createUpdateClientOrderAction
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

        const [description, descriptionAttrs] = defineField('data.description');
        const [status, statusAttrs] = defineField('data.status');
        const [isActive, isActiveAttrs] = defineField('data.isActive');

        const [clientOrder, clientOrderAttrs] = defineField('data.clientOrder');

        const [productId, productIdAttrs] = defineField('data.clientOrder.movement.movementDetail');

        //todo QUERY PRODUCTS

    const {
      data: ProductOrder,
    } = useQuery<Main>({
      queryKey: ['ProductOrder'],
      queryFn: () => getProductOrderAction(),
      retry: false,
    });

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
            table,
            () => {
              if (!table) return;
      
              resetForm({
                values: table.value,
              });
            },
            {
              deep: true,
              immediate: true,
            },
          );
//todo Total movement
          // watchEffect(() => {
          //   if(clientOrder.value) {
          //     let totalAux: number = 0;
          //     amount.value = clientOrder.value.map((item: { total: number }) => {
          //       totalAux = Number(item.total) + Number(totalAux);
          //     })
          //     amount.value = totalAux
          //   }
          // })
      
          watch( isUpdateSuccess, (value) => {
            console.log('isUpdateSuccess');
      
            if( !value ) return;
      
            resetForm({
              values: updateClientOrder.value,
            })
            
          })
      

        return {
            values,
            errors,
            meta,
            isPending,
            table,
            
            description,
            descriptionAttrs,
            status,
            statusAttrs,
            isActive,
            isActiveAttrs,
            clientOrder,
            clientOrderAttrs,

            productId,
            productIdAttrs,
            
            ProductOrder,
            //todo ADD NEW GUEST

            paymentType: "individual", // "individual" o "together"
            guests: [],
            addGuest() {
              clientOrder.value.push({
                id: '',
                paymentDate: new Date(),
                tableId: props.tableId,
                status: "Pendiente",
                invoiceFolio: '',
                movement: {
                  isCreate: true,
                  person: {
                    fullname: ''
                  },
                  documentId: '4a00ff37-2f05-4042-abcd-62270aaa31bb',
                  elaborateId: '',
                  personId: 'CODESECRET-',
                  movementDetail: [],
                  amount: '0',
                  status: 'Pendiente',
                },

                showPanel: true,
                isPaid: false,
                newProduct: {
                  product: {
                    id: '',
                    description: '',
                    price: 0,
                  },
                },
                newQuantity: 1,
                nameInput: '', // Campo temporal para manejar la entrada
              });
              
            },
                     
            addProduct : (guestIndex: number) => {
              const guest = clientOrder.value[guestIndex];
              // if (!guest || !newProduct.product || newProduct.quantity < 1) return;
            console.log(guest.movement.newProduct);
            
              const product = {
                movementId: guest.movement.id,
                isCreatemov: true,
                quantity: guest.movement.newQuantity,
                product: guest.movement.newProduct,
                productId: guest.movement.newProduct.id,
                priceUnit: guest.movement.newProduct.price,
                costUnit: guest.movement.newProduct.price,
                subTotal: guest.movement.newQuantity * parseFloat(guest.movement.newProduct.price),
                tax: 0,
                total: guest.movement.newQuantity * parseFloat(guest.movement.newProduct.price),
                
              };
              console.log(product);
              
              guest.movement.movementDetail.push(product);
              if( guest.movement.personId === 'CODESECRET-' ) {

                guest.movement.personId +=  guest.movement.person.fullname;           
              }
              // Limpiar selección de nuevo producto
              newProduct.product = null;
              newProduct.quantity = 1;
            },
            
            payForGuest: (index: number) => {
              clientOrder.value[index].isPaid = true;
            },
            calculateTotal: (index: number) => {

              if( !clientOrder.value[index] ) return 0;
                
              const guest = clientOrder.value[index].movement;
              return guest.movementDetail.reduce((total: number, product: {subTotal: number}) => total + product.subTotal, 0);
            },
        
            calculateTotalAll: () => {
              return clientOrder.value.reduce((total, guest) => total + calculateTotal(guest), 0);
            },
        
            payTogether: () => {
              clientOrder.value.forEach((guest) => {
                guest.isPaid = true;
              });
            },
        
            allPaid: computed(() => {
              return clientOrder.value.every((guest) => guest.isPaid);
            }),
        
            finalizeOrder: () => {
              // Lógica para finalizar la venta
              console.log('Venta finalizada');
            },  
            
            newProduct,
            onSubmit,
        }
    }
})