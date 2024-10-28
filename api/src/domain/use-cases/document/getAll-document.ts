import { CreateDocumentDto } from "../../dtos/document/create-document.dto";
import { DocumentEntity } from "../../entities/document.entity";
import { DocumentRepository } from "../../repositories/document/document.repository";



export interface getAllDocumentUseCase {
    execute(form: any): Promise<DocumentEntity[]>;
}


export class GetAllDocument implements getAllDocumentUseCase {

    constructor(
        private readonly repository: DocumentRepository
    ) {}

    execute(form: any): Promise<DocumentEntity[]> {
        return this.repository.getAll(form)
    }
}