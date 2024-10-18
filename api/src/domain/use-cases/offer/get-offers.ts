import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { OfferEntity } from "../../entities/offer.entity";
import { OfferRepository } from "../../repositories/offer/offer.repository";



export interface GetOffersUseCase {
    execute(form: any): Promise <OfferEntity[]>;
}


export class GetOffers implements GetOffersUseCase {

    constructor(
        private readonly repository: OfferRepository
    ) {}

    execute(form: any): Promise<OfferEntity[]> {
        return this.repository.getOffers(form)
    }
}