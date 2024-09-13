

export const seedData = {


    module: [
        {id: 1, description: 'movements', isActive: true},
        {id: 2, description: 'dashboardAdm', isActive: true},
        {id: 3, description: 'dashboardSup', isActive: true},
        {id: 4, description: 'dashboardEmp', isActive: true},
        {id: 5, description: 'inventory', isActive: true},

    ],


    operation: [
        {id: 1, description: 'read',module: 1, isActive: true},
        {id: 2, description: 'read',module: 2, isActive: true},
        {id: 3, description: 'read',module: 3, isActive: true},
        {id: 4, description: 'read',module: 4, isActive: true},
        {id: 5, description: 'create',module: 5, isActive: true},
        {id: 6, description: 'read',module: 5, isActive: true},
        {id: 7, description: 'update',module: 5, isActive: true},
        {id: 8, description: 'delete',module: 5, isActive: true},

    ],

    profileoperation: [
        {id:1, profileId: 1, operationId: 1, isActive: true},
        {id:2, profileId: 1, operationId: 2, isActive: true},
        {id:3, profileId: 1, operationId: 5, isActive: true},
        {id:4, profileId: 1, operationId: 6, isActive: true},
        {id:5, profileId: 1, operationId: 7, isActive: true},
        {id:6, profileId: 1, operationId: 8, isActive: true},
        {id:7, profileId: 2, operationId: 1, isActive: true},
        {id:8, profileId: 2, operationId: 3, isActive: true},
        {id:9, profileId: 2, operationId: 5, isActive: true},
        {id:10, profileId: 3, operationId: 1, isActive: true},
        {id:11, profileId: 3, operationId: 4, isActive: true},
    ],

    profile: [
        {id: 1, description: 'Admin', isActive: true},
        {id: 2, description: 'Supervisor', isActive: true},
        {id: 3, description: 'Empleado', isActive: true},
        {id: 4, description: 'Cliente', isActive: true},
        {id: 5, description: 'Proveedor', isActive: true},

    ],

    typopersona: [
        {id: 1, description: 'Empleado', isActive: true},
        {id: 2, description: 'Proveedor', isActive: true},
        {id: 3, description: 'Cliente', isActive: true},
    ],

    person: [
        {id: 1, fullname: 'Miguel Angel', username: 'migueloz', password: '12345', profileId: 1, typePersonId:1 },
        {id: 2, fullname: 'Daniela Rocha', username: '', password: '', profileId: 4 , typePersonId:3 },
        {id: 3, fullname: 'Juan Perez', username: 'juanp01', password: '12345', profileId: 2, typePersonId:1 },
        {id: 4, fullname: 'Edgar Martinez', username: 'edgnez', password: '12345', profileId: 3, typePersonId:1 },
        {id: 5, fullname: 'Joseline Hrz', username: '', password: '', profileId: 4, typePersonId:3 },
        {id: 6, fullname: 'Maria Jose', username: 'mariaJ05', password: '12345', profileId: 1, typePersonId:1 },
        {id: 7, fullname: 'Oscar Manuel', username: '', password: '', profileId: 5, typePersonId:2 },

    ]
}