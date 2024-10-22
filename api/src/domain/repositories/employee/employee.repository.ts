import { CreateEmployeeDto } from "../../dtos/employee/create-employee.dto";
import { UpdateEmployeeDto } from "../../dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../entities/employee.entity";



export abstract class EmployeeRepository {
 
   abstract create(dto: CreateEmployeeDto): Promise<EmployeeEntity>;

   abstract getById(id: string): Promise<EmployeeEntity>;
   abstract gets(form: any): Promise<EmployeeEntity[]>;
   abstract update(dto: UpdateEmployeeDto): Promise<EmployeeEntity>;
   abstract delete(id: string): Promise<EmployeeEntity>;

}