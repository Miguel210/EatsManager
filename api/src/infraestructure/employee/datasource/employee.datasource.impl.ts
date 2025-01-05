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
                person: {
                    create: {
                        id: Uuid.uuid(),
                        genderId: dto.person.genderId,
                        profileId: dto.person.profileId,
                        typePersonId: dto.person.typePersonId,
                        fullname: dto.person.fullname,
                        password: dto.person.password,
                        username: dto.person.username
                    }
                },
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
        
        console.log(id);
        const employee = await prisma.employee.findFirst({
            where: {
                id: id,
                isDelete: false
            },
            select: {
                id: true,
                personId: true,
                isActive: true,
                person: {
                    select: {
                        fullname: true,
                        genderId: true,
                        typePersonId: true,
                        profileId: true,
                    }                    
                },
                hireDate: true,
                input: true,
                output: true,
                salary: true
            }
        })

        console.log(employee);
        

        if( !employee ) throw  `Employee with id ${id} not found`;
        
        return EmployeeEntity.fromObject(employee);
    }
    async gets(form: any): Promise<EmployeeEntity[]> {
        
        const employees = await prisma.employee.findMany({
            where: {
                isActive: true ,
                isDelete: false,
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
                personId: true,
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
        console.log(form);
        
        if( ! employees ) throw `Employee with data ${form} not founds`;
        
        return employees.map(employee => EmployeeEntity.fromObject(employee))
    }
    async update(dto: UpdateEmployeeDto): Promise<EmployeeEntity> {
        console.log('kkkkkkkkkkkkkkk');

        console.log(dto.person);
        console.log('kkkkkkkkkkk');
        const employee = await prisma.employee.update({
            where: {
                id: dto.id
            },
            data: {
                input: new Date(dto.input),
                output: new Date(dto.output),
                salary: dto.salary,
                isActive: dto.isActive,
                person: {
                    update: {
                        genderId: dto.person.genderId,
                        profileId: dto.person.profileId,
                        typePersonId: dto.person.typePersonId,
                        fullname: dto.person.fullname
                    }
                }
            }
        })

        console.log(employee);
        
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