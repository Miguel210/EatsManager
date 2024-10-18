import { OfferDatasource } from "../../../domain/datasource/offer/offer.datasoruce";
import { CreateOfferDto } from "../../../domain/dtos/offer/create-offer";
import { UpdateOfferDto } from "../../../domain/dtos/offer/update-offer";
import { OfferEntity } from "../../../domain/entities/offer.entity";
import { OfferRepository } from "../../../domain/repositories/offer/offer.repository";



export class OfferRepositoryImpl implements OfferRepository {

    constructor(
        private readonly datasoruce: OfferDatasource
    ) {}
    create(dto: CreateOfferDto): Promise<OfferEntity> {
        return this.datasoruce.create(dto);
    }
    getOfferbyId(id: string): Promise<OfferEntity> {
        return this.datasoruce.getOfferbyId(id);
    }
    getOffers(form: any): Promise<OfferEntity[]> {
        return this.datasoruce.getOffers(form);
    }
    update(dto: UpdateOfferDto): Promise<OfferEntity> {
        return this.datasoruce.update(dto);
    }
    delete(id: string): Promise<OfferEntity> {
        return this.datasoruce.delete(id);
    }
    
}