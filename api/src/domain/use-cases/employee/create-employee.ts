import { CreateEmployeeDto } from "../../dtos/employee/create-employee.dto";
import { EmployeeEntity } from "../../entities/employee.entity";
import { EmployeeRepository } from "../../repositories/employee/employee.repository";




export interface CreateEmployeeUseCase {

    execute(dto: CreateEmployeeDto): Promise<EmployeeEntity>;
}


export class CreateEmployee implements CreateEmployeeUseCase {

    constructor( 
        private readonly repository: EmployeeRepository
    ) {}

    execute(dto: CreateEmployeeDto): Promise<EmployeeEntity> {
        return this.repository.create(dto)
    }
    
}