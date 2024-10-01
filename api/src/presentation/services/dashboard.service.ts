import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { ModuleService } from "./module.service";



export class DashboardService {

    constructor(
        readonly moduleService: ModuleService
    ){}

    public async charge(){
        
        return {
            ventas: 1200,
            inventario: 124,
            ordenesDia: 43,
            masVendido: 'Hamburgesa de Camaron',
            ventasDia: [
                {id: 1, lunes: 3000},
                {id: 1, Martes: 800},
                {id: 1, Miercores: 1360},
                {id: 1, Jueves:  900},
                {id: 1, Viernes: 1200},
                {id: 1, Sabado: 4000},
                {id: 1, Domingo: 5700},
            
            ],
            comprasDia: [
                {id: 1, lunes: 1233},
                {id: 1, Martes: 0},
                {id: 1, Miercores: 0},
                {id: 1, Jueves: 9600},
                {id: 1, Viernes: 556},
                {id: 1, Sabado: 0},
                {id: 1, Domingo: 0},
            
            ],
            ordenesPendientes: 4,
            trabajadores: [
                { id: 'bf9c6739-8612-4149-a552-5f280720cfe6', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Miguel ', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
                { id: 'bf9c6739-8612-4149-a552-5f280720cfe8', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Kevin ', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },
                { id: 'bf9c6739-8612-4149-a552-5f280720cfe7', genderId: 'f83dac87-cae3-433e-909f-89b7cb865ff1', fullname: 'Martines ', profileId: '8b06bf9e-4b4d-4ca6-8669-e1b744cef569', typePersonId: '6cb4ec14-8564-4d6f-80c8-eeaacbfe88a4', isActive: true  },

            ],
            listaOrdenes: [
                {id: '8c02597d-63d9-4e38-a9f3-7e1ca00b4353', movementId: '2', folio: 'F-219', datePay: new Date(), status: 'proceso', tableId: '1'},
                {id: '8c02597d-63d9-4e38-a9f3-7e1ca00b4353', movementId: '3', folio: 'F-219', datePay: new Date(), status: 'proceso', tableId: '2'},
                {id: '8c02597d-63d9-4e38-a9f3-7e1ca00b4353', movementId: '1', folio: 'F-219', datePay: new Date(), status: 'proceso', tableId: '3'},

            ]
        }

    }
}