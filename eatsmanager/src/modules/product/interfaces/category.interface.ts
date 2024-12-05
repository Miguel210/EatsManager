export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:           string;
    categoryName: string;
    isActive:     boolean;
    isDelete:     null;
    deleteAt:     boolean;
}
