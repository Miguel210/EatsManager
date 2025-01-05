
export interface Main {
    data: DataForm,
}

export interface DataTableDt {
    data: DataForm[],
}

export interface Data {
    id: string,
    empoyee: Person,
    evaluator: Person,
    date: string,
}

export interface Employee {
    person: Person
}
export interface Person {
    fullname: string
}
export interface DataForm {
    id: string,
    employeeId: string,
    empoyee: {person: {fullname: string}}
    date: string,
    attitude: number,
    efficiency: number,
    hygiene: number,
    initiative: number,
    puntuality: number,
    quality: number,
    evaluationId: string,
    evaluator: {person: {fullname: string}}
}