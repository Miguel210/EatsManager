import { prisma } from './../index'
import { seedData } from './data';


(async() => {
    await main()
})

 async function main() {

    const module = await prisma.module.createMany({
        data: seedData.module
    })
    .catch(error => console.log(error));
    

    
    console.log('SEEED');
    
}