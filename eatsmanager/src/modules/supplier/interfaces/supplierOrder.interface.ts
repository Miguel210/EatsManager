export interface Main {
    data: Data;
}

export interface Data {
    id:             string;
    personId:       PersonID;
    documentId:     DocumentID;
    elaborateId:    string;
    amount:         number;
    status:         string;
    isActive:       boolean;
    date:           Date;
    movementDetail: MovementDetail[];
    supplierOrders: SupplierOrder[];
}

export interface DocumentID {
    id:          string;
    description: string;
}

export interface MovementDetail {
    id:        string;
    product:   Product;
    quantity:  number;
    priceUnit: number;
    subTotal:  number;
    tax:       number;
    total:     number;
    costUnit:  number;
}

export interface Product {
    id: string;
    description: string;
}

export interface PersonID {
    id:       string;
    fullname: string;
}

export interface SupplierOrder {
    id:           string;
    invoiceFolio: string;
    paymentDate:  Date;
    isActive:     boolean;
    status:       string;
}
