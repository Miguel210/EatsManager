import { EmployeeRespositoryImpl } from "../../infraestructure/employee/repository/employee.repository.impl";



export class EmployeeService {

    constructor(
        public readonly repository: EmployeeRespositoryImpl
    ) {}
}