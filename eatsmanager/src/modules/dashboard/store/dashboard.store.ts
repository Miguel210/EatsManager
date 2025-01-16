import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { Dashboard } from "../interfaces/dashboard.interface";
import { computed, ref } from "vue";


export const useDashboardStore = defineStore('dashboards', () => {
  const dashboards = ref(useLocalStorage<Dashboard[]>('dashboards',[]));


  return {
    dataDashboard: computed(() => {
      return dashboards.value.map((datas) => {
        return {
          "Venta Total":     datas.data["Venta_Total"],
          Inventario:        datas.data.Inventario,
          "Ordenes del Dia": datas.data["Ordenes_del_Dia"],
          "Mas Vendido":     datas.data["Mas_Vendido"],
          Compra:            datas.data.Compra,
          Venta:             datas.data.Venta,
          Ordenes:          datas.data.Ordenes,
          "Ordenes Pendientes": datas.data["Ordenes_Pendientes"],
          "Ventas Empleados": datas.data["Ventas_Empleados"],
        }
      })
    })
  }
})
