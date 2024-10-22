import { EmployeeDatasource } from "../../../domain/datasource/employee/employee.datasource";
import { CreateEmployeeDto } from "../../../domain/dtos/employee/create-employee.dto";
import { UpdateEmployeeDto } from "../../../domain/dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../../domain/entities/employee.entity";



export class EmployeeDatasourceImpl implements EmployeeDatasource {
    
    
    async create(dto: CreateEmployeeDto): Promise<EmployeeEntity> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<EmployeeEntity> {
        throw new Error("Method not implemented.");
    }
    async gets(form: any): Promise<EmployeeEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateEmployeeDto): Promise<EmployeeEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<EmployeeEntity> {
        throw new Error("Method not implemented.");
    }

}