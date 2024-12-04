export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:           string;
    personId:     PersonId;
    documentId:   Document;
    amount:       string;
    status:       string;
    isActive:     boolean;
    date:         string;
    elaborateId?: string;
}

export interface Document {
    description: string
}
export interface PersonId {
    fullname: string
}