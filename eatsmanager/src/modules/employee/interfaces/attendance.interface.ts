export interface Main {
    data: Data;
}

export interface Data {
    data: Attendance[];
}

export interface Attendance {
    id:         string;
    employeeId: EmployeeID;
    date:       Date;
    hour:       Date;
    documentId: DocumentID;
    isActive:   boolean;
}

export interface DocumentID {
    id:          string;
    description: string;
}

export interface EmployeeID {
    id:     string;
    person: Person;
}

export interface Person {
    fullname: string;
}
