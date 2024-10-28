import { CreateDocumentDto } from "../../domain/dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../domain/dtos/document/update-document.dto";
import { DocuemntDatasourceImpl } from "../../infraestructure/document/datasource/document.datasource.impl";



export class DocumentService {

    constructor(
        readonly repository: DocuemntDatasourceImpl
    ) {}

    public async create(dto: CreateDocumentDto){

    }

    public async get(id: string) {

    }

    public async getAll(form: any) {

    }

    public async update(dto: UpdateDocumentDto) {

    }

    public async delete(id: string) {

    }
}