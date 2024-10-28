import { CreateDocumentDto } from "../../dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../dtos/document/update-document.dto";
import { DocumentEntity } from '../../entities/document.entity';



export abstract class DocumentRepository {

    abstract create(dto: CreateDocumentDto): Promise<DocumentEntity>;

    abstract get(id: string): Promise<DocumentEntity>;
    abstract getAll(form: any): Promise<DocumentEntity[]>;
    abstract update(dto: UpdateDocumentDto): Promise<DocumentEntity>;
    abstract delete(id: string): Promise<DocumentEntity>;

}