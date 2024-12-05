import { CreateDocumentDto } from "../../domain/dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../domain/dtos/document/update-document.dto";
import { CreateDocument } from "../../domain/use-cases/document/create-document";
import { DocuemntDatasourceImpl } from "../../infraestructure/document/datasource/document.datasource.impl";
import { GetDocument } from "../../domain/use-cases/document/get-document";
import { GetAllDocument } from "../../domain/use-cases/document/getAll-document";
import { UpdateDocument } from "../../domain/use-cases/document/update-document";
import { DeleteDocument } from "../../domain/use-cases/document/delete-document";
import { CustomError } from "../../domain";



export class DocumentService {

    constructor(
        readonly repository: DocuemntDatasourceImpl
    ) {}

    public async create(dto: CreateDocumentDto){

        const document = await new CreateDocument( this.repository ).execute(dto)
        .then(doc => doc)
        .catch(error => console.log({error}))


        if(!document) throw CustomError.badRequest('Error data');


        return {
            data: 
                document
            
        }
    }

    public async get(id: string) {
        
        const document = await new GetDocument( this.repository ).execute(id)
        .then(doc => doc)
        .catch(error => console.log({error}))

        if(!document) throw CustomError.badRequest('Error data');

        return {
            data: 
                document
            
        }
    }

    public async getAll(form: any) {

        const document = await new GetAllDocument( this.repository ).execute(form)
        .then(doc => doc)
        .catch(error => console.log({error}))

        if(!document) throw CustomError.badRequest('Error data');

        return {
            data: 
                document
            
        }
    }

    public async update(dto: UpdateDocumentDto) {

        const document = await new UpdateDocument( this.repository ).execute(dto)
        .then(doc => doc)
        .catch(error => console.log({error}))

        if(!document) throw CustomError.badRequest('Error data');

        return {
            data: 
                document
            
        }
    }

    public async delete(id: string) {
        
        const document = await new DeleteDocument( this.repository ).execute(id)
        .then(doc => doc)
        .catch(error => console.log({error}))

        if(!document) throw CustomError.badRequest('Error data');

        return {
            data: 
                document
            
        }
    }
}