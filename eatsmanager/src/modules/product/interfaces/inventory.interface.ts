export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:         string;
    movementId: string;
    movement:   Movement;
    productId:  string;
    product:    Product;
    quantity:   number;
}

export interface Movement {
    document: Document;
}

export interface Document {
    description: string;
    folio: number;
}

export interface Product {
    description: string;
    code:        string;
    category:    Category;
    productType: ProductType;
}

export interface Category {
    id:           string;
    categoryName: string;
    isActive:     boolean;
    deleteAt:     null;
    isDelete:     boolean;
}

export interface ProductType {
    description: string;
}
