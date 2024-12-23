export interface Obj {
    data: Data[];
}
export interface Main {
    data: Data;
}

export interface Data {
    id:          string;
    description: string;
    status:      string;
    isActive:    boolean;
}
