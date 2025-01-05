import { prisma } from "../../data";




export class UtilService {

    public async autocomplete(table: string, field: string) {

        console.log(table);

        const data: any = await prisma.$queryRawUnsafe(`select id, \"${field}\" from ${table}`)
        .then(data => data)
        .catch(error => console.log(error))
    
    
        let dictionary = [];

        for (let index: number = 0; index < data.length; index++) {
            let id: string = data[index].id ;

            dictionary.push( data[index][field])

        }
        
        return {
            data: data
        }
    }

    public async productOrder() {

        const data = await prisma.$queryRawUnsafe(`select id, description, price from product`).then(data => data).catch(error => console.log(error))


        return {
            data: data
        }
    }
}