import { EmployeeEntity } from "../../entities/employee.entity";
import { EmployeeRepository } from "../../repositories/employee/employee.repository";




export interface GetsEmployeeUseCase {

    execute(form: any): Promise<EmployeeEntity[]>;
}


export class GetsEmployee implements GetsEmployeeUseCase {

    constructor( 
        private readonly repository: EmployeeRepository
    ) {}

    execute(form: any): Promise<EmployeeEntity[]> {
        return this.repository.gets(form)
    }
    
}