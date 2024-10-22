import { CreateEmployeeDto } from "../../dtos/employee/create-employee.dto";
import { UpdateEmployeeDto } from "../../dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../entities/employee.entity";



export abstract class EmployeeRepository {
 
   abstract create(dto: CreateEmployeeDto): Promise<EmployeeEntity>;

   abstract GetById(id: string): Promise<EmployeeEntity>;
   abstract Gets(form: any): Promise<EmployeeEntity[]>;
   abstract Update(dto: UpdateEmployeeDto): Promise<EmployeeEntity>;
   abstract Delete(id: string): Promise<EmployeeEntity>;

}