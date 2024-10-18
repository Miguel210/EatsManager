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

        if( !promotion ) throw `Garrison with data ${promotion} not found`;

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
        console.log(promotion);
        
        if( !promotion ) throw `Garrison with data ${promotion} not found`;

        return OfferEntity.fromObject(promotion);
    }
    async getOffers(form: any): Promise<OfferEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateOfferDto): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }

}