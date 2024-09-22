import { Uuid } from "../../config"


export const seedData = {

    module: [
        {id: Uuid.v4, description: 'movements', isActive: true},
        {id: Uuid.v4, description: 'dashboardAdm', isActive: true},
        {id: Uuid.v4, description: 'dashboardSup', isActive: true},
        {id: Uuid.v4, description: 'dashboardEmp', isActive: true},
        {id: Uuid.v4, description: 'inventory', isActive: true},

    ],


    operation: [
        {id: Uuid.v4, description: 'read',module: 1, isActive: true},
        {id: Uuid.v4, description: 'read',module: 2, isActive: true},
        {id: Uuid.v4, description: 'read',module: 3, isActive: true},
        {id: Uuid.v4, description: 'read',module: 4, isActive: true},
        {id: Uuid.v4, description: 'create',module: 5, isActive: true},
        {id: Uuid.v4, description: 'read',module: 5, isActive: true},
        {id: Uuid.v4, description: 'update',module: 5, isActive: true},
        {id: Uuid.v4, description: 'delete',module: 5, isActive: true},

    ],

    profileoperation: [
        {id: Uuid.v4, profileId: 1, operationId: 1, isActive: true},
        {id: Uuid.v4, profileId: 1, operationId: 2, isActive: true},
        {id: Uuid.v4, profileId: 1, operationId: 5, isActive: true},
        {id: Uuid.v4, profileId: 1, operationId: 6, isActive: true},
        {id: Uuid.v4, profileId: 1, operationId: 7, isActive: true},
        {id: Uuid.v4, profileId: 1, operationId: 8, isActive: true},
        {id: Uuid.v4, profileId: 2, operationId: 1, isActive: true},
        {id: Uuid.v4, profileId: 2, operationId: 3, isActive: true},
        {id: Uuid.v4, profileId: 2, operationId: 5, isActive: true},
        {id: Uuid.v4, profileId: 3, operationId: 1, isActive: true},
        {id: Uuid.v4, profileId: 3, operationId: 4, isActive: true},
    ],

    profile: [
        {id: Uuid.v4, description: 'Admin', isActive: true},
        {id: Uuid.v4, description: 'Supervisor', isActive: true},
        {id: Uuid.v4, description: 'Empleado', isActive: true},
        {id: Uuid.v4, description: 'Cliente', isActive: true},
        {id: Uuid.v4, description: 'Proveedor', isActive: true},

    ],

    typopersona: [
        {id: Uuid.v4, description: 'Empleado', isActive: true},
        {id: Uuid.v4, description: 'Proveedor', isActive: true},
        {id: Uuid.v4, description: 'Cliente', isActive: true},
    ],

    person: [
        {id: Uuid.v4, fullname: 'Miguel Angel', username: 'migueloz', password: '12345', profileId: 1, typePersonId:1 },
        {id: Uuid.v4, fullname: 'Daniela Rocha', username: '', password: '', profileId: 4 , typePersonId:3 },
        {id: Uuid.v4, fullname: 'Juan Perez', username: 'juanp01', password: '12345', profileId: 2, typePersonId:1 },
        {id: Uuid.v4, fullname: 'Edgar Martinez', username: 'edgnez', password: '12345', profileId: 3, typePersonId:1 },
        {id: Uuid.v4, fullname: 'Joseline Hrz', username: '', password: '', profileId: 4, typePersonId:3 },
        {id: Uuid.v4, fullname: 'Maria Jose', username: 'mariaJ05', password: '12345', profileId: 1, typePersonId:1 },
        {id: Uuid.v4, fullname: 'Oscar Manuel', username: '', password: '', profileId: 5, typePersonId:2 },

    ]
}