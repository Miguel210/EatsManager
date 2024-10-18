import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { UpdateOfferDto } from "../../dtos/offer/update-offer";
import { OfferEntity } from "../../entities/offer.entity";



export abstract class OfferDatasource {
    abstract create(dto: CreateOfferDto): Promise <OfferEntity>;

    abstract getOfferbyId(id: string): Promise <OfferEntity>;
    abstract getOffers(form: any): Promise <OfferEntity[]>;
    abstract update(dto: UpdateOfferDto): Promise <OfferEntity>;
    abstract delete(id: string): Promise <OfferEntity>;
}