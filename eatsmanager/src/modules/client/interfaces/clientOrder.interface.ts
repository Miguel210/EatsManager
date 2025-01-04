export interface Main {
    data: Data;
}

export interface Data {
    id:          string;
    description: string;
    status:      string;
    isActive:    boolean;
    clientOrder: ClientOrder[];
}

export interface ClientOrder {
    id:           string;
    status:       string;
    invoiceFolio: string;
    movement:     Movement;
    paymentDate:  Date;
}

export interface Movement {
    id:            string;
    person:         Person;
    date:           string
    personId:       string;
    amount:         string;
    isCreate:       boolean;
    referenceId:    string;
    status:        string;
    movementDetail: MovementDetail[];
}

export interface MovementDetail {
    quantity:    number;
    product:     Product;
    movementId: string;
    priceUnit:   string;
    subTotal:    string;
    tax:         string;
    total:       string;
    costUnit:    string;
    promotionId: null;
}

export interface Product {
    id:          string;
    description: string;
    price:       string;
    existence:   number;
}

export interface Person {
    id:       string;
    fullname: string;
}
