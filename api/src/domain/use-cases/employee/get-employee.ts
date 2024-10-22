import { EmployeeEntity } from "../../entities/employee.entity";
import { EmployeeRepository } from "../../repositories/employee/employee.repository";




export interface GetByIdEmployeeUseCase {

    execute(id: string): Promise<EmployeeEntity>;
}


export class GetEmployee implements GetByIdEmployeeUseCase {

    constructor( 
        private readonly repository: EmployeeRepository
    ) {}

    execute(id: string): Promise<EmployeeEntity> {
        return this.repository.getById(id)
    }
    
}