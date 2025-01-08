import { Uuid } from "../../config"


export const seedData = {

    module: [
        { id: '1721b204-24e9-47eb-b076-9e96bc691a98', name: 'dashboardAdm',     identifier: 1,  isActive: true },
        { id: '11a17067-c5a8-4086-a949-55600c25ae32', name: 'dashboardSup',     identifier: 2,  isActive: true },
        { id: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', name: 'dashboardEmp',     identifier: 3,  isActive: true },
        
        { id: 'a7d6025c-780b-47c2-81f2-a922554baabd', name: 'Proveedor',        identifier: 30, isActive: true },
        
        { id: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', name: 'movimiento',     identifier: 10, isActive: true },
        //productos
        { id: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', name: 'producto',         identifier: 33, isActive: true },
        //empleados
        { id: 'c60f488d-f512-41db-a22e-6625459ca159', name: 'empleado',         identifier: 31, isActive: true },
        //clientes
        { id: '290d4c4f-452b-48a3-b743-8ec17a70ff28', name: 'ventas',           identifier: 32, isActive: true },

    ],


    operation: [
        //* DASHBOARD'S
        { id: '74b60331-4ade-4177-96a0-6f536c6fb5b1', name: 'Venta Total',          moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: '7ec22367-9e62-4f25-b774-5ec2cd2cecfc', name: 'Inentario',            moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: 'b71aade3-6038-413d-b3dd-5bd845febba5', name: 'Ordenes del Dia',      moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: '87fea175-12c4-47ce-aa88-545aac981f6b', name: 'Mas Vendido',          moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: 'a0c61028-c9a8-45dd-be50-bf38edf0faf5', name: 'Compra',               moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: '310e91b7-d7ad-4fa4-9d02-67a6da055079', name: 'Venta',                moduleId: '1721b204-24e9-47eb-b076-9e96bc691a98', isActive: true },//
        { id: 'b4868909-5189-4711-b6cc-6b373e28a269', name: 'Ordenes del Dia',      moduleId: '11a17067-c5a8-4086-a949-55600c25ae32', isActive: true },//
        { id: '2c6692b3-55a6-4c89-b001-f1760249ad4d', name: 'Ordenes Pendientes',   moduleId: '11a17067-c5a8-4086-a949-55600c25ae32', isActive: true },//
        { id: '55440f27-9dd3-4c80-8825-96e4c921312b', name: 'Empleados Asistidos',  moduleId: '11a17067-c5a8-4086-a949-55600c25ae32', isActive: true },//
        { id: 'c129fa82-b940-4422-acf6-696f54ffb5f4', name: 'Ordenes',              moduleId: '11a17067-c5a8-4086-a949-55600c25ae32', isActive: true }, 
        { id: '5a363600-97e2-42f9-b3c2-1e9b0387e51d', name: 'Ordenes',              moduleId: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', isActive: true },
        { id: '4a222609-b953-4dab-b8a4-2e22b082a131', name: 'Ordenes Pendientes',   moduleId: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', isActive: true },
        { id: '8b54718e-b270-419c-a248-d2986e35c64c', name: 'Ventas Empleado',      moduleId: '2e0f70d3-2e01-4fe6-bfac-bc9ba14268e9', isActive: true },
        //* PROVEEDOR
        { id: '5e0b7e02-f836-4933-8907-048e04003869', name: 'create',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
        { id: '5e0b7e02-f836-4933-8907-048e0400386a', name: 'read',                 moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
        { id: '5e0b7e02-f836-4933-8907-048e0400386c', name: 'update',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
        { id: '5e0b7e02-f836-4933-8907-048e0400386f', name: 'delete',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
        { id: '5e0b7e02-f836-4933-8907-048e04003873', name: 'report',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor
                    //*ORDEN
        { id: '5e0b7e02-f836-4933-8907-048e04003878', name: 'create',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor-order
        { id: '5e0b7e02-f836-4933-8907-048e0400387e', name: 'read',                 moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor-order
        { id: '5e0b7e02-f836-4933-8907-048e04003885', name: 'update',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor-order
        { id: '5e0b7e02-f836-4933-8907-048e0400388d', name: 'delete',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor-order
        { id: '5e0b7e02-f836-4933-8907-048e04003896', name: 'report',               moduleId: 'a7d6025c-780b-47c2-81f2-a922554baabd', isActive: true },//proveedor-order
        //*MOVIMIENTOS
        { id: 'f2d567c5-5663-4027-9689-a16543e1f445', name: 'btnCompra',            moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f446', name: 'btnVenta',             moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f448', name: 'read',                 moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f44b', name: 'report',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
                    //*documentos
        { id: 'f2d567c5-5663-4027-9689-a16543e1f44f', name: 'create',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f454', name: 'read',                 moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f45a', name: 'update',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f461', name: 'delete',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f469', name: 'report',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
                    //*detalles
        { id: 'f2d567c5-5663-4027-9689-a16543e1f4ae', name: 'read',                 moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        { id: 'f2d567c5-5663-4027-9689-a16543e1f4bd', name: 'report',               moduleId: '1b913cd1-488b-435e-9cb9-a71bb3d18a5c', isActive: true },//movimiento
        //*PRODUCTO
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93c9', name: 'create',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93ca', name: 'read',                 moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93cc', name: 'update',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93cf', name: 'delete',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93d3', name: 'report',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
                    //*Categoria
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93d8', name: 'create',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93de', name: 'read',                 moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93e5', name: 'update',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93ed', name: 'delete',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f93f6', name: 'report',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
                    //*Tipo producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9400', name: 'create',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f940b', name: 'read',                 moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9417', name: 'update',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9424', name: 'delete',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9432', name: 'report',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto        
                    //*movimientos inventario
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9441', name: 'read',                 moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto
        { id: 'a90227fb-3cd9-40b3-97f2-3c5d777f9451', name: 'report',               moduleId: '81c48b2a-7d3c-46cf-b3fa-1de5c899d912', isActive: true },//producto

        //*Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bc', name: 'create',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bd', name: 'read',                 moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bf', name: 'update',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83c2', name: 'delete',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83c6', name: 'report',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
                    //*asistencias
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83cb', name: 'create',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83d1', name: 'read',                 moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83d8', name: 'report',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado  
                    //*evaluacion
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e0', name: 'create',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e9', name: 'read',                 moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83f3', name: 'update',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado
        { id: '23d02bd3-523c-4c1e-aaf1-f1249a1f83fe', name: 'report',               moduleId: 'c60f488d-f512-41db-a22e-6625459ca159', isActive: true },//Empleado

        //*ventas
        { id: '6fbc4b80-5c9d-419a-b541-51bec105fd01', name: 'read',                 moduleId: '290d4c4f-452b-48a3-b743-8ec17a70ff28', isActive: true },//ventas
                    //*mesas
        { id: '6fbc4b80-5c9d-419a-b541-51bec105fd02', name: 'create',               moduleId: '290d4c4f-452b-48a3-b743-8ec17a70ff28', isActive: true },//ventas
        { id: '6fbc4b80-5c9d-419a-b541-51bec105fd04', name: 'read',                 moduleId: '290d4c4f-452b-48a3-b743-8ec17a70ff28', isActive: true },//ventas
        { id: '6fbc4b80-5c9d-419a-b541-51bec105fd07', name: 'update',               moduleId: '290d4c4f-452b-48a3-b743-8ec17a70ff28', isActive: true },//ventas

    ],

    metric: [
        {id: 'fd4a8819-ce66-4e3c-8926-62aed1ddb3ae', operationId: '74b60331-4ade-4177-96a0-6f536c6fb5b1', name: 'Venta_Total',          sentence: `select cast(sum(m."amount") as numeric) from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" ='4a00ff37-2f05-4042-abcd-62270aaa31bb'`, isActive: true},
        {id: '2e8aee0d-6b4c-4ddd-a23f-88f02eff5661', operationId: '7ec22367-9e62-4f25-b774-5ec2cd2cecfc', name: 'Inventario',           sentence: `select cast(sum(i.quantity) as numeric)  from inventory i`, isActive: true},
        {id: '46224c20-2a8b-46e8-93b1-5d5459f008b3', operationId: 'b71aade3-6038-413d-b3dd-5bd845febba5', name: 'Ordenes_del_Dia',      sentence: `select cast(count(m.id)as numeric) from movement m where m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb'`, isActive: true},
        {id: 'a4aa6a50-f26d-462b-8ead-b9a3ce25af48', operationId: '87fea175-12c4-47ce-aa88-545aac981f6b', name: 'Mas_Vendido',          sentence: `select p.description, cast(sum(md."quantity") as numeric) as total from movement m join "movementDetail"  md on m.id=md."movementId" join product p on md."productId"=p.id where p.code like 'PLT%' and m."documentId"='4a00ff37-2f05-4042-abcd-62270aaa31bb' and  date_trunc('day', m."date") = date_trunc('day', current_date) group by p.description order by total desc limit 1;`, isActive: true},
        {id: '900d1f8e-8eae-4667-8f0d-a9c590ffcdf7', operationId: 'a0c61028-c9a8-45dd-be50-bf38edf0faf5', name: 'Compra',               sentence: `select m."date", cast(count(*)as numeric)  from movement m where date_trunc('week', m."date") = date_trunc('week', current_date) and m."documentId" = '314bc909-4e7d-423c-8c61-6fb712ab48f4' group by m."date" order by m."date"`, isActive: true},
        {id: '2e4f173e-4cd4-4f6c-ae0e-05fd38134c7c', operationId: '310e91b7-d7ad-4fa4-9d02-67a6da055079', name: 'Venta',                sentence: `select m."date", cast(count(*)as numeric)  from movement m where date_trunc('week', m."date") = date_trunc('week', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' group by m."date" order by m."date"`, isActive: true},
        {id: '8c4dda96-be9c-4699-9cd9-1e2ba13499e0', operationId: 'b4868909-5189-4711-b6cc-6b373e28a269', name: 'Ordenes_del_Dia',      sentence: `select cast(count(m.id) as numeric) from movement m where m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb'`, isActive: true},
        {id: 'bf2445d3-3fe0-4356-a31b-5818823217d2', operationId: '2c6692b3-55a6-4c89-b001-f1760249ad4d', name: 'Ordenes_Pendientes',   sentence: `select cast(count(*) as numeric)  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' and m.status = 'Pendiente'`, isActive: true},
        {id: 'c40745c2-6ecb-4d8b-903f-98a9c2008bce', operationId: '55440f27-9dd3-4c80-8825-96e4c921312b', name: 'Empleados_Asistidos',  sentence: `select m."date", cast(count(*) as numeric)  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' and m."elaborateId" = 'b805d571-14ed-4c3e-a92b-b896ca35daeb' group by m."date" order by m."date"`, isActive: true},
        {id: '36c794b4-dcf4-437c-886c-9a4f8c9dba1c', operationId: 'c129fa82-b940-4422-acf6-696f54ffb5f4', name: 'Ordenes',              sentence: `select m.id, m."elaborateId" , m.status  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' order by m."date"`, isActive: true},
        {id: '99b63b58-1de0-43e0-bb8a-d368a85daa1e', operationId: '5a363600-97e2-42f9-b3c2-1e9b0387e51d', name: 'Ordenes',              sentence: `select m.id, m."elaborateId" , m.status  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' order by m."date"`, isActive: true},
        {id: '24c781af-fe27-4f31-8dc1-1ea326512ede', operationId: '4a222609-b953-4dab-b8a4-2e22b082a131', name: 'Ordenes_Pendientes',   sentence: `select cast(count(*) as numeric)  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' and m.status = 'Pendiente'`, isActive: true},
        {id: 'ad0f8f23-3735-41a7-905b-7d5e95dba8ce', operationId: '8b54718e-b270-419c-a248-d2986e35c64c', name: 'Ventas_Empleados',     sentence: `select cast(count(*) as numeric)  from movement m where date_trunc('day', m."date") = date_trunc('day', current_date) and m."documentId" = '4a00ff37-2f05-4042-abcd-62270aaa31bb' and m.status = 'Pendiente'`, isActive: true},
//        {id: '', operationId: '', name: '', sentence: '', isActive: true},

    ],

    profileoperation: [
        { id: 'd9a794e9-264e-4514-a82c-2562e5dae0b0', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '74b60331-4ade-4177-96a0-6f536c6fb5b1', createAt: new Date(), isActive: true },
        { id: '137cf1d7-a7b7-4ce5-9be1-d0bcb0f6af63', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '7ec22367-9e62-4f25-b774-5ec2cd2cecfc', createAt: new Date(), isActive: true },
        { id: 'a6f16aad-7766-4d9a-8899-b15e7a26a772', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'b71aade3-6038-413d-b3dd-5bd845febba5', createAt: new Date(), isActive: true },
        { id: '01a96b8e-22dc-4bc8-8516-3db36a2977fe', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '87fea175-12c4-47ce-aa88-545aac981f6b', createAt: new Date(), isActive: true },
        { id: '31af2073-8499-4152-9ebc-b78d4f281109', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a0c61028-c9a8-45dd-be50-bf38edf0faf5', createAt: new Date(), isActive: true },
        { id: 'b5b04752-069e-4eb7-86d5-138901f91f57', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '310e91b7-d7ad-4fa4-9d02-67a6da055079', createAt: new Date(), isActive: true },
        { id: '1f06fe5b-d97d-4210-b899-259ddde92b01', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: 'b4868909-5189-4711-b6cc-6b373e28a269', createAt: new Date(), isActive: true },
        { id: 'af47dde7-dfa3-4784-9a08-a996f2621b8d', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '2c6692b3-55a6-4c89-b001-f1760249ad4d', createAt: new Date(), isActive: true },
        { id: 'c3259e15-24da-43bb-bf81-9eb3cabb60a8', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '55440f27-9dd3-4c80-8825-96e4c921312b', createAt: new Date(), isActive: true },
        { id: 'c1bca939-7626-4548-a0dc-ee14a328e863', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: 'c129fa82-b940-4422-acf6-696f54ffb5f4', createAt: new Date(), isActive: true },
        { id: 'ddbcd767-fe9d-4614-ac33-e8914b1ea53b', profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', operationId: '5a363600-97e2-42f9-b3c2-1e9b0387e51d', createAt: new Date(), isActive: true },
        { id: '234b364d-4e94-49b2-93fb-eb47f14952f0', profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', operationId: '4a222609-b953-4dab-b8a4-2e22b082a131', createAt: new Date(), isActive: true },
        { id: '190a8736-414a-4744-b8c9-f2a7b153e630', profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', operationId: '8b54718e-b270-419c-a248-d2986e35c64c', createAt: new Date(), isActive: true },
        //*ADMINISTRADOR
        { id: 'b3bb1190-dd33-4584-b207-bbea2b99c083', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e04003869', createAt: new Date(), isActive: true },
        { id: '3c9ba10e-bb9a-4e18-8c0c-c2be473d3d61', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e0400386a', createAt: new Date(), isActive: true },
        { id: 'e365d5af-d012-496c-8b2f-6e81815e38d3', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e0400386c', createAt: new Date(), isActive: true },
        { id: 'b18c6471-bc55-4af1-9463-24f308ae82fc', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e0400386f', createAt: new Date(), isActive: true },
        { id: '1ef2f55f-3c5d-4507-a3c1-b2c7990173a1', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e04003873', createAt: new Date(), isActive: true },
        { id: '24a58a7f-d6cf-4881-b52a-d511a4b19c6a', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e04003878', createAt: new Date(), isActive: true },
        { id: 'ad00e45b-6012-42fc-9405-68b19de9512a', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e0400387e', createAt: new Date(), isActive: true },
        { id: 'aae35868-5d4b-48ad-b27e-64c3250c42a1', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e04003885', createAt: new Date(), isActive: true },
        { id: 'b28b83ff-1b6a-4c88-91b6-40d04d8b55f0', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e0400388d', createAt: new Date(), isActive: true },
        { id: 'b3832915-fbc1-44aa-a5ea-8a05aa4013cc', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '5e0b7e02-f836-4933-8907-048e04003896', createAt: new Date(), isActive: true },
        { id: '47ff9d7e-2915-4fdd-bfb1-32511c71eb43', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f445', createAt: new Date(), isActive: true },
        { id: '17a2ec6a-11d3-48f7-b4f7-0b8c42c6db09', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f446', createAt: new Date(), isActive: true },
        { id: 'c3b7ce2d-26c6-4723-8f19-96ad5b82a465', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f448', createAt: new Date(), isActive: true },
        { id: '4fe9c7e1-9e05-4b6b-8d26-e28d0fa6c4f5', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f44b', createAt: new Date(), isActive: true },
        { id: '3724c6c0-1f69-464f-8cf4-bd256d314d05', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f44f', createAt: new Date(), isActive: true },
        { id: 'f9f16a53-9b22-40f7-b7b1-73f4916d8c3c', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f454', createAt: new Date(), isActive: true },
        { id: '4d9aa0f1-527f-4ad5-83a6-ff40cdbb464a', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f45a', createAt: new Date(), isActive: true },
        { id: '11096c70-d9f2-4bb1-a5dc-0405d5c68527', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f461', createAt: new Date(), isActive: true },
        { id: '07cf8ac3-4248-47c8-bfac-0040b52035f4', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f469', createAt: new Date(), isActive: true },
        { id: 'ffb37306-8121-42a0-9f88-66c553cd5f22', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f4ae', createAt: new Date(), isActive: true },
        { id: '7c3185f3-8127-4f62-b55d-0cc6f6c97b89', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'f2d567c5-5663-4027-9689-a16543e1f4bd', createAt: new Date(), isActive: true },
        { id: 'd1569a4c-53f6-4376-b1c7-65969c4988fc', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93c9', createAt: new Date(), isActive: true },
        { id: '9e081ac2-8362-43db-931d-3c2d7b0df2e5', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93ca', createAt: new Date(), isActive: true },
        { id: 'e84358cf-1e5a-4d02-953d-25b0b5ec179e', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93cc', createAt: new Date(), isActive: true },
        { id: '2ec9b1c5-e816-4d3e-81c7-28b3c5ac23eb', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93cf', createAt: new Date(), isActive: true },
        { id: 'b66dc995-1ef1-4405-8614-08b1d0c03885', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93d3', createAt: new Date(), isActive: true },
        { id: 'f55a18a3-d7b8-4d71-abb7-788c03b615bb', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93d8', createAt: new Date(), isActive: true },
        { id: 'e70bb4a4-45fe-4904-a7e2-374015a3996f', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93de', createAt: new Date(), isActive: true },
        { id: 'dcb9e416-56a3-48fd-a7c5-29d5c6f07ac8', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93e5', createAt: new Date(), isActive: true },
        { id: 'bbf8f53e-b2a1-49a7-b9a8-74d16b0aa379', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93ed', createAt: new Date(), isActive: true },
        { id: '5e26441b-5d26-4388-b191-1ea83ab75c73', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f93f6', createAt: new Date(), isActive: true },
        { id: '5d2c8b95-7348-4e71-8880-9175c4fc9b79', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9400', createAt: new Date(), isActive: true },
        { id: '2fdc0320-1cb7-46f0-b95a-62c7818a5b27', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f940b', createAt: new Date(), isActive: true },
        { id: 'f8fd273f-6eb9-4d8b-8322-d5202ed3b3b5', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9417', createAt: new Date(), isActive: true },
        { id: 'ca4ae087-9967-4d3c-9cb2-f0b8106c9d5b', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9424', createAt: new Date(), isActive: true },
        { id: '25be01e0-6300-450f-ae58-f1269f60a3f7', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9432', createAt: new Date(), isActive: true },
        { id: '5cc4e4f8-dbb1-4111-b14b-c8cf58cf0204', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9441', createAt: new Date(), isActive: true },
        { id: '3855b7f3-d13f-4570-9ffb-5585aa8d6f41', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: 'a90227fb-3cd9-40b3-97f2-3c5d777f9451', createAt: new Date(), isActive: true },
        { id: '7b439390-8a45-4f5f-816d-f2adbe210baf', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bc', createAt: new Date(), isActive: true },
        { id: '7b439390-8a45-4f5f-816d-f2adbe210b98', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bd', createAt: new Date(), isActive: true },
        { id: '7b439390-8a45-4f5f-816d-f2adbe210b99', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bf', createAt: new Date(), isActive: true },
        { id: '6f01a738-e94e-48f1-b208-d0f36dc5e997', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83c2', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c8f0', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83c6', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c100', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83cb', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c101', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83d1', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c102', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83d8', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c103', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e0', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c104', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e9', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c105', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83f3', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c106', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83fe', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c107', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd01', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c108', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd02', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c109', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd04', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c110', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd07', createAt: new Date(), isActive: true },
        //*Supervisor
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c111', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '5e0b7e02-f836-4933-8907-048e0400386a', createAt: new Date(), isActive: true },//ordenes proveedor
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c112', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '5e0b7e02-f836-4933-8907-048e0400387e', createAt: new Date(), isActive: true },//ordenes proveedor
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c113', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '5e0b7e02-f836-4933-8907-048e04003885', createAt: new Date(), isActive: true },//ordenes proveedor
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c114', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '5e0b7e02-f836-4933-8907-048e04003896', createAt: new Date(), isActive: true },//ordenes proveedor
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c115', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: 'f2d567c5-5663-4027-9689-a16543e1f4ae', createAt: new Date(), isActive: true },//movement-detail
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c116', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: 'f2d567c5-5663-4027-9689-a16543e1f4bd', createAt: new Date(), isActive: true },//movement-detail
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c117', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd01', createAt: new Date(), isActive: true },//ventas
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c118', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd02', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c119', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd04', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c120', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd07', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c121', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83bd', createAt: new Date(), isActive: true },//empleado
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c122', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83cb', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c123', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83d1', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c124', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e0', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c125', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '23d02bd3-523c-4c1e-aaf1-f1249a1f83e9', createAt: new Date(), isActive: true },
        //*empelado
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c126', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd01', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c127', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd04', createAt: new Date(), isActive: true },
        { id: '4de9d12b-c8f6-4ab4-a430-5b63f0b2c128', profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', operationId: '6fbc4b80-5c9d-419a-b541-51bec105fd07', createAt: new Date(), isActive: true },
        // { id: '', profileId: '', operationId: '', createAt: new Date(), isActive: true },
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
    gender: [
        {id: 'f83dac87-cae3-433e-909f-89b7cb865ff1', name: 'Masculino', createAt: new Date(), isActive: true  },
        {id: '2ffbc2df-7f6f-4c7a-bf4c-88eee010644f', name: 'Femenino', createAt: new Date(), isActive: true  },
        {id: 'a674eeeb-cd0f-4794-a35b-e321b33344a0', name: 'Otro', createAt: new Date(), isActive: true  },

    ],
    person: [
        { id: 'bf9c6739-8612-4149-a552-5f280720cfe6', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Miguel Angel',    username: 'migueloz',   password: '12345',  profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
        { id: 'bf9c6739-8612-4149-a552-098df7g6h6s3', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Venta Online',    username: 'online',   password: '12345',  profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
        { id: '6541e329-809c-48f6-8f9d-234b5d17cfbf', genderId: '2ffbc2df-7f6f-4c7a-bf4c-88eee010644f', fullname: 'Daniela Rocha',   username: '',           password: '',       profileId: '17dc3357-85b3-403d-840d-fed63b1c5171', typePersonId: '35c890e4-d191-4f93-97de-d3ea6984423f', isActive: true  },
        { id: '013d069d-744d-4eca-b041-890aaec92c3d', genderId: 'a674eeeb-cd0f-4794-a35b-e321b33344a0', fullname: 'Juan Perez',      username: 'juanp01',    password: '12345',  profileId: 'e67f19e8-95af-4289-8ab9-c70ce195bcfd', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
        { id: 'b805d571-14ed-4c3e-a92b-b896ca35daeb', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Edgar Martinez',  username: 'edgnez',     password: '12345',  profileId: '14588c57-ee54-4c01-bc7f-8c445e643ee5', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
        { id: '593fc874-9839-4e08-8cb0-670f93c34520', genderId: '2ffbc2df-7f6f-4c7a-bf4c-88eee010644f', fullname: 'Joseline Hrz',    username: '',           password: '',       profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f', typePersonId: '682155b3-a3da-43ec-845d-024a1e0b8a70', isActive: true  },
        { id: 'c8fb89c7-e8a7-463a-9167-872de0cc6575', genderId: '2ffbc2df-7f6f-4c7a-bf4c-88eee010644f', fullname: 'Maria Jose',      username: 'mariaJ05',   password: '12345',  profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
        { id: '71809129-dae7-419c-bf61-bb3b95167330', genderId: 'a674eeeb-cd0f-4794-a35b-e321b33344a0', fullname: 'Oscar Manuel',    username: '',           password: '',       profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f', typePersonId: '682155b3-a3da-43ec-845d-024a1e0b8a70', isActive: true  },
    ],

    employee: [
        { id: '46c20549-5cb1-4152-8728-dd480595bd3b', personId: 'bf9c6739-8612-4149-a552-5f280720cfe6', hireDate: new Date(), input: new Date(), output: new Date(), salary: 1700, isActive: true },
        { id: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', personId: '013d069d-744d-4eca-b041-890aaec92c3d', hireDate: new Date(), input: new Date(), output: new Date(), salary: 1200, isActive: true },
        { id: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', personId: 'b805d571-14ed-4c3e-a92b-b896ca35daeb', hireDate: new Date(), input: new Date(), output: new Date(), salary: 1500, isActive: true },
        { id: '6c01cdf0-4c2b-4c9a-9d22-b3e28dd863f1', personId: 'c8fb89c7-e8a7-463a-9167-872de0cc6575', hireDate: new Date(), input: new Date(), output: new Date(), salary: 1500, isActive: true },
        { id: '6c01cdf0-4c2b-4c9a-9d22-b3e28ddf85f5', personId: 'bf9c6739-8612-4149-a552-098df7g6h6s3', hireDate: new Date(), input: new Date(), output: new Date(), salary: 0, isActive: true },

    ],
    documentAttendance: [
        {id: '7f27a133-2391-4896-946f-07d0545256e6', description: 'Entrada', isActive: true},
        {id: '5605ff8d-b6b2-4822-9937-254de77b3045', description: 'Salida', isActive: true},
        {id: '7d86a30a-4986-4aeb-9acc-b389c760cc3b', description: 'Falta', isActive: true},
        {id: 'c95c3801-ab84-44a0-842f-3aab888aaf3f', description: 'Retardo', isActive: true},
        {id: '9f32dea6-8a1d-4093-a873-73365a9b5b91', description: 'Horas extra', isActive: true},
        {id: 'b8bf6180-ea9d-4233-8a6e-0fa59b9b0275', description: 'Salida antes (permiso)', isActive: true},
        {id: 'de7ca9a4-8387-4cd0-b2e6-b57c002a9cdc', description: 'Entrada tardia (permiso)', isActive: true},
    ],
    attendance: [
        {id: '27f8329c-0985-4a3e-b37a-70d03b640bec', employeeId: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', date: new Date(), hour: new Date(), documentId: 'de7ca9a4-8387-4cd0-b2e6-b57c002a9cdc', isActive: true },
        {id: 'ffe4cfb7-eb2d-4c2a-a820-d17c46272dcb', employeeId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', date: new Date(), hour: new Date(), documentId: '7f27a133-2391-4896-946f-07d0545256e6', isActive: true },
        {id: '50ff74dc-bc1d-49e8-b6cc-24f2cd41771c', employeeId: 'ecb6c6e2-2ea4-4722-a1fd-87ad162ab024', date: new Date(), hour: new Date(), documentId: 'b8bf6180-ea9d-4233-8a6e-0fa59b9b0275', isActive: true },
        {id: '74041273-a47c-403b-a034-9bff4d5cd93d', employeeId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', date: new Date(), hour: new Date(), documentId: '9f32dea6-8a1d-4093-a873-73365a9b5b91', isActive: true },
    ],
    evaluation: [
        {id: '', employeeId: '', date: new Date(), result: ''},
        {id: '', employeeId: '', date: new Date(), result: ''},
        {id: '', employeeId: '', date: new Date(), result: ''},
        {id: '', employeeId: '', date: new Date(), result: ''},
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
        { id: '5c930724-9e5c-44ad-8507-04365a647a72', description: 'Servicio',             isActive: false, useStock: false}, //*UseStockz
        { id: 'e282b267-07b7-458c-b828-c4faf1b71159', description: 'Concepto',             isActive: false, useStock: false},
        { id: 'e9b02730-7dab-4d68-b660-44357697c17d', description: 'Producto Terminado',   isActive: true,  useStock: true },
        { id: '2aaec104-dc80-4a92-b748-a40a052e9ce6', description: 'Insumo',               isActive: true,  useStock: true }
    ], 
    categoryProduct: [
        { id: 'a53f9e6d-9f3d-47e1-8f48-697bd57928b1', categoryName: 'Elaboración de alimentos', isActive: true },
        { id: '71de1875-8ba0-4e1a-b17f-531de9df1114', categoryName: 'Sistema',                  isActive: true },
        { id: 'cb6e94d8-ec34-4da7-8d16-5970dd89890c', categoryName: 'Insumo de Alimento',       isActive: true },
        { id: '0a50656f-62f4-4dea-a05e-66eee56aae18', categoryName: 'Empacado',                 isActive: true },
        { id: 'c4b0f764-3ae3-4dad-85c1-acce7e38e767', categoryName: 'Accesorios',               isActive: true },
        { id: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9', categoryName: 'Platillos',                isActive: true },
        { id: '4be50806-7f35-45aa-b5f0-29021ef4996f', categoryName: 'Bebidas',                  isActive: true },
        { id: '3b63ffc6-1957-4550-878b-f581bfdd09db', categoryName: 'Ingredientes',             isActive: true },

    ],
    product: [
        { id: 'dbc7ba01-bb96-4e8b-8436-b0c1d2723236', code: 'DC',       description: 'Devolucion de compra',        isActive: true, productTypeId: 'e282b267-07b7-458c-b828-c4faf1b71159', categoryId: '71de1875-8ba0-4e1a-b17f-531de9df1114',    price: 0.00, existence: 0,    viewMenu: false},
        { id: '1a3f49bd-3c1e-4fcf-b636-9c1df7d8aaae', code: 'INS-0001', description: 'Salsa de Tomate',             isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: 'cb6e94d8-ec34-4da7-8d16-5970dd89890c',    price: 20.00, existence: 0,   viewMenu: false},
        { id: '5c80dddf-3496-4338-86b3-f239d1e061a5', code: 'INS-0002', description: 'Masa para pizza',             isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: 'cb6e94d8-ec34-4da7-8d16-5970dd89890c',    price: 10.00, existence: 0,   viewMenu: false},
        { id: 'c31aeb8f-b690-4866-82f1-d5093e52e145', code: 'INS-0100', description: 'Caja de carton para pizza',   isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '0a50656f-62f4-4dea-a05e-66eee56aae18',    price: 0.00, existence: 0,    viewMenu: false},
        { id: 'd917a3cd-1109-431a-ab73-029bdacd3279', code: 'INS-0101', description: 'Servilleta de papel',         isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: 'c4b0f764-3ae3-4dad-85c1-acce7e38e767',    price: 0.00, existence: 0,    viewMenu: false},
        { id: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', code: 'PLT-001',  description: 'Pizza de Peperoni',           isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 20.00, existence: 0,   viewMenu: false},
        { id: '837d3ac7-8517-4b34-abe6-30ebb91b50c9', code: 'BBD-001',  description: 'Bebida Pepsi de 2LTS',        isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '4be50806-7f35-45aa-b5f0-29021ef4996f',    price: 20.00, existence: 0,   viewMenu: false},
        { id: 'b29c17bc-ed67-429e-ba4d-dfac5629a454', code: 'PLT-002',  description: 'Pizza Hawaiana ',             isActive: false, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',   price: 12.00, existence: 109, viewMenu: false},
        { id: '3f1386ea-276a-4797-967f-20277286a420', code: 'PLT-003',  description: 'Papas Fransesas',             isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 2.00, existence: 80,   viewMenu: false},
        { id: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', code: 'PLT-004',  description: 'Dedos de Queso',              isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 10.00, existence: 80,  viewMenu: false},
        { id: '20b0ea8b-40d1-4c00-80d0-d6ffd35ea6d2', code: 'PLT-005',  description: 'Alitas BQ',                   isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 20.00, existence: 120, viewMenu: false},
        { id: '2b6bd085-d1f3-45d5-afd5-ee5b9f57da6b', code: 'PLT-006',  description: 'Pure de Papa',                isActive: false, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',   price: 20.00, existence: 30,  viewMenu: false},
        { id: '6536a9ba-ddb4-4a17-94cc-a1790cae129a', code: 'PLT-007',  description: 'Ensalada',                    isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 20.00, existence: 30,  viewMenu: false},
        { id: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', code: 'PLT-008',  description: 'Hamburgesa Pollo ',           isActive: true, productTypeId: 'e9b02730-7dab-4d68-b660-44357697c17d', categoryId: '32e7422f-1ad8-4d37-9416-36ad8bc6aec9',    price: 8.00, existence: 150,  viewMenu: false},
        { id: 'e0a01cab-504f-48b5-a032-91b06b53f0d1', code: 'ING-001',  description: 'Pan de Hamburgesa',           isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 1.00, existence: 0,    viewMenu: false},
        { id: '30400ed2-8bfc-486e-b441-de5fa3fe6760', code: 'ING-002',  description: 'Jitomate',                    isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 1.00, existence: 0,    viewMenu: false},
        { id: 'ccb72b09-c3c4-4d25-865e-dae7999ef955', code: 'ING-003',  description: 'Cebolla',                     isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 1.00, existence: 0,    viewMenu: false},
        { id: '386f4d1d-09eb-41bc-a6f0-b8f7b514dfe3', code: 'ING-004',  description: 'Lechuga',                     isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 10.00, existence: 0,   viewMenu: false},
        { id: '32b25783-b599-4cac-8b03-5fa665b81994', code: 'ING-005',  description: 'Pepinillos',                  isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 1.00, existence: 0,    viewMenu: false},
        { id: 'cb9e5b5f-a864-4a4b-8a0f-9d99af85ba3e', code: 'ING-006',  description: 'Carne de Pollo (Hamburgesa)', isActive: true, productTypeId: '2aaec104-dc80-4a92-b748-a40a052e9ce6', categoryId: '3b63ffc6-1957-4550-878b-f581bfdd09db',    price: 12.00, existence: 0,   viewMenu: false},
    ],

    document: [
        {id: '4a00ff37-2f05-4042-abcd-62270aaa31bb', description: 'Venta', isActive: true, folio: 1},
        {id: '314bc909-4e7d-423c-8c61-6fb712ab48f4', description: 'Compra', isActive: true, folio: 1},
        {id: '9d33b426-589a-4608-a0cc-ae94fefffe47', description: 'Devolucion de Venta', isActive: true, folio: 1},
        {id: '4f825fa9-16e3-4132-ab11-51421d5d5b09', description: 'Devolucion de Compra', isActive: true, folio: 1},
        {id: '64362875-3469-4b59-9077-3f28bd7049a6', description: 'Orden de Produccion', isActive: true, folio: 1},
    ],
    moviment: [
        {id: '65d35e71-af8b-4151-b079-3dc03f0e2814', date: new Date(' 2000-02-02'), personId: '593fc874-9839-4e08-8cb0-670f93c34520', documentId: '314bc909-4e7d-423c-8c61-6fb712ab48f4', elaborateId: '46c20549-5cb1-4152-8728-dd480595bd3b', amount: 1111, status: 'terminado', referenceId: null},
        {id: '65d35e71-af8b-4151-b079-3dc03f0e8765', date: new Date(' 2021-01-01'), personId: '593fc874-9839-4e08-8cb0-670f93c34520', documentId: '314bc909-4e7d-423c-8c61-6fb712ab48f4', elaborateId: '46c20549-5cb1-4152-8728-dd480595bd3b', amount: 8888, status: 'terminado', referenceId: null},
        {id: '65d35e71-af8b-4151-b079-3dc03f0e8766', date: new Date(' 2024-11-21'), personId: '593fc874-9839-4e08-8cb0-670f93c34520', documentId: '314bc909-4e7d-423c-8c61-6fb712ab48f4', elaborateId: '46c20549-5cb1-4152-8728-dd480595bd3b', amount: 1380, status: 'terminado', referenceId: null},
        {id: '65d35e71-af8b-4151-b079-3dc03f0e8763', date: new Date(' 2024-11-21'), personId: '593fc874-9839-4e08-8cb0-670f93c34520', documentId: '314bc909-4e7d-423c-8c61-6fb712ab48f4', elaborateId: '46c20549-5cb1-4152-8728-dd480595bd3b', amount: 1380, status: 'terminado', referenceId: null},
        {id: '65d35e71-af8b-4151-b079-3dc03f0e2000', date: new Date(' 2024-11-22'), personId: '593fc874-9839-4e08-8cb0-670f93c34520', documentId: '314bc909-4e7d-423c-8c61-6fb712ab48f4', elaborateId: '46c20549-5cb1-4152-8728-dd480595bd3b', amount: 1380, status: 'terminado', referenceId: null},
        {id: '145c8a51-0e93-4f02-a770-4ee9647f85cd', date: new Date(), personId: '6541e329-809c-48f6-8f9d-234b5d17cfbf', documentId: '4a00ff37-2f05-4042-abcd-62270aaa31bb', elaborateId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', amount: 368,      status: 'En proceso', referenceId: null},        
        {id: '68151027-2119-4496-ae44-c6fbbe838b85', date: new Date(), personId: '6541e329-809c-48f6-8f9d-234b5d17cfbf', documentId: '4a00ff37-2f05-4042-abcd-62270aaa31bb', elaborateId: '9d260add-9eb9-4d5a-9b0c-7b6b0fbbee24', amount: 236.4,    status: 'activo', referenceId: null},
        {id: '2e2197ab-36bb-4f07-a104-8879507b1557', date: new Date(), personId: 'bf9c6739-8612-4149-a552-5f280720cfe6', documentId: '4f825fa9-16e3-4132-ab11-51421d5d5b09', elaborateId: '6c01cdf0-4c2b-4c9a-9d22-b3e28ddf85f5', amount: 174, status: 'activo', referenceId: null},
        {id: '4e98b9ab-5d3f-4931-a3f4-719cdc7db509', date: new Date(), personId: '013d069d-744d-4eca-b041-890aaec92c3d', documentId: '9d33b426-589a-4608-a0cc-ae94fefffe47', elaborateId: '6c01cdf0-4c2b-4c9a-9d22-b3e28ddf85f5', amount: 555, status: 'activo', referenceId: null},

    ],
    movementDetail: [
        {id: '0da8da8c-e91f-4951-9fc4-780aa579e7b2', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', quantity: 20, productId: '1a3f49bd-3c1e-4fcf-b636-9c1df7d8aaae', priceUnit: 25, subTotal: 500, tax: 80, total: 580, costUnit: 0, promotionId: null, isActive: true},
        {id: 'a2ff4f48-bcee-4e47-a064-8283ad36e389', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', quantity: 20, productId: '5c80dddf-3496-4338-86b3-f239d1e061a5', priceUnit: 25, subTotal: 500, tax: 80, total: 580, costUnit: 0, promotionId: null, isActive: true},
        {id: 'e7b57905-434f-46b6-8ed2-bd902751a2b5', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', quantity: 20, productId: 'c31aeb8f-b690-4866-82f1-d5093e52e145', priceUnit: 126, subTotal: 200, tax: 20, total: 220, costUnit: 0, promotionId:  null, isActive: true},
        {id: 'ab367239-b081-4b77-b915-283df09513f9', movementId: '145c8a51-0e93-4f02-a770-4ee9647f85cd', quantity: 1, productId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', priceUnit: 170, subTotal: 170, tax: 24, total: 194, costUnit: 0, promotionId:  null, isActive: true},
        {id: '13ff9add-f6ab-46f1-b2a4-fe0074a5420f', movementId: '145c8a51-0e93-4f02-a770-4ee9647f85cd', quantity: 1, productId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', priceUnit: 150, subTotal: 150, tax: 24, total: 174, costUnit: 0, promotionId:  null, isActive: true},
        {id: '1b8f2f4c-cdec-446a-b885-0720e3b7508a', movementId: '68151027-2119-4496-ae44-c6fbbe838b85', quantity: 1, productId: '837d3ac7-8517-4b34-abe6-30ebb91b50c9', priceUnit: 40, subTotal: 40, tax: 2.4, total: 42.4, costUnit: 0, promotionId:  null, isActive: true},
        {id: 'c7b8e01a-26c9-4c6a-ae65-cd9886f375f6', movementId: '68151027-2119-4496-ae44-c6fbbe838b85', quantity: 1, productId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', priceUnit: 170, subTotal: 170, tax: 24, total: 194, costUnit: 0, promotionId:  null, isActive: true},
        // {id: 'c11c7d82-3b1c-43a3-8429-ad60480f476d', movementId: '2e2197ab-36bb-4f07-a104-8879507b1557', quantity: 1, productId: '9f88aac4-d514-4e3b-b2fb-31239cf8c75', priceUnit: 150, subTotal: 150, tax: 24, total: 174, costUnit: 0, promotionId:  null, isActive: true},
        {id: '7d8d8c16-584f-4975-87af-9099e18431bb', movementId: '4e98b9ab-5d3f-4931-a3f4-719cdc7db509', quantity: 19, productId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', priceUnit: 25, subTotal: 475, tax: 80, total: 555, costUnit: 0, promotionId:  null, isActive: true},
        //{id: '', movimiento_id: '', cantidad: 1, producto_id: '', priceUnitario: 120, subTotal: 120, impuestos: 19.2, total: 12, costoUnitario: 0, promocion_id: ''},

    ],
    inventory: [
        {id: '5407233e-cbfe-4d21-b7a1-e2e1d86972d2', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', productId: '1a3f49bd-3c1e-4fcf-b636-9c1df7d8aaae', quantity: 20},
        {id: 'c205318a-17a8-4e1b-8853-d30408bf741f', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', productId: '5c80dddf-3496-4338-86b3-f239d1e061a5', quantity: 20},
        {id: '64d989b7-9459-435d-8fba-d02be38b3890', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', productId: 'c31aeb8f-b690-4866-82f1-d5093e52e145', quantity: 20},
        {id: '57bcd81f-309f-4557-b40c-4193cad3707a', movementId: '145c8a51-0e93-4f02-a770-4ee9647f85cd', productId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', quantity: -1},
        {id: '75db08a4-024a-40e2-92e1-51087ca19def', movementId: '145c8a51-0e93-4f02-a770-4ee9647f85cd', productId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', quantity: -1},
        {id: '368d5c4d-2b72-407c-9644-7c613e50908f', movementId: '68151027-2119-4496-ae44-c6fbbe838b85', productId: '837d3ac7-8517-4b34-abe6-30ebb91b50c9', quantity: -1},
        {id: 'fd2387c7-cf6e-40ce-b9d2-e32a86a72989', movementId: '68151027-2119-4496-ae44-c6fbbe838b85', productId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', quantity: -1},
        {id: 'eee1eab8-0111-4090-bc50-f46986bc8912', movementId: '2e2197ab-36bb-4f07-a104-8879507b1557', productId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', quantity: 1},
        {id: 'cd8a8353-13e3-4d50-b9a4-2034c5326c74', movementId: '4e98b9ab-5d3f-4931-a3f4-719cdc7db509', productId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', quantity: -19},
        /*{id: 'cde20d2c-ed91-4d52-b75c-7fa1fb1592c2', movementId: '', productId: '', quantity: 1},
        {id: 'f27c4816-bb3d-45bc-a7f1-6604f1f7aff4', movementId: '', productI2d: '', quantity: 1},
        {id: 'cdb86f07-e6ef-4a9a-8ce7-37f072dc781b', movementId: '', productId: '', quantity: 1},
        {id: '19682680-51d8-4420-bd25-55bf8b530984', movementId: '', productId: '', quantity: 1},*/
    ],
    garrision: [
        {id: '2c873c2f-52db-4aa1-a7b2-6b5cff06a8a1', dishId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', garrisonId: '3f1386ea-276a-4797-967f-20277286a420', isActive: true, quantity: 10,identifier: 10},
        {id: '0de68899-fea9-453f-945e-9b6a8b73a87b', dishId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', garrisonId: '9f88aac4-d514-4e3b-b2fb-312239cf8c75', isActive: true, quantity: 10,identifier: 10},
        {id: 'b10abb14-94d5-4bc7-9551-4a33368a4583', dishId: 'b29c17bc-ed67-429e-ba4d-dfac5629a454', garrisonId: '3f1386ea-276a-4797-967f-20277286a420', isActive: true, quantity: 10,identifier: 10},
        {id: '1597485b-9551-4386-8db2-43c76eed6063', dishId: 'b29c17bc-ed67-429e-ba4d-dfac5629a454', garrisonId: '2b6bd085-d1f3-45d5-afd5-ee5b9f57da6b', isActive: true, quantity: 10,identifier: 10},
        {id: 'e76ac8a8-6d6d-423c-9721-c0a20d87bd69', dishId: 'b29c17bc-ed67-429e-ba4d-dfac5629a454', garrisonId: '6536a9ba-ddb4-4a17-94cc-a1790cae129a', isActive: true, quantity: 10,identifier: 10},
        {id: '48bfabfa-bf2e-4949-95bf-b9fd1c362e20', dishId: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', garrisonId: '3f1386ea-276a-4797-967f-20277286a420', isActive: true, quantity: 10,identifier: 10},
        {id: '4f384604-ad4b-446a-9670-d65f4d7fe174', dishId: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', garrisonId: '6536a9ba-ddb4-4a17-94cc-a1790cae129a', isActive: true, quantity: 10,identifier: 10},
        {id: '82964ef8-c556-49f7-973f-0d97b3a06433', dishId: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', garrisonId: '2b6bd085-d1f3-45d5-afd5-ee5b9f57da6b', isActive: true, quantity: 10,identifier: 10},
        {id: '53c23fd3-c721-4f6a-803a-874c96c7f77b', dishId: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', garrisonId: '20b0ea8b-40d1-4c00-80d0-d6ffd35ea6d2', isActive: true, quantity: 10,identifier: 10},
        /*{id: 'a484bb5f-4a4d-4129-a937-e2755ddf3b40', dishId: '', garrisionId: '', isActive: true},
        {id: '9c03c073-7c47-4c85-9534-6b639da15a2b', dishId: '', garrisionId: '', isActive: true},
        {id: '809baaee-7341-4c43-9e9b-a65bcc802aa4', dishId: '', garrisionId: '', isActive: true},
        {id: 'c4c4d178-508c-49bf-a1c5-e4f1d5ee05b3', dishId: '', garrisionId: '', isActive: true},
        {id: 'e3217aa1-fc28-411a-ab20-d185d1a979fe', dishId: '', garrisionId: '', isActive: true},
        {id: '93bd1950-6da9-4699-a9d7-b3b16e91ef39', dishId: '', garrisionId: '', isActive: true},
        {id: '57e0f402-30bb-4c80-a7c5-680bb7bda492', dishId: '', garrisionId: '', isActive: true},*/
    ],
    promotion: [
        {id: '7dcfa290-2f46-4017-b92f-216039965c39', productId: '7a2d1977-47ec-4279-a5f0-7c8d74ce4f39', price: 5, from: new Date(), until: new Date(), isActive: true},
        {id: 'c62c96c4-dedf-4161-af2f-c66ccfa62739', productId: '20b0ea8b-40d1-4c00-80d0-d6ffd35ea6d2', price: 5, from: new Date(), until: new Date(), isActive: true},
        {id: 'e4b06416-f38c-4e03-a415-a9a9a87365d4', productId: '2a4eb471-d1b7-4c06-a89d-1e7fc51c47ec', price: 5, from: new Date(), until: new Date(), isActive: true},
    ],
    supplierOrder: [
        {id: '5c87d0ca-f310-4a37-bd6b-22942b54b487', movementId: '65d35e71-af8b-4151-b079-3dc03f0e8765', invoiceFolio: 'F-215', paymentDate: new Date(), status: 'pagado'},
        {id: 'f8aeee41-7147-408a-991e-f450f5d564a2', movementId: '65d35e71-af8b-4151-b079-3dc03f0e2814', invoiceFolio: 'F-216', paymentDate: new Date(), status: 'pendiente'},
        {id: 'ecb025b6-e966-4a1c-b312-c3261b9530bc', movementId: '65d35e71-af8b-4151-b079-3dc03f0e8766', invoiceFolio: 'F-217', paymentDate: new Date(), status: 'pagado'},
        {id: '6a782760-cf4d-4c69-abdb-ac803723c0f8', movementId: '65d35e71-af8b-4151-b079-3dc03f0e8763', invoiceFolio: 'F-218', paymentDate: new Date(), status: 'proceso'},

    ],
    clientOrder: [
        {id: '8c02597d-63d9-4e38-a9f3-7e1ca00b4353', movementId: '', folio: 'F-219', datePay: new Date(), status: 'proceso', tableId: ''},
        {id: '35249cf0-39b9-4518-9dfe-9d14080c61e8', movementId: '', folio: 'F-220', datePay: new Date(), status: 'proceso', tableId: ''},
        {id: '62aaa1d9-0c01-4927-ba38-f1b640714cd3', movementId: '', folio: 'F-221', datePay: new Date(), status: 'proceso', tableId: ''},
        {id: '569928c4-5bc4-4968-a7aa-838126a300d9', movementId: '', folio: 'F-222', datePay: new Date(), status: 'proceso', tableId: ''},
        {id: '06359828-81fd-45ac-880b-9776fcd96d1e', movementId: '', folio: 'F-223', datePay: new Date(), status: 'proceso', tableId: ''},

    ],
    clientOrderDetail: [
        {id: '95a633bf-5378-4a20-bd02-990cdf969893', clientOrderId: '', garrisionId: ''},
        {id: '553e8bd4-eb94-48f6-9427-8450090973a9', clientOrderId: '', garrisionId: ''},
        {id: 'a8002025-0091-406b-9aa4-afaee0a54359', clientOrderId: '', garrisionId: ''},
        {id: '7de5faf6-3aa7-474c-ae06-091539988f72', clientOrderId: '', garrisionId: ''},
    ],
    table: [
        {id: 'c1648684-78b4-43be-843f-05f00f41842f', description: 'sala 1',        status: 'activo', isDelete: false},
        {id: 'ded0c2c7-d71e-49ed-a782-167fc07754cd', description: 'Litera 2',      status: 'usado', isDelete: false},
        {id: 'a9e0bd06-88d7-4bd7-8488-622542a5de9e', description: 'Litera 1',      status: 'ocupado', isDelete: false},
        {id: '5b72553a-cc96-41aa-bd0d-c4f82f239f2d', description: 'Frente Caja',   status: 'dsa', isDelete: false},
        {id: '500086a3-5f4f-45d4-bf67-b57c86e318ec', description: 'Patio 2',       status: 'inactica', isDelete: false},
        {id: 'c68d01a9-dc12-48b9-a954-024506425ef6', description: 'Patio 1',       status: 'reservada', isDelete: false},
        {id: '5f64b203-3399-41d2-9ce0-b90885d3b737', description: 'Sala 2',        status: 'rota', isDelete: false},
        {id: '1543d72b-e2ea-4fc2-961b-b427cbf52c22', description: 'Patio 3',       status: 'pintar', isDelete: false},
    ],
    orderPayment: [
        {id: '1feb6062-7938-4c11-b856-661a66e70bda', movimentId: '', monto: 1, status: 'Espera'},
        {id: 'bf79bbcc-360c-4cbc-9884-af6b0c5448f9', movimentId: '', monto: 1, status: 'Pagado'},
        {id: 'e3c88178-9b33-42a0-aef3-0e2dbf07ab98', movimentId: '', monto: 1, status: 'Pagado'},
        {id: 'f3fd1013-c110-4558-8160-a722927e75ff', movimentId: '', monto: 1, status: 'Espera'},

    ],
    typePayment: [
        {id: '9a048c16-3341-4e80-b723-1c4f8ce02d90', description: 'Efectivo', isActive: true},
        {id: 'c088375d-cf7f-400a-8987-e67d06f4d02e', description: 'Tarjeta Debito', isActive: true},
        {id: '899e3a68-72c6-4900-9075-83e1cf7fb4ab', description: 'Tarjeta Credito', isActive: true},
        {id: '413769d1-185a-49d7-ac26-3ce39218a1f3', description: 'Cheque', isActive: true},
    ],
    payment: [
        {id: '0f27fb58-37ee-4fb9-b06c-e80c139c438e', orderPaymentId: '', monto: 1, typePay: ''},
        {id: 'f8d01cf3-075c-4cd4-b6a6-e9483f0b3607', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '4faada53-df7b-4866-99c0-5c1369017603', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '1f86ccf1-8e22-44e2-9151-c0e9ccf3c5c4', orderPaymentId: '', monto: 1, typePay: ''},
        {id: '2d00224b-974a-471a-8529-ca4cb413bcd2', orderPaymentId: '', monto: 1, typePay: ''},
    ],
    devolutionBuy: [
        {id: '162938aa-9a40-4f40-a90d-dc395d34fbca', movementId: '', folio: 'F-122', datePay: new Date(), status: 'Pagado'},
        {id: '0743e82d-6c3c-435c-bf3c-42023bfb9c64', movementId: '', folio: 'F-124', datePay: new Date(), status: 'Pendiente'},
        {id: '1c7b08fc-a718-4e21-843f-0cbca954210e', movementId: '', folio: 'F-125', datePay: new Date(), status: 'Pagado'},
    ],
    devolutionSell: [
        {id: '793fc4b8-b3d7-4bde-8833-4587c96da762', movementId: '', folio: 'F-125', datePay: new Date(), status: 'Pagado'},
        {id: '9a2e45b7-d113-48a6-ac3f-cfe6739cf6aa', movementId: '', folio: 'F-125', datePay: new Date(), status: 'Pagado'},
        {id: 'f9b3fc9a-648e-4a80-a57a-38f0ebcf7326', movementId: '', folio: 'F-125', datePay: new Date(), status: 'Pagado'},

    ]

}