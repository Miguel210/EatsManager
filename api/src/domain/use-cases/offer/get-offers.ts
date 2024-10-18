import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { OfferEntity } from "../../entities/offer.entity";
import { OfferRepository } from "../../repositories/offer/offer.repository";



export interface GetOffersUseCase {
    execute(): Promise <OfferEntity[]>;
}


export class GetOffers implements GetOffersUseCase {

    constructor(
        private readonly repository: OfferRepository
    ) {}

    execute(): Promise<OfferEntity[]> {
        return this.repository.getOffers()
    }
}