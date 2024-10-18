import { CreateOfferDto } from "../../dtos/offer/create-offer";
import { UpdateOfferDto } from "../../dtos/offer/update-offer";
import { OfferEntity } from "../../entities/offer.entity";
import { OfferRepository } from "../../repositories/offer/offer.repository";



export interface UpdateOfferUseCase {
    execute(dto: UpdateOfferDto): Promise <OfferEntity>;
}


export class UpdateOffer implements UpdateOfferUseCase {

    constructor(
        private readonly repository: OfferRepository
    ) {}

    execute(dto: UpdateOfferDto): Promise<OfferEntity> {
        return this.repository.update(dto)
    }
}