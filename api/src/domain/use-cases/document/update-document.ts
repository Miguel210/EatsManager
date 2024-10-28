import { CreateDocumentDto } from "../../dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../dtos/document/update-document.dto";
import { DocumentEntity } from "../../entities/document.entity";
import { DocumentRepository } from "../../repositories/document/document.repository";



export interface UpdateDocumentUseCase {
    execute(dto: UpdateDocumentDto): Promise<DocumentEntity>;
}


export class UpdateDocument implements UpdateDocumentUseCase {

    constructor(
        private readonly repository: DocumentRepository
    ) {}

    execute(dto: UpdateDocumentDto): Promise<DocumentEntity> {
        return this.repository.update(dto)
    }
}