export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:           string;
    personId:     Person;
    documentId:   Document;
    amount:       string;
    status:       string;
    isActive:     boolean;
    date:         string;
    elaborateId?: ElaborateID;
    supplierOrders: supplierOrders[];
}

export interface Document {
    description: string
    folio:       number;
}

export interface ElaborateID {
    person: Person;
}

export interface Person {
    fullname: string;
}
export interface supplierOrders {
    id:           string;
    invoiceFolio: string;
    paymentDate:  Date;
    isActive:     boolean;
    status:       string;
}