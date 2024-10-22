import { CreateEmployeeDto } from "../../domain/dtos/employee/create-employee.dto";
import { CreateEmployee } from "../../domain/use-cases/employee/create-employee";
import { EmployeeRespositoryImpl } from "../../infraestructure/employee/repository/employee.repository.impl";



export class EmployeeService {

    constructor(
        public readonly repository: EmployeeRespositoryImpl
    ) {}


    async create(dto: CreateEmployeeDto) {
        
        const employee = await new CreateEmployee( this.repository).execute(dto)
        .then(employee => employee)
        .catch(error => console.log({error}));
        console.log(employee);
        
        return {
            data: {
                employee
            }
        }
    }
}