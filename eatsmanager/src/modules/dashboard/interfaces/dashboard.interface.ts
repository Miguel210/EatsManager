export interface Dashboard {
  data: Data;
}

export interface Data {
  Venta_Total?:     Inventario[],
  Inventario?:        Inventario[],
  Ordenes_del_Dia?: OrdenesDelDia[],
  Mas_Vendido?:     string[],
  Compra?:            string[],
  Venta?:             string[],
  Ordenes?:            string[],
  Ordenes_Pendientes?: DataObject[],
  Ventas_Empleados?: DataObject[],
}

export interface Inventario {
  sum: string;
}

export interface OrdenesDelDia {
  count: string;
}
export interface DataObject {
  count: number | string;
}
