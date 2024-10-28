import { CreateDocumentDto } from "../../dtos/document/create-document.dto";
import { DocumentEntity } from "../../entities/document.entity";
import { DocumentRepository } from "../../repositories/document/document.repository";



export interface CreateDocumentUseCase {
    execute(dto: CreateDocumentDto): Promise<DocumentEntity>;
}


export class CreateDocument implements CreateDocumentUseCase {

    constructor(
        private readonly repository: DocumentRepository
    ) {}

    execute(dto: CreateDocumentDto): Promise<DocumentEntity> {
        return this.repository.create(dto)
    }
}