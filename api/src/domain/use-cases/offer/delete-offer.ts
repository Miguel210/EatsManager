import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { OfferEntity } from "../../entities/offer.entity";
import { OfferRepository } from "../../repositories/offer/offer.repository";



export interface DeleteOfferUseCase {
    execute(id: string): Promise <OfferEntity>;
}


export class DeleteOffer implements DeleteOfferUseCase {

    constructor(
        private readonly repository: OfferRepository
    ) {}

    execute(id: string): Promise<OfferEntity> {
        return this.repository.delete(id)
    }
}