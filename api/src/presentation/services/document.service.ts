import { error } from "console";
import { CreateDocumentDto } from "../../domain/dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../domain/dtos/document/update-document.dto";
import { CreateDocument } from "../../domain/use-cases/document/create-document";
import { DocuemntDatasourceImpl } from "../../infraestructure/document/datasource/document.datasource.impl";
import { GetDocument } from "../../domain/use-cases/document/get-document";



export class DocumentService {

    constructor(
        readonly repository: DocuemntDatasourceImpl
    ) {}

    public async create(dto: CreateDocumentDto){

        const document = await new CreateDocument( this.repository ).execute(dto)
        .then(doc => doc)
        .catch(error => console.log({error}))

        return {
            data: {
                document
            }
        }
    }

    public async get(id: string) {
        
        const document = await new GetDocument( this.repository ).execute(id)
        .then(doc => doc)
        .catch(error => console.log({error}))

        return {
            data: {
                document
            }
        }
    }

    public async getAll(form: any) {

    }

    public async update(dto: UpdateDocumentDto) {

    }

    public async delete(id: string) {

    }
}