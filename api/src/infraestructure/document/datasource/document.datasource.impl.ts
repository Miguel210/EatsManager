import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { DocumentDatasource } from "../../../domain/datasource/document/document.datasource";
import { CreateDocumentDto } from "../../../domain/dtos/document/create-document.dto";
import { UpdateDocumentDto } from "../../../domain/dtos/document/update-document.dto";
import { DocumentEntity } from "../../../domain/entities/document.entity";



export class DocuemntDatasourceImpl  implements DocumentDatasource {

    async create(dto: CreateDocumentDto): Promise<DocumentEntity> {

        const document = await prisma.document.create({
            data: {
                id: Uuid.uuid(),
                description: dto.description,
                isActive: dto.isActive
            }
        })
        
        if( !document ) throw `Evaluation with data ${dto} not found`;

        return DocumentEntity.fromObject(document);
    }
    get(id: string): Promise<DocumentEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<DocumentEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateDocumentDto): Promise<DocumentEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<DocumentEntity> {
        throw new Error("Method not implemented.");
    }

}