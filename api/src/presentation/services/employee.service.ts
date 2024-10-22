import { CreateEmployeeDto } from "../../domain/dtos/employee/create-employee.dto";
import { CreateEmployee } from "../../domain/use-cases/employee/create-employee";
import { GetEmployee } from "../../domain/use-cases/employee/get-employee";
import { GetsEmployee } from "../../domain/use-cases/employee/gets-employee";
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

    async get(id: string) {

        const employee = await new GetEmployee( this.repository).execute(id)
        .then(employee => employee)
        .catch(error => console.log({error}));
        console.log(employee);
        
        return {
            data: {
                employee
            }
        }
    }

    async gets(form: any) {

        const employee = await new GetsEmployee( this.repository).execute(form)
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