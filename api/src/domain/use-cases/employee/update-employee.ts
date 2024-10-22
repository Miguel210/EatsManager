import { UpdateEmployeeDto } from "../../dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../entities/employee.entity";
import { EmployeeRepository } from "../../repositories/employee/employee.repository";




export interface UpdateEmployeeUseCase {

    execute(dto: UpdateEmployeeDto): Promise<EmployeeEntity>;
}


export class UpdateEmployee implements UpdateEmployeeUseCase {

    constructor( 
        private readonly repository: EmployeeRepository
    ) {}

    execute(dto: UpdateEmployeeDto): Promise<EmployeeEntity> {
        return this.repository.update(dto)
    }
    
}