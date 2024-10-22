import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { EmployeeDatasource } from "../../../domain/datasource/employee/employee.datasource";
import { CreateEmployeeDto } from "../../../domain/dtos/employee/create-employee.dto";
import { UpdateEmployeeDto } from "../../../domain/dtos/employee/update-employee.dto";
import { EmployeeEntity } from "../../../domain/entities/employee.entity";



export class EmployeeDatasourceImpl implements EmployeeDatasource {
    
    
    async create(dto: CreateEmployeeDto): Promise<EmployeeEntity> {
        
        const employee = await prisma.employee.create({
            data: {
                id: Uuid.uuid(),
                personId: dto.personId,
                hireDate: new Date(),
                input: new Date(dto.input),
                output: new Date(dto.output),
                salary: dto.salary,
                isActive: dto.isActive
            }
        });

        if( !employee ) throw  `Employee with data ${dto} not found`;
        
        return EmployeeEntity.fromObject(employee);
    }
    async getById(id: string): Promise<EmployeeEntity> {

        const employee = await prisma.employee.findFirst({
            where: {
                id: id,
                isDelete: false
            }
        })

        if( !employee ) throw  `Employee with id ${id} not found`;
        
        return EmployeeEntity.fromObject(employee);
    }
    async gets(form: any): Promise<EmployeeEntity[]> {
        
        const employees = await prisma.employee.findMany({
            where: {
                isActive: form.isActive ,
                personId: {
                    in: form.personId || undefined
                },
                person: {
                    profileId: {
                        in: form.profileId || undefined
                    }
                }
            },
            select: {
                id: true,
                person: {
                    select: {
                        fullname: true,
                        profile: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                hireDate: true,
                input: true,
                output: true,
                salary: true,
                isActive: true
            }
        })

        if( ! employees ) throw `Employee with data ${form} not founds`;

        return employees.map(employee => EmployeeEntity.fromObject(employee))
    }
    async update(dto: UpdateEmployeeDto): Promise<EmployeeEntity> {

        await this.getById(dto.id);

        const employee = await prisma.employee.update({
            where: {
                id: dto.id
            },
            data: {
                input: new Date(dto.input),
                output: new Date(dto.output),
                salary: dto.salary,
                isActive: dto.isActive
            }
        })
        if( ! employee ) throw `Employee with id ${dto.id} not found`;

        return EmployeeEntity.fromObject(employee)

    }
    async delete(id: string): Promise<EmployeeEntity> {
        
        await this.getById(id);

        const employee = await prisma.employee.update({
            where: {
                id: id
            },
            data: {
                isDelete: true,
                deleteAt: new Date()
            }
        });
        if( ! employee ) throw `Employee with id ${id} not found`;

        return EmployeeEntity.fromObject(employee)
    }

}