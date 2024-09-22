import { prisma } from './../index'
import { seedData } from './data';


(async() => {
    await main();
})

 async function main() {
    const modules = prisma.module.createMany()
}