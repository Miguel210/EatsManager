import { DocumentDatasource } from "../../../domain/datasource/document/document.datasource";
import { CreateDocumentDto } from "../../../domain/dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../../domain/dtos/document/update-document.dto";
import { DocumentEntity } from "../../../domain/entities/document.entity";
import { DocumentRepository } from "../../../domain/repositories/document/document.repository";



export class DocumentRepositoryImpl implements DocumentRepository {

    constructor(
        private readonly datasource: DocumentDatasource
    ) {}
    create(dto: CreateDocumentDto): Promise<DocumentEntity> {
        return this.datasource.create(dto);
    }
    get(id: string): Promise<DocumentEntity> {
        return this.datasource.get(id);
    }
    getAll(form: any): Promise<DocumentEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateDocumentDto): Promise<DocumentEntity> {
        return this.datasource.update(dto);
    }
    delete(id: string): Promise<DocumentEntity> {
        return this.datasource.delete(id);
    }

}