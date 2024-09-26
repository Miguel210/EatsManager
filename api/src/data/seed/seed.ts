import { prisma } from './../index'
import { seedData } from './data';


`{(async() => {
    await main()
})
}`
main().catch(e => {
    console.log(e)
    process.exit(1)
})
.finally(() => {
    prisma.$disconnect();     
});

async function main() {
    
    await prisma.profileOperation.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.operation.deleteMany(),
    await prisma.attendance.deleteMany(),
    await prisma.employee.deleteMany(),
    await prisma.supplier.deleteMany(),
    await prisma.person.deleteMany(),
    await prisma.profile.deleteMany(),
    await prisma.typeperson.deleteMany(),
    await prisma.gender.deleteMany(),
    await prisma.module.deleteMany(),
    await prisma.productType.deleteMany(),
    

    await prisma.module.createMany({
        data: seedData.module,
    });

    await prisma.operation.createMany({
        data: seedData.operation
    });

    await prisma.profile.createMany({
        data: seedData.profile
    });

    await prisma.profileOperation.createMany({
        data: seedData.profileoperation
    });

    await prisma.typeperson.createMany({
        data: seedData.typopersona
    });

    await prisma.gender.createMany({
        data: seedData.gender
    })
    await prisma.person.createMany({
        data: seedData.person
    });

    await prisma.employee.createMany({
        data: seedData.employee
    });

    await prisma.attendance.createMany({
        data: seedData.attendance
    });

    await prisma.supplier.createMany({
        data: seedData.supplier
    });

    await prisma.productType.createMany({
        data: seedData.typeProduct
    });

    await prisma.product.createMany({
        data: seedData.product
    })
}

const randomBetween0andX = (x: number) => {
    return Math.floor(Math.random() * x)
}

/*
    await prisma.operation.createMany({
        data: {
            id: seedData.modules[randomBetween0andX(modules.length)].id,
            moduleId: '1',
            name: '21',
            isActive: true
        }
    })
*/