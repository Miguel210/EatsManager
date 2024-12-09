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
