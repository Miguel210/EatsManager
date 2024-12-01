<template>
    <div>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <div>
            <ButtonCustom 
            :type-button="typeButton"
            :label-data="labelData" 
            :icon-button="iconButton" 
            :is-toast="isToast"
            @click="confirmDialog()"
            >
            </ButtonCustom>
        </div>
    </div>

</template>

<script setup lang="ts">
import ButtonCustom from '@/modules/common/components/ButtonCustom.vue';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';

const toast = useToast();
const confirm = useConfirm();

interface Props {
    //click Funcion
    funcion?: () => void
    // CustomButton
  typeButton: string
  labelData: string
  isToast: boolean
  iconButton?: string
  //ComfirmDialog
  message: string
  header: string
  icon: string,
  rejectLabel: string
  rejectProps: { label: string, severity: string, outlined: boolean }
  acceptProps:  { label: string, severity: string }

}

const props = defineProps<Props>()

const confirmDialog = () => {
    confirm.require({
        message: props.message,
        header: props.header,
        icon: props.icon,
        rejectLabel: props.rejectLabel,
        rejectProps: props.rejectProps,
        acceptProps: props.acceptProps,
        accept: () => {
            toast.add({ severity: 'info', summary: 'Comfirmar', detail: 'Registro eliminado', life: 3000 });
            if( props.funcion ){
                props.funcion()
            }
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Cancelar', detail: 'Registro cancelado', life: 3000 });
        }
    });
};
</script>

<style scoped></style>