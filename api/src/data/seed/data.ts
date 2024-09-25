import { Uuid } from "../../config"


export const seedData = {

    module: [
        {id: Uuid.uuid(), name: 'movements', identifier: 10, isActive: true},
        {id: Uuid.uuid(), name: 'dashboardAdm', identifier: 1, isActive: true},
        {id: Uuid.uuid(), name: 'dashboardSup', identifier: 2, isActive: true},
        {id: Uuid.uuid(), name: 'dashboardEmp', identifier: 3, isActive: true},
        {id: Uuid.uuid(), name: 'inventory', identifier: 20, isActive: true},

    ],


    operation: [
        {id: Uuid.uuid(), name: 'read', isActive: true},
        {id: Uuid.uuid(), name: 'read', isActive: true},
        {id: Uuid.uuid(), name: 'read', isActive: true},
        {id: Uuid.uuid(), name: 'read', isActive: true},
        {id: Uuid.uuid(), name: 'create', isActive: true},
        {id: Uuid.uuid(), name: 'read', isActive: true},
        {id: Uuid.uuid(), name: 'update', isActive: true},
        {id: Uuid.uuid(), name: 'delete', isActive: true},

    ],

    profileoperation: [
        {id: Uuid.uuid(), profileId: 1, operationId: 1, isActive: true},
        {id: Uuid.uuid(), profileId: 1, operationId: 2, isActive: true},
        {id: Uuid.uuid(), profileId: 1, operationId: 5, isActive: true},
        {id: Uuid.uuid(), profileId: 1, operationId: 6, isActive: true},
        {id: Uuid.uuid(), profileId: 1, operationId: 7, isActive: true},
        {id: Uuid.uuid(), profileId: 1, operationId: 8, isActive: true},
        {id: Uuid.uuid(), profileId: 2, operationId: 1, isActive: true},
        {id: Uuid.uuid(), profileId: 2, operationId: 3, isActive: true},
        {id: Uuid.uuid(), profileId: 2, operationId: 5, isActive: true},
        {id: Uuid.uuid(), profileId: 3, operationId: 1, isActive: true},
        {id: Uuid.uuid(), profileId: 3, operationId: 4, isActive: true},
    ],

    profile: [
        {id: Uuid.uuid(), description: 'Admin', isActive: true},
        {id: Uuid.uuid(), description: 'Supervisor', isActive: true},
        {id: Uuid.uuid(), description: 'Empleado', isActive: true},
        {id: Uuid.uuid(), description: 'Cliente', isActive: true},
        {id: Uuid.uuid(), description: 'Proveedor', isActive: true},

    ],

    typopersona: [
        {id: Uuid.uuid(), description: 'Empleado', isActive: true},
        {id: Uuid.uuid(), description: 'Proveedor', isActive: true},
        {id: Uuid.uuid(), description: 'Cliente', isActive: true},
    ],

    person: [
        {id: Uuid.uuid(), fullname: 'Miguel Angel', username: 'migueloz', password: '12345', profileId: 1, typePersonId:1 },
        {id: Uuid.uuid(), fullname: 'Daniela Rocha', username: '', password: '', profileId: 4 , typePersonId:3 },
        {id: Uuid.uuid(), fullname: 'Juan Perez', username: 'juanp01', password: '12345', profileId: 2, typePersonId:1 },
        {id: Uuid.uuid(), fullname: 'Edgar Martinez', username: 'edgnez', password: '12345', profileId: 3, typePersonId:1 },
        {id: Uuid.uuid(), fullname: 'Joseline Hrz', username: '', password: '', profileId: 4, typePersonId:3 },
        {id: Uuid.uuid(), fullname: 'Maria Jose', username: 'mariaJ05', password: '12345', profileId: 1, typePersonId:1 },
        {id: Uuid.uuid(), fullname: 'Oscar Manuel', username: '', password: '', profileId: 5, typePersonId:2 },

    ]
}