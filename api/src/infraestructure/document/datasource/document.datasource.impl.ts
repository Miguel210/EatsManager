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
                isActive: dto.isActive,
                folio: dto.folio
            }
        })
        
        if( !document ) throw `Document with data ${dto} not found`;

        return DocumentEntity.fromObject(document);
    }
    async get(id: string): Promise<DocumentEntity> {

        const document = await prisma.document.findFirst({
            where: {
                id: id,
                isDelete: false
            }
        });
        
        if( !document ) throw `Document with id ${id} not found`;

        return DocumentEntity.fromObject(document);
    }
    async getAll(form: any): Promise<DocumentEntity[]> {

        const document = await prisma.document.findMany({
            where: {
                isActive: form.isActive,
                isDelete: false
            }
        })
        if( !document ) throw `Document with form ${form} not found`;

        return document.map(document => DocumentEntity.fromObject(document));
    }
    async update(dto: UpdateDocumentDto): Promise<DocumentEntity> {
        await this.get(dto.id);
        
        const document = await prisma.document.update({
            where: {
                id: dto.id,
                isDelete: false
            },
            data: {
                description: dto.description,
                isActive: dto.isActive,
                folio: dto.folio
            }
        })

        if( !document ) throw `Document with id ${dto.id} not found`;

        return DocumentEntity.fromObject(document);

    }
    async delete(id: string): Promise<DocumentEntity> {
        console.log(id);
        
        await this.get(id);
        const document = await prisma.document.update({
            where: {
                id: id
            },
            data: {
                isDelete: true,
                deleteAt: new Date()
            }
        })

        if( !document ) throw `Document with id ${id} not found`;

        return DocumentEntity.fromObject(document);

    }

}