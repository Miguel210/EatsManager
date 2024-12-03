
export interface Main {
    data: DataForm,
}

export interface DataTableDt {
    data: Data[],
}

export interface Data {
    id: string,
    employeeId: string,
    date: string,
}

export interface DataForm {
    id: string,
    employeeId: string,
    date: string,
    attitude: number,
    efficiency: number,
    hygiene: number,
    initiative: number,
    puntuality: number,
    quality: number,
    evaluationId: string
}