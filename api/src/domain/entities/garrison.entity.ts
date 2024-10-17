import { CustomError } from "../errors/custom.error"



export class GarrisonEntity {

    constructor(
        public id: string,
        public dishId: string,
        public garrisonId: string,
        public quantity: number,
        public identifier: number,
        public isActive: boolean,
    ) {}
    
    static fromObject(object: {[key: string]: any}) {
        const { id, dishId, garrisonMainDish, garrisonId, garrisonDish, quantity, identifier, isActive } = object
        
        if( !id ) throw CustomError.badRequest('Missing id garrison');
        if( !dishId && garrisonMainDish[0] ) throw CustomError.badRequest('Missing dish');
        if( !garrisonId && garrisonDish[0] ) throw CustomError.badRequest('Missing garrisionId');
        if( !quantity ) throw CustomError.badRequest('Missing quantity');
        if( !identifier ) throw CustomError.badRequest('Missing identifier');
        if( isActive === undefined ) throw CustomError.badRequest('Missing isActive');

        return new GarrisonEntity(id, dishId || garrisonMainDish, garrisonId || garrisonDish, quantity, identifier, isActive)
    }
    
}
/*
 dishId             String
  garrisonId         String
  quantity           Decimal?            @db.Decimal(10,2) 
  identifier         Int?
  isActive           Boolean             @default(true)
  deleteAt           DateTime?
  isDelete   
*/