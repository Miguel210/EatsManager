import { DocumentEntity } from "../../entities/document.entity";
import { DocumentRepository } from "../../repositories/document/document.repository";



export interface GetDocumentUseCase {
    execute(id: string): Promise<DocumentEntity>;
}


export class GetDocument implements GetDocumentUseCase {

    constructor(
        private readonly repository: DocumentRepository
    ) {}

    execute(id: string): Promise<DocumentEntity> {
        return this.repository.get(id)
    }
}