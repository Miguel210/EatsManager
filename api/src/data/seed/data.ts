import { Uuid } from "../../config"


export const seedData = {

    module: [
        { id: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', name: 'movimientos',      identifier: 10, isActive: true },
        { id: '1721b204-24e9-47eb-b076-9e96bc691a98', name: 'dashboardAdm',     identifier: 1,  isActive: true },
        { id: '11a17067-c5a8-4086-a949-55600c25ae32', name: 'dashboardSup',     identifier: 2,  isActive: true },
        { id: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', name: 'dashboardEmp',     identifier: 3,  isActive: true },
        { id: '76ba91f0-9140-4c70-85e9-59d7520ee145', name: 'inventario',       identifier: 20, isActive: true },
        { id: 'a7d6025c-780b-47c2-81f2-a922554baabd', name: 'Proveedor',        identifier: 30, isActive: true },

    ],


    operation: [
        { id: '303922e9-2ae2-4b4f-85ed-872093b0b949', name: 'read',     moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },
        { id: '254d8c92-9070-47df-afca-93c80f3d2abc', name: 'read',     moduleId: '11a17067-c5a8-4086-a949-55600c25ae32', isActive: true },
        { id: '72d01a82-cac7-4d65-ad9c-80afd37e1c3b', name: 'read',     moduleId: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', isActive: true },
        { id: 'cd3d3fad-a3d0-402f-a976-2e800aac43df', name: 'create',   moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
        { id: '80a52512-0415-4d01-8e09-53e94c9e2ccc', name: 'read',     moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },
        { id: '518508fc-c3a5-4bff-b11e-9843c809c735', name: 'update',   moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },
        { id: '1874d8b8-7afd-4d3f-84af-e0feab740e18', name: 'delete',   moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },
        { id: '2235fa7c-3e9b-4739-820b-5ff2afa11c87', name: 'read',     moduleId: '76ba91f0-9140-4c70-85e9-59d7520ee145', isActive: true },//inventario

    ],

    profileoperation: [
        { id: 'd9a794e9-264e-4514-a82c-2562e5dae0b0', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '303922e9-2ae2-4b4f-85ed-872093b0b949', createAt: new Date(), isActive: true },
        { id: '137cf1d7-a7b7-4ce5-9be1-d0bcb0f6af63', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'cd3d3fad-a3d0-402f-a976-2e800aac43df', createAt: new Date(), isActive: true },
        { id: 'a6f16aad-7766-4d9a-8899-b15e7a26a772', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '80a52512-0415-4d01-8e09-53e94c9e2ccc', createAt: new Date(), isActive: true },
        { id: '01a96b8e-22dc-4bc8-8516-3db36a2977fe', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '518508fc-c3a5-4bff-b11e-9843c809c735', createAt: new Date(), isActive: true },
        { id: '31af2073-8499-4152-9ebc-b78d4f281109', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '1874d8b8-7afd-4d3f-84af-e0feab740e18', createAt: new Date(), isActive: true },
        { id: 'b5b04752-069e-4eb7-86d5-138901f91f57', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '2235fa7c-3e9b-4739-820b-5ff2afa11c87', createAt: new Date(), isActive: true },
        { id: '98f6dba4-9698-4d52-95b6-b264401694fd', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '254d8c92-9070-47df-afca-93c80f3d2abc', createAt: new Date(), isActive: true },
        { id: '85bd143d-6548-4103-8fe1-a9b12ac2f4bb', profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', operationId: '72d01a82-cac7-4d65-ad9c-80afd37e1c3b', createAt: new Date(), isActive: true },
        { id: 'b3bb1190-dd33-4584-b207-bbea2b99c083', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '80a52512-0415-4d01-8e09-53e94c9e2ccc', createAt: new Date(), isActive: true },
        { id: '1fccd180-4977-4589-9df1-8e79eda06a00', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '2235fa7c-3e9b-4739-820b-5ff2afa11c87', createAt: new Date(), isActive: true },
    ],

    profile: [
        { id: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', name: 'Admin',       createAt: new Date(), isActive: true },
        { id: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', name: 'Supervisor',  createAt: new Date(), isActive: true },
        { id: '14588c57-ee54-4c01-bc7f-8c445e643ee5', name: 'Empleado',    createAt: new Date(), isActive: true },
        { id: '17dc3357-85b3-403d-840d-fed63b1c5171', name: 'Cliente',     createAt: new Date(), isActive: true },
        { id: '0402cc9c-0992-4ad8-ab70-142522d2815f', name: 'Proveedor',   createAt: new Date(), isActive: true },

    ],

    typopersona: [
        { id: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', description: 'Empleado', isActive: true },
        { id: '682155b3-a3da-43ec-845d-024a1e0b8a70', description: 'Proveedor', isActive: true },
        { id: '35c890e4-d191-4f93-97de-d3ea6984423f', description: 'Cliente', isActive: true },
    ],

    person: [
        { id: 'bf9c6739-8612-4149-a552-5f280720cfe6', fullname: 'Miguel Angel',    username: 'migueloz',   password: '12345',  profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4' },
        { id: '6541e329-809c-48f6-8f9d-234b5d17cfbf', fullname: 'Daniela Rocha',   username: '',           password: '',       profileId: '17dc3357-85b3-403d-840d-fed63b1c5171', typePersonId: '35c890e4-d191-4f93-97de-d3ea6984423f' },
        { id: '013d069d-744d-4eca-b041-890aaec92c3d', fullname: 'Juan Perez',      username: 'juanp01',    password: '12345',  profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4' },
        { id: 'b805d571-14ed-4c3e-a92b-b896ca35daeb', fullname: 'Edgar Martinez',  username: 'edgnez',     password: '12345',  profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4' },
        { id: '593fc874-9839-4e08-8cb0-670f93c34520', fullname: 'Joseline Hrz',    username: '',           password: '',       profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f', typePersonId: '682155b3-a3da-43ec-845d-024a1e0b8a70' },
        { id: 'c8fb89c7-e8a7-463a-9167-872de0cc6575', fullname: 'Maria Jose',      username: 'mariaJ05',   password: '12345',  profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4' },
        { id: '71809129-dae7-419c-bf61-bb3b95167330', fullname: 'Oscar Manuel',    username: '',           password: '',       profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f', typePersonId: '682155b3-a3da-43ec-845d-024a1e0b8a70' },
    ],

    employee: [
        { id: '46c20549-5cb1-4152-8728-dd480595bd3b', personId: 'bf9c6739-8612-4149-a552-5f280720cfe6', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1700, isActive: true },
        { id: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', personId: '013d069d-744d-4eca-b041-890aaec92c3d', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1200, isActive: true },
        { id: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', personId: 'b805d571-14ed-4c3e-a92b-b896ca35daeb', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1500, isActive: true },
        { id: '6c01cdf0-4c2b-4c9a-9d22-b3e28dd863f1', personId: 'c8fb89c7-e8a7-463a-9167-872de0cc6575', hireDate: new Date(), entrada: new Date('12:00:00'), salida: new Date('08:00:00'), sueldo: 1500, isActive: true },

    ],
    attendance: [
        {id: '27f8329c-0985-4a3e-b37a-70d03b640bec', employeeId: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: 'ffe4cfb7-eb2d-4c2a-a820-d17c46272dcb', employeeId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '50ff74dc-bc1d-49e8-b6cc-24f2cd41771c', employeeId: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
        {id: '74041273-a47c-403b-a034-9bff4d5cd93d', employeeId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', date: new Date().getTime, hour: new Date().getHours, documentId: ''},
    ],
    evaluation: [
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
        {id: '', employeeId: '', date: new Date().getTime, result: ''},
    ],
    client: [
        { id: 'ce6d55ff-a541-48ba-8a9d-d5896981078c', personId: '6541e329-809c-48f6-8f9d-234b5d17cfbf', isActive: true },
        //{ id: '1047140a-3732-4676-bbdd-3471dc161343', personId: '', isActive: true },
    ],

    supplier: [
        { id: '6e454d68-6349-4f21-91e4-490cc9de097b', personId: '593fc874-9839-4e08-8cb0-670f93c34520', isActive: true },
        { id: '41d2af61-a798-42af-9a81-2ec772d46b94', personId: '71809129-dae7-419c-bf61-bb3b95167330', isActive: true },

    ],
    typeProduct: [
        { id: '5c930724-9e5c-44ad-8507-04365a647a72', description: 'Servicio',             useStock: false },
        { id: 'e282b267-07b7-458c-b828-c4faf1b71159', description: 'Concepto',             useStock: false },
        { id: 'e9b02730-7dab-4d68-b660-44357697c17d', description: 'Producto Terminado',   useStock: true },
        { id: '2aaec104-dc80-4a92-b748-a40a052e9ce6', description: 'Insumo',               useStock: true }
    ],
    /*categoryProduct: [
        { id: 'a53f9e6d-9f3d-47e1-8f48-697bd57928b1', description: 'Elaboración de alimentos', isActive: true },
        { id: '71de1875-8ba0-4e1a-b17f-531de9df1114', description: 'Sistema',                  isActive: true },
        { id: 'cb6e94d8-ec34-4da7-8d16-5970dd89890c', description: 'Insumo de Alimento',       isActive: true },
        { id: '0a50656f-62f4-4dea-a05e-66eee56aae18', description: 'Empacado',                 isActive: true },
        { id: 'c4b0f764-3ae3-4dad-85c1-acce7e38e767', description: 'Accesorios',               isActive: true },
        { id: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9', description: 'Platillos',                isActive: true },
        { id: '4be50806-7f35-45aa-b5f0-29021ef4996f', description: 'Bebidas',                  isActive: true },
        { id: '3b63ffc6-1957-4550-878b-f581bfdd09db', description: 'Ingredientes',             isActive: true },

    ],*/
    product: [
        { id: 'dbc7ba01-bb96-4e8b-8436-b0c1d2723236', code: 'DC',       description: 'Devolucion de compra',        isActive: true, typeProductId: 'e282b267-07b7-458c-b828-c4faf1b71159', category: 'Sistema',                   price: 0, existence: 0 },
        { id: '1a3f49bd-3c1e-4fcf-b636-9c1df7d8aaae', code: 'INS-0001', description: 'Salsa de Tomate',             isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Insumo de Alimento',        price: 20, existence: 0 },
        { id: '5c80dddf-3496-4338-86b3-f239d1e061a5', code: 'INS-0002', description: 'Masa para pizza',             isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Insumo de Alimento',        price: 10, existence: 0 },
        { id: 'c31aeb8f-b690-4866-82f1-d5093e52e145', code: 'INS-0100', description: 'Caja de carton para pizza',   isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Empacado',                  price: 0, existence: 0 },
        { id: 'd917a3cd-1109-431a-ab73-029bdacd3279', code: 'INS-0101', description: 'Servilleta de papel',         isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Accesorios',                price: 0, existence: 0 },
        { id: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', code: 'PLT-001',  description: 'Pizza de Peperoni',           isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 20, existence: 0 },
        { id: '837d3ac7-8517-4b34-abe6-30ebb91b50c9', code: 'BBD-001',  description: 'Bebida Pepsi de 2LTS',        isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Bebidas',                   price: 20, existence: 0 },
        { id: 'b29c17bc-ed67-429e-ba4d-dfac5629a454', code: 'PLT-002',  description: 'Pizza Hawaiana ',             isActive: false, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                price: 12, existence: 109 },
        { id: '3f1386ea-276a-4797-967f-20277286a420', code: 'PLT-003',  description: 'Papas Fransesas',             isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 2, existence: 80 },
        { id: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', code: 'PLT-004',  description: 'Dedos de Queso',              isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 10, existence: 80 },
        { id: '20b0ea8b-40d1-4c00-80d0-d6ffd35ea6d2', code: 'PLT-005',  description: 'Alitas BQ',                   isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 20, existence: 120 },
        { id: '2b6bd085-d1f3-45d5-afd5-ee5b9f57da6b', code: 'PLT-006',  description: 'Pure de Papa',                isActive: false, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                price: 20, existence: 30 },
        { id: '6536a9ba-ddb4-4a17-94cc-a1790cae129a', code: 'PLT-007',  description: 'Ensalada',                    isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 20, existence: 30 },
        { id: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', code: 'PLT-008',  description: 'Hamburgesa Pollo ',           isActive: true, typeProductId: 'e9b02730-7dab-4d68-b660-44357697c17d', category: 'Platillos',                 price: 8, existence: 150 },
        { id: 'e0a01cab-504f-48b5-a032-91b06b53f0d1', code: 'ING-001',  description: 'Pan de Hamburgesa',           isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
        { id: '30400ed2-8bfc-486e-b441-de5fa3fe6760', code: 'ING-002',  description: 'Jitomate',                    isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
        { id: 'ccb72b09-c3c4-4d25-865e-dae7999ef955', code: 'ING-003',  description: 'Cebolla',                     isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
        { id: '386f4d1d-09eb-41bc-a6f0-b8f7b514dfe3', code: 'ING-004',  description: 'Lechuga',                     isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
        { id: '32b25783-b599-4cac-8b03-5fa665b81994', code: 'ING-005',  description: 'Pepinillos',                  isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
        { id: 'cb9e5b5f-a864-4a4b-8a0f-9d99af85ba3e', code: 'ING-006',  description: 'Carne de Pollo (Hamburgesa)', isActive: true, typeProductId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', category: 'Ingrediente',               price: 1, existence: 0 },
    ],

    document: [
        {id: '4a00ff37-2f05-4042-abcd-62270aaa31bb', description: 'Venta'},
        {id: '314bc909-4e7d-423c-8c61-6fb712ab48f4', description: 'Compra'},
        {id: '9d33b426-589a-4608-a0cc-ae94fefffe47', description: 'Devolucion de Venta'},
        {id: '4f825fa9-16e3-4132-ab11-51421d5d5b09', description: 'Devolucion de Compra'},
        {id: '64362875-3469-4b59-9077-3f28bd7049a6', description: 'Orden de Produccion'},
    ],
    moviment: [
        {id: '65d35e71-af8b-4151-b079-3dc03f0e2814', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 1160,     referenceId: '',  status: 'terminado'},
        {id: '4e98b9ab-5d3f-4931-a3f4-719cdc7db509', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 380.8,    referenceId: '',  status: 'activo'},
        {id: '145c8a51-0e93-4f02-a770-4ee9647f85cd', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 17,       referenceId: '',  status: 'En proceso'},
        {id: '68151027-2119-4496-ae44-c6fbbe838b85', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 174,      referenceId: '1', status: 'activo'},
        {id: '31e6963c-3271-40b1-877a-4f821bd2d856', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 145,      referenceId: '1', status: 'activo'},
        {id: '2e2197ab-36bb-4f07-a104-8879507b1557', date: new Date(), personId: '', documentId: '', elaborateId: '', amount: 139.2,    referenceId: '',  status: 'activo'},

    ],
    movementDetail: [
        {id: '0da8da8c-e91f-4951-9fc4-780aa579e7b2', movimiento_id: '', cantidad: 20, producto_id: '', priceUnitario: 25, subTotal: 500, impuestos: 80, total: 580, costoUnitario: 0, promocion_id: ''},
        {id: 'a2ff4f48-bcee-4e47-a064-8283ad36e389', movimiento_id: '', cantidad: 20, producto_id: '', priceUnitario: 25, subTotal: 500, impuestos: 80, total: 580, costoUnitario: 0, promocion_id: ''},
        {id: 'e7b57905-434f-46b6-8ed2-bd902751a2b5', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 126, subTotal: 126, impuestos: 20.16, total: 146.6, costoUnitario: 0, promocion_id: ''},
        {id: 'ab367239-b081-4b77-b915-283df09513f9', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 17, subTotal: 17, impuestos: 2.72, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '13ff9add-f6ab-46f1-b2a4-fe0074a5420f', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 150, subTotal: 150, impuestos: 24, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '1b8f2f4c-cdec-446a-b885-0720e3b7508a', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 20, subTotal: 20, impuestos: 2.4, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: 'c7b8e01a-26c9-4c6a-ae65-cd9886f375f6', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 15, subTotal: 15, impuestos: 24, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: 'c11c7d82-3b1c-43a3-8429-ad60480f476d', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 150, subTotal: 150, impuestos: 12, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: '7d8d8c16-584f-4975-87af-9099e18431bb', movimiento_id: '', cantidad: 5, producto_id: '', priceUnitario: 15, subTotal: 125, impuestos: 20, total: 12, costoUnitario: 0, promocion_id: ''},
        {id: 'a9006258-6bb8-417f-9c15-7ac4e634070e', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 120, subTotal: 120, impuestos: 19.2, total: 12, costoUnitario: 0, promocion_id: ''},

    ],
    inventory: [
        {id: '5407233e-cbfe-4d21-b7a1-e2e1d86972d2', movementId: '', productId: '', quantity: 1},
        {id: 'c205318a-17a8-4e1b-8853-d30408bf741f', movementId: '', productId: '', quantity: 1},
        {id: '64d989b7-9459-435d-8fba-d02be38b3890', movementId: '', productId: '', quantity: 1},
        {id: '57bcd81f-309f-4557-b40c-4193cad3707a', movementId: '', productId: '', quantity: 1},
        {id: '75db08a4-024a-40e2-92e1-51087ca19def', movementId: '', productId: '', quantity: 1},
        {id: '368d5c4d-2b72-407c-9644-7c613e50908f', movementId: '', productId: '', quantity: 1},
        {id: 'fd2387c7-cf6e-40ce-b9d2-e32a86a72989', movementId: '', productId: '', quantity: 1},
        {id: 'eee1eab8-0111-4090-bc50-f46986bc8912', movementId: '', productId: '', quantity: 1},
        {id: 'cd8a8353-13e3-4d50-b9a4-2034c5326c74', movementId: '', productId: '', quantity: 1},
        {id: 'cde20d2c-ed91-4d52-b75c-7fa1fb1592c2', movementId: '', productId: '', quantity: 1},
        {id: 'f27c4816-bb3d-45bc-a7f1-6604f1f7aff4', movementId: '', productId: '', quantity: 1},
        {id: 'cdb86f07-e6ef-4a9a-8ce7-37f072dc781b', movementId: '', productId: '', quantity: 1},
        {id: '19682680-51d8-4420-bd25-55bf8b530984', movementId: '', productId: '', quantity: 1},
    ],
    garrision: [
        {id: '2c873c2f-52db-4aa1-a7b2-6b5cff06a8a1', dishId: '', garrisionId: '', isActive: true},
        {id: '0de68899-fea9-453f-945e-9b6a8b73a87b', dishId: '', garrisionId: '', isActive: true},
        {id: 'b10abb14-94d5-4bc7-9551-4a33368a4583', dishId: '', garrisionId: '', isActive: true},
        {id: '1597485b-9551-4386-8db2-43c76eed6063', dishId: '', garrisionId: '', isActive: true},
        {id: 'e76ac8a8-6d6d-423c-9721-c0a20d87bd69', dishId: '', garrisionId: '', isActive: true},
        {id: '48bfabfa-bf2e-4949-95bf-b9fd1c362e20', dishId: '', garrisionId: '', isActive: true},
        {id: '4f384604-ad4b-446a-9670-d65f4d7fe174', dishId: '', garrisionId: '', isActive: true},
        {id: '82964ef8-c556-49f7-973f-0d97b3a06433', dishId: '', garrisionId: '', isActive: true},
        {id: '53c23fd3-c721-4f6a-803a-874c96c7f77b', dishId: '', garrisionId: '', isActive: true},
        {id: 'a484bb5f-4a4d-4129-a937-e2755ddf3b40', dishId: '', garrisionId: '', isActive: true},
        {id: '9c03c073-7c47-4c85-9534-6b639da15a2b', dishId: '', garrisionId: '', isActive: true},
        {id: '809baaee-7341-4c43-9e9b-a65bcc802aa4', dishId: '', garrisionId: '', isActive: true},
        {id: 'c4c4d178-508c-49bf-a1c5-e4f1d5ee05b3', dishId: '', garrisionId: '', isActive: true},
        {id: 'e3217aa1-fc28-411a-ab20-d185d1a979fe', dishId: '', garrisionId: '', isActive: true},
        {id: '93bd1950-6da9-4699-a9d7-b3b16e91ef39', dishId: '', garrisionId: '', isActive: true},
        {id: '57e0f402-30bb-4c80-a7c5-680bb7bda492', dishId: '', garrisionId: '', isActive: true},
    ],
    promotion: [
        {id: '7dcfa290-2f46-4017-b92f-216039965c39', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
        {id: 'c62c96c4-dedf-4161-af2f-c66ccfa62739', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
        {id: 'e4b06416-f38c-4e03-a415-a9a9a87365d4', productId: '', price: 100, from: new Date(), until: new Date(), isActive: true},
    ],
    supplierOrder: [
        {id: '5c87d0ca-f310-4a37-bd6b-22942b54b487', movementId: '', folio: 'F-215', datePay: new Date().getTime, status: 'pagado'},
        {id: 'f8aeee41-7147-408a-991e-f450f5d564a2', movementId: '', folio: 'F-216', datePay: new Date().getTime, status: 'pendiente'},
        {id: 'ecb025b6-e966-4a1c-b312-c3261b9530bc', movementId: '', folio: 'F-217', datePay: new Date().getTime, status: 'pagado'},
        {id: '6a782760-cf4d-4c69-abdb-ac803723c0f8', movementId: '', folio: 'F-218', datePay: new Date().getTime, status: 'proceso'},

    ],
    clientOrder: [
        {id: '8c02597d-63d9-4e38-a9f3-7e1ca00b4353', movementId: '', folio: 'F-219', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '35249cf0-39b9-4518-9dfe-9d14080c61e8', movementId: '', folio: 'F-220', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '62aaa1d9-0c01-4927-ba38-f1b640714cd3', movementId: '', folio: 'F-221', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '569928c4-5bc4-4968-a7aa-838126a300d9', movementId: '', folio: 'F-222', datePay: new Date().getTime, status: 'proceso', tableId: ''},
        {id: '06359828-81fd-45ac-880b-9776fcd96d1e', movementId: '', folio: 'F-223', datePay: new Date().getTime, status: 'proceso', tableId: ''},

    ],
    clientOrderDetail: [
        {id: '95a633bf-5378-4a20-bd02-990cdf969893', clientOrderId: '', garrisionId: ''},
        {id: '553e8bd4-eb94-48f6-9427-8450090973a9', clientOrderId: '', garrisionId: ''},
        {id: 'a8002025-0091-406b-9aa4-afaee0a54359', clientOrderId: '', garrisionId: ''},
        {id: '7de5faf6-3aa7-474c-ae06-091539988f72', clientOrderId: '', garrisionId: ''},
    ],
    table: [
        {id: 'c1648684-78b4-43be-843f-05f00f41842f', name: 'sala 1',        status: '', mainTableId: ''},
        {id: 'ded0c2c7-d71e-49ed-a782-167fc07754cd', name: 'Litera 2',      status: '', mainTableId: ''},
        {id: 'a9e0bd06-88d7-4bd7-8488-622542a5de9e', name: 'Litera 1',      status: '', mainTableId: ''},
        {id: '5b72553a-cc96-41aa-bd0d-c4f82f239f2d', name: 'Frente Caja',   status: '', mainTableId: ''},
        {id: '500086a3-5f4f-45d4-bf67-b57c86e318ec', name: 'Patio 2',       status: '', mainTableId: ''},
        {id: 'c68d01a9-dc12-48b9-a954-024506425ef6', name: 'Patio 1',       status: '', mainTableId: ''},
        {id: '5f64b203-3399-41d2-9ce0-b90885d3b737', name: 'Sala 2',        status: '', mainTableId: ''},
        {id: '1543d72b-e2ea-4fc2-961b-b427cbf52c22', name: 'Patio 3',       status: '', mainTableId: ''},
    ],
    orderPayment: [
        {id: '1feb6062-7938-4c11-b856-661a66e70bda', movimentId: '', monto: 1, status: 'Espera'},
        {id: 'bf79bbcc-360c-4cbc-9884-af6b0c5448f9', movimentId: '', monto: 1, status: 'Pagado'},
        {id: 'e3c88178-9b33-42a0-aef3-0e2dbf07ab98', movimentId: '', monto: 1, status: 'Pagado'},
        {id: 'f3fd1013-c110-4558-8160-a722927e75ff', movimentId: '', monto: 1, status: 'Espera'},

    ],
    payment: [
        {id: '0f27fb58-37ee-4fb9-b06c-e80c139c438e', orderPaymentId: '', monto: 1, typePay: ''},
        {id: 'f8d01cf3-075c-4cd4-b6a6-e9483f0b3607', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '4faada53-df7b-4866-99c0-5c1369017603', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '1f86ccf1-8e22-44e2-9151-c0e9ccf3c5c4', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '2d00224b-974a-471a-8529-ca4cb413bcd2', orderPaymentId: '', monto: 1, typePay: ''},
    ],
    devolutionBuy: [
        {id: '162938aa-9a40-4f40-a90d-dc395d34fbca', movementId: '', folio: 'F-122', datePay: new Date().getTime, status: 'Pagado'},
        {id: '0743e82d-6c3c-435c-bf3c-42023bfb9c64', movementId: '', folio: 'F-124', datePay: new Date().getTime, status: 'Pendiente'},
        {id: '1c7b08fc-a718-4e21-843f-0cbca954210e', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
    ],
    devolutionSell: [
        {id: '793fc4b8-b3d7-4bde-8833-4587c96da762', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
        {id: '9a2e45b7-d113-48a6-ac3f-cfe6739cf6aa', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},
        {id: 'f9b3fc9a-648e-4a80-a57a-38f0ebcf7326', movementId: '', folio: 'F-125', datePay: new Date().getTime, status: 'Pagado'},

    ]

}