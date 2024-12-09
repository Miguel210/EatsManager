export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:         string;
    movementId: MovementID;
    quantity:   number;
    productId:  ProductID;
    priceUnit:  string;
    subTotal:   string;
    tax:        string;
    total:      string;
    costUnit:   string;
    isActive:   boolean;
}

export interface MovementID {
    document: ProductID;
}

export interface ProductID {
    description: string;
    folio: string
}
