import { EmployeeEntity } from "../../entities/employee.entity";
import { EmployeeRepository } from "../../repositories/employee/employee.repository";




export interface DeleteEmployeeUseCase {

    execute(id: string): Promise<EmployeeEntity>;
}


export class DeleteEmployee implements DeleteEmployeeUseCase {

    constructor( 
        private readonly repository: EmployeeRepository
    ) {}

    execute(id: string): Promise<EmployeeEntity> {
        return this.repository.delete(id)
    }
    
}