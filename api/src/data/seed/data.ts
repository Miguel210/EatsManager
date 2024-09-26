import { Uuid } from "../../config"


export const seedData = {

    module: [
        { id: Uuid.uuid(), name: 'movements',    identifier: 10, isActive: true },
        { id: Uuid.uuid(), name: 'dashboardAdm', identifier: 1, isActive: true },
        { id: Uuid.uuid(), name: 'dashboardSup', identifier: 2, isActive: true },
        { id: Uuid.uuid(), name: 'dashboardEmp', identifier: 3, isActive: true },
        { id: Uuid.uuid(), name: 'inventory',    identifier: 20, isActive: true },

    ],


    operation: [
        { id: Uuid.uuid(), name: 'read', isActive: true },
        { id: Uuid.uuid(), name: 'read', isActive: true },
        { id: Uuid.uuid(), name: 'read', isActive: true },
        { id: Uuid.uuid(), name: 'read', isActive: true },
        { id: Uuid.uuid(), name: 'create', isActive: true },
        { id: Uuid.uuid(), name: 'read', isActive: true },
        { id: Uuid.uuid(), name: 'update', isActive: true },
        { id: Uuid.uuid(), name: 'delete', isActive: true },

    ],

    profileoperation: [
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), createAt: new Date(), isActive: true },
    ],

    profile: [
        { id: Uuid.uuid(), name: 'Admin',       createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), name: 'Supervisor',  createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), name: 'Empleado',    createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), name: 'Cliente',     createAt: new Date(), isActive: true },
        { id: Uuid.uuid(), name: 'Proveedor',   createAt: new Date(), isActive: true },

    ],

    typopersona: [
        { id: Uuid.uuid(), description: 'Empleado', isActive: true },
        { id: Uuid.uuid(), description: 'Proveedor', isActive: true },
        { id: Uuid.uuid(), description: 'Cliente', isActive: true },
    ],

    person: [
        { id: Uuid.uuid(), fullname: 'Miguel Angel',    username: 'migueloz',   password: '12345',  profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Daniela Rocha',   username: '',           password: '',       profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Juan Perez',      username: 'juanp01',    password: '12345',  profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Edgar Martinez',  username: 'edgnez',     password: '12345',  profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Joseline Hrz',    username: '',           password: '',       profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Maria Jose',      username: 'mariaJ05',   password: '12345',  profileId: '', typePersonId: '' },
        { id: Uuid.uuid(), fullname: 'Oscar Manuel',    username: '',           password: '',       profileId: '', typePersonId: '' },
    ],

    employee: [
        { id: Uuid.uuid(), personId: '', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1700, isActive: true },
        { id: Uuid.uuid(), personId: '', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1200, isActive: true },
        { id: Uuid.uuid(), personId: '', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1500, isActive: true },
    ],
    attendance: [
        {id: '', employeeId: '', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '', employeeId: '', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '', employeeId: '', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '', employeeId: '', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '', employeeId: '', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
    ],
    evaluation: [
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
    ],
    client: [
        { id: Uuid.uuid(), personId: '', isActive: true },
        { id: Uuid.uuid(), personId: '', isActive: true },
        { id: Uuid.uuid(), personId: '', isActive: true },
    ],

    supplier: [
        { id: Uuid.uuid(), personId: '', isActive: true },
        { id: Uuid.uuid(), personId: '', isActive: true },
        { id: Uuid.uuid(), personId: '', isActive: true },

    ],
    typeProduct: [
        { id: Uuid.uuid(), description: 'Servicio',             useStock: false },
        { id: Uuid.uuid(), description: 'Concepto',             useStock: false },
        { id: Uuid.uuid(), description: 'Producto Terminado',   useStock: true },
        { id: Uuid.uuid(), description: 'Insumo',               useStock: true }
    ],
    categoryProduct: [
        { id: Uuid.uuid(), description: 'Elaboración de alimentos', isActive: true },
        { id: Uuid.uuid(), description: 'Sistema',                  isActive: true },
        { id: Uuid.uuid(), description: 'Insumo de Alimento',       isActive: true },
        { id: Uuid.uuid(), description: 'Empacado',                 isActive: true },
        { id: Uuid.uuid(), description: 'Accesorios',               isActive: true },
        { id: Uuid.uuid(), description: 'Platillos',                isActive: true },
        { id: Uuid.uuid(), description: 'Bebidas',                  isActive: true },
        { id: Uuid.uuid(), description: 'Ingredientes',             isActive: true },

    ],
    product: [
        { id: '', code: 'MO',       description: 'Mano de obra',                isActive: true, typeProductId: '1', categoryProductId: 'Elaboración de alimentos',  precio: 0, existencia: 0 },
        { id: '', code: 'DC',       description: 'Devolucion de compra',        isActive: true, typeProductId: '2', categoryProductId: 'Sistema',                   precio: 0, existencia: 0 },
        { id: '', code: 'DV',       description: 'Devolución de Venta',         isActive: true, typeProductId: '2', categoryProductId: 'Sistema',                   precio: 0, existencia: 0 },
        { id: '', code: 'INS-0001', description: 'Salsa de Tomate',             isActive: true, typeProductId: '4', categoryProductId: 'Insumo de Alimento',        precio: 20, existencia: 0 },
        { id: '', code: 'INS-0002', description: 'Masa para pizza',             isActive: true, typeProductId: '4', categoryProductId: 'Insumo de Alimento',        precio: 10, existencia: 0 },
        { id: '', code: 'INS-0100', description: 'Caja de carton para pizza',   isActive: true, typeProductId: '4', categoryProductId: 'Empacado',                  precio: 0, existencia: 0 },
        { id: '', code: 'INS-0101', description: 'Servilleta de papel',         isActive: true, typeProductId: '4', categoryProductId: 'Accesorios',                precio: 0, existencia: 0 },
        { id: '', code: 'PLT-001',  description: 'Pizza de Peperoni',           isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 20, existencia: 0 },
        { id: '', code: 'BBD-001',  description: 'Bebida Pepsi de 2LTS',        isActive: true, typeProductId: '3', categoryProductId: 'Bebidas',                   precio: 20, existencia: 0 },
        { id: '', code: 'PLT-002',  description: 'Pizza Hawaiana ',             isActive: false, typeProductId: '3', categoryProductId: 'Platillos',                precio: 12, existencia: 109 },
        { id: '', code: 'PLT-003',  description: 'Papas Fransesas',             isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 2, existencia: 80 },
        { id: '', code: 'PLT-004',  description: 'Dedos de Queso',              isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 10, existencia: 80 },
        { id: '', code: 'PLT-005',  description: 'Alitas BQ',                   isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 20, existencia: 120 },
        { id: '', code: 'PLT-006',  description: 'Pure de Papa',                isActive: false, typeProductId: '3', categoryProductId: 'Platillos',                precio: 20, existencia: 30 },
        { id: '', code: 'PLT-007',  description: 'Ensalada',                    isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 20, existencia: 30 },
        { id: '', code: 'PLT-008',  description: 'Hamburgesa Pollo ',           isActive: true, typeProductId: '3', categoryProductId: 'Platillos',                 precio: 8, existencia: 150 },
        { id: '', code: 'ING-001',  description: 'Pan de Hamburgesa',           isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
        { id: '', code: 'ING-002',  description: 'Jitomate',                    isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
        { id: '', code: 'ING-003',  description: 'Cebolla',                     isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
        { id: '', code: 'ING-004',  description: 'Lechuga',                     isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
        { id: '', code: 'ING-005',  description: 'Pepinillos',                  isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
        { id: '', code: 'ING-006',  description: 'Carne de Pollo (Hamburgesa)', isActive: true, typeProductId: '4', categoryProductId: 'Ingrediente',               precio: 1, existencia: 0 },
    ],

    document: [
        {id: '', description: 'Venta'},
        {id: '', description: 'Compra'},
        {id: '', description: 'Devolucion de Venta'},
        {id: '', description: 'Devolucion de Compra'},
        {id: '', description: 'Orden de Produccion'},
    ],
    moviment: [
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 1160,     reference: '',  status: 'terminado'},
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 380.8,    reference: '',  status: 'activo'},
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 17,       reference: '',  status: 'En proceso'},
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 174,      reference: '1', status: 'activo'},
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 145,      reference: '1', status: 'activo'},
        {id: '', date: new Date(), personId: '', documentId: '', elaborateId: '', import: 139.2,    reference: '',  status: 'activo'},

    ],
    movementDetail: [
        {id: '', movimiento_id: '', cantidad: 20, producto_id: '', precioUnitario: 25, subTotal: 500, impuestos: 80, total: 580, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 20, producto_id: '', precioUnitario: 25, subTotal: 500, impuestos: 80, total: 580, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 126, subTotal: 126, impuestos: 20.16, total: 146.6, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 17, subTotal: 17, impuestos: 2.72, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 150, subTotal: 150, impuestos: 24, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 20, subTotal: 20, impuestos: 2.4, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 15, subTotal: 15, impuestos: 24, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 150, subTotal: 150, impuestos: 12, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 5, producto_id: '', precioUnitario: 15, subTotal: 125, impuestos: 20, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '', movimiento_id: '', cantidad: 1, producto_id: '', precioUnitario: 120, subTotal: 120, impuestos: 19.2, total: 12, costoUnitario: 0, promocion_id: ''},

    ],
    inventory: [
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
        {id: '', movementId: '', productId: '', quantity: 1},
    ],
    garrision: [
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
        {id: '', dishId: '', garrisionId: '', isActive: true},
    ],
    promotion: [
        {id: '', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
        {id: '', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
        {id: '', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
    ],
    supplierOrder: [
        {id: '', movementId: '', folio: 'F-215', datePay: new Date().getTime, status: 'pagado'},
        {id: '', movementId: '', folio: 'F-216', datePay: new Date().getTime, status: 'pendiente'},
        {id: '', movementId: '', folio: 'F-217', datePay: new Date().getTime, status: 'pagado'},
        {id: '', movementId: '', folio: 'F-218', datePay: new Date().getTime, status: 'proceso'},

    ],
    clientOrder: [
        {id: '', movementId: '', folio: 'F-219', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '', movementId: '', folio: 'F-220', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '', movementId: '', folio: 'F-221', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '', movementId: '', folio: 'F-222', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '', movementId: '', folio: 'F-223', datePay: new Date().getTime, status: 'proceso', tableId: ''},

    ],
    clientOrderDetail: [
        {id: '', clientOrderId: '', garrisionId: ''},
        {id: '', clientOrderId: '', garrisionId: ''},
        {id: '', clientOrderId: '', garrisionId: ''},
        {id: '', clientOrderId: '', garrisionId: ''},
    ],
    table: [
        {id: '', name: 'sala 1', status: '', mainTableId: ''},
        {id: '', name: 'Litera 2', status: '', mainTableId: ''},
        {id: '', name: 'Litera 1', status: '', mainTableId: ''},
        {id: '', name: 'Frente Caja', status: '', mainTableId: ''},
        {id: '', name: 'Patio 2', status: '', mainTableId: ''},
        {id: '', name: 'Patio 1', status: '', mainTableId: ''},
        {id: '', name: 'Sala 2', status: '', mainTableId: ''},
        {id: '', name: 'Patio 3', status: '', mainTableId: ''},
    ],
    orderPayment: [
        {id: '', movimentId: '', monto: 1, status: 'Espera'},
        {id: '', movimentId: '', monto: 1, status: 'Pagado'},
        {id: '', movimentId: '', monto: 1, status: 'Pagado'},
        {id: '', movimentId: '', monto: 1, status: 'Espera'},

    ],
    payment: [
        {id: '', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '', orderPaymentId: '', monto: 1, typePay: ''},
    ],
    devolutionBuy: [
        {id: '', movementId: '', folio: 'F-122', datePay: new Date().getTime, status: 'Pagado'},
        {id: '', movementId: '', folio: 'F-124', datePay: new Date().getTime, status: 'Pendiente'},
        {id: '', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
    ],
    devolutionSell: [
        {id: '', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
        {id: '', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
        {id: '', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},

    ]

}