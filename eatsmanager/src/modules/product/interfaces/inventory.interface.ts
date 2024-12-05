export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:       string;
    movement: string;
    product:  string;
    quantity: number;
}
