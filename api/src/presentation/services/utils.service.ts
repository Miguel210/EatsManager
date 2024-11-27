import { prisma } from "../../data";




export class UtilService {

    public async autocomplete(table: string, field: string) {


        const data: any = await prisma.$queryRawUnsafe(`select id, \"${field}\" from ${table}`)
        .then(data => data)
        .catch(error => console.log(error))
    
    
        let dictionary: {[key: string]: string} = {};

        for (let index: number = 0; index < data.length; index++) {
            let id: string = data[index].id ;

            dictionary[id] = data[index][field]

        }
        
        return {
            data: data
        }
    }
}