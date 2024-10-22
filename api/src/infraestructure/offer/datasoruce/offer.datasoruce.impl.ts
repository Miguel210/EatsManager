import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { OfferDatasource } from "../../../domain/datasource/offer/offer.datasoruce";
import { CreateOfferDto } from "../../../domain/dtos/offer/create-offer";
import { UpdateOfferDto } from "../../../domain/dtos/offer/update-offer";
import { OfferEntity } from "../../../domain/entities/offer.entity";





export class OfferDatasourceImpl implements OfferDatasource {
    async create(dto: CreateOfferDto): Promise<OfferEntity> {
        
        const promotion = await prisma.promotion.create({
            data: {
                id: Uuid.uuid(),
                productId: dto.productId,
                price: dto.price,
                from: dto.from,
                until: dto.until,
                isActive: dto.isActive
            }
        })

        if( !promotion ) throw `Promotion with data ${dto} not found`;

        return OfferEntity.fromObject(promotion);
    }
    async getOfferbyId(id: string): Promise<OfferEntity> {
        
        const promotion = await prisma.promotion.findFirst({
            where: {
                id: id,
                isDelete: false
            },
            select: {
                id: true,
                product: {
                    select: {
                        description: true
                    }
                },
                price: true,
                from: true,
                until: true,
                isActive: true
            }
        });
        
        if( !promotion ) throw `Promotion with id ${id} not found`;

        return OfferEntity.fromObject(promotion);
    }
    async getOffers(form: any): Promise<OfferEntity[]> {
        let from: any = form.from;
        if( !from ){
            from = undefined;
        } else {
            from = new Date(from)
        }
        
        const promotion = await prisma.promotion.findMany({
            where: {
                isDelete: false,
                productId: {
                    in: form.productId || undefined,
                },
                from: from,
                isActive: form.isActive
            },

            select: {
                id: true,
                product: {
                    select:{
                        id: true,
                        description: true
                    }
                },
                price: true,
                from: true,
                until: true,
                isActive: true
            }
        })

        if( !promotion ) throw `Promotion with data ${form} not found`;
        
        return promotion.map(promotion => OfferEntity.fromObject(promotion));
    }
    async update(dto: UpdateOfferDto): Promise<OfferEntity> {

        await this.getOfferbyId(dto.id);
        
        const promotion = await prisma.promotion.update({
            where: {
                id: dto.id
            },
            data: {
                productId: dto.productId,
                price: dto.price,
                from: new Date(dto.from),
                until: new Date(dto.until),
                isActive: dto.isActive
            }
        })
        
        if( !promotion ) throw `Promotion with data ${dto} not found`;
        
        return OfferEntity.fromObject(promotion);
    }
    async delete(id: string): Promise<OfferEntity> {

        await this.getOfferbyId(id);

        const promotion = await prisma.promotion.update({
            where: {
                id: id
            },
            data: {
                isDelete: true,
                deleteAt: new Date()
            }
        })

        if( !promotion ) throw `Promotion with id ${id} not found`;
        
        return OfferEntity.fromObject(promotion)
    }

}