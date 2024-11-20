export interface Dashboard {
  data: Data;
}

export interface Data {
  "Venta_Total"?:     Inventario[];
  Inventario?:        Inventario[];
  "Ordenes_del_Dia"?: OrdenesDelDia[];
  "Mas Vendido"?:     [string | number];
  Compra?:            [string | number];
  Venta?:             [string | number];
  Ordenes?:            [string | number];
  "Ordenes_Pendientes"?: [string | number];
  "Ventas_Empleados"?: [string | number];
}

export interface Inventario {
  sum: string;
}

export interface OrdenesDelDia {
  count: string;
}
