import { CustomError } from "../errors/custom.error"



export class ProductEntity {

    constructor(
        public id: string,
        public code: string,
        public description: string,
        public existence: number,
        public price: number,
        public productType: string,
        public category: string,
        public viewMenu: boolean,
        public isActive: boolean,
        public image: string,
        public deleteAt: Date,
        public isDelete: boolean
    ) {}

    static fromObject(object: {[key: string]: any}) {

        const {id, code, description, existence, price, productType, category, viewMenu, isActive, image, deleteAt, isDelete } = object

        if( !id ) throw CustomError.badRequest('Missig id product');
        
        
        if( !code ) throw CustomError.badRequest('Missig code');
        if( !description ) throw CustomError.badRequest('Missig description');
        if( typeof existence === undefined ) throw CustomError.badRequest('Missig existence');
        if( !price ) throw CustomError.badRequest('Missig price');
        if( !productType ) throw CustomError.badRequest('Missig productTypeId');
        if( !category ) throw CustomError.badRequest('Missig category');
        if( !viewMenu === undefined ) throw CustomError.badRequest('Missing viewMenu')
        if( !isActive === undefined ) throw CustomError.badRequest('Missing isActive')

        //if(isDelete === false) throw CustomError.badRequest('No exist')

        return new ProductEntity(id, code, description, existence, price, productType, category, viewMenu, isActive, image, deleteAt, isDelete)
    }
}