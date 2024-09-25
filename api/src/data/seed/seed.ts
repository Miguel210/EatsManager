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
    

    const modules = await prisma.module.createMany({
        data: seedData.module,
    });

    let data1 = await prisma.module.findMany();
    
    const operationsData = seedData.operation;
    for(let operation of operationsData){
        await prisma.operation.create({
            data: {
                id: operation.id,
                name: operation.name,
                moduleId: data1[randomBetween0andX(modules.count)].id,
                isActive: true
            }
        })
    }

    const profiles = await prisma.profile.createMany({
        data: seedData.profile
    })

    const data2 = await prisma.profile.findMany();
    const data3 = await prisma.operation.findMany();
    for(let profileOpr of seedData.profileoperation){
        await prisma.profileOperation.create({
            data: {
                id: profileOpr.id,
                profileId: data2[randomBetween0andX(profiles.count)].id,
                operationId: data3[randomBetween0andX(10)].id,
                createAt: profileOpr.createAt,
                isActive: profileOpr.isActive

            }
        })
    }
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