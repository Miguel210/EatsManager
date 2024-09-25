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

    console.log('SEEED');
    
}

const randomBetween0andX = (x: number) => {
    return Math.floor(Math.random() * x)
}

