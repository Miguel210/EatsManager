export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}
export interface Obj2 {
    data: Data[];
}
export interface Data {
    id:          string;
    description: string;
    isActive:    boolean;
    useStock:    boolean;
}
