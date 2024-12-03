export interface Main {
    data: Data;
}

export interface Obj {
    data: Data[];
}

export interface Data {
    id:       string;
    personId: string;
    person:   Person;
    hireDate: string;
    input:    string;
    output:   string;
    salary:   string;
    isActive: boolean;
}

export interface Person {
    fullname: string;
    profile:  Profile;
}

export interface Profile {
    name: string;
}
