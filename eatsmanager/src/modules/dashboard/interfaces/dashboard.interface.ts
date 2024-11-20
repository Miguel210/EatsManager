export interface Dashboard {
  data: Data;
}

export interface Data {
  "Venta Total"?:     Inventario[];
  Inventario?:        Inventario[];
  "Ordenes del Dia"?: OrdenesDelDia[];
  "Mas Vendido"?:     [];
  Compra?:            [];
  Venta?:             [];
  Ordenes?:            [];
  "Ordenes Pendientes"?: [];
  "Ventas Empleados"?: [];
}

export interface Inventario {
  sum: null | string;
}

export interface OrdenesDelDia {
  count: string;
}
