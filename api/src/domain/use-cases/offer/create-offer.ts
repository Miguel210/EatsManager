import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { OfferEntity } from "../../entities/offer.entity";
import { OfferRepository } from "../../repositories/offer/offer.repository";



export interface CreateOfferUseCase {
    execute(dto: CreateOfferDto): Promise <OfferEntity>;
}


export class CreateOffer implements CreateOfferUseCase {

    constructor(
        private readonly repository: OfferRepository
    ) {}

    execute(dto: CreateOfferDto): Promise<OfferEntity> {
        return this.repository.create(dto)
    }
}