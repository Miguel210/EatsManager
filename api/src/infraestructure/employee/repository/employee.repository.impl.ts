import { EmployeeDatasource } from "../../../domain/datasource/employee/employee.datasource";
import { CreateEmployeeDto } from "../../../domain/dtos/employee/create-employee.dto";
import { UpdateEmployeeDto } from "../../../domain/dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../../domain/entities/employee.entity";
import { EmployeeRepository } from "../../../domain/repositories/employee/employee.repository";




export class EmployeeRespositoryImpl implements EmployeeRepository {
    
    constructor(
        private readonly datasoruce: EmployeeDatasource
    ) {}
    create(dto: CreateEmployeeDto): Promise<EmployeeEntity> {
        return this.datasoruce.create(dto);
    }
    getById(id: string): Promise<EmployeeEntity> {
        return this.datasoruce.getById(id);
    }
    gets(form: any): Promise<EmployeeEntity[]> {
        return this.datasoruce.gets(form);
    }
    update(dto: UpdateEmployeeDto): Promise<EmployeeEntity> {
        return this.datasoruce.update(dto);
    }
    delete(id: string): Promise<EmployeeEntity> {
        return this.datasoruce.delete(id);
    }

}