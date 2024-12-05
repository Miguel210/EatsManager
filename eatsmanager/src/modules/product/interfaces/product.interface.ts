export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:            string;
    code:          string;
    description:   string;
    existence:     number;
    price:         string;
    productTypeId: ProductTypeID;
    categoryId:    CategoryID;
    viewMenu:      boolean;
    isActive:      boolean;
    image:         string;
}

export interface CategoryID {
    categoryName: string;
}

export interface ProductTypeID {
    description: string;
}

// export enum Description {
//     Concepto = "Concepto",
//     Insumo = "Insumo",
//     ProductoTerminado = "Producto Terminado",
// }
