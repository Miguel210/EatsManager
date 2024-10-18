import { error } from "console";
import { CreateOfferDto } from "../../domain/dtos/offer/create-offer";
import { UpdateOfferDto } from "../../domain/dtos/offer/update-offer";
import { CreateOffer } from "../../domain/use-cases/offer/create-offer";
import { OfferRepositoryImpl } from "../../infraestructure/offer/repository/offer.repository.impl";
import { GetOffer } from "../../domain/use-cases/offer/get-offer";
import { GetOffers } from "../../domain/use-cases/offer/get-offers";
import { UpdateOffer } from "../../domain/use-cases/offer/update-offer";
import { DeleteOffer } from "../../domain/use-cases/offer/delete-offer";




export class OfferService {

    constructor(
        public readonly repository: OfferRepositoryImpl
    ) {}

    public async create(dto: CreateOfferDto) {

        const promotion = await new CreateOffer( this.repository ).execute(dto)
        .then( promotion => promotion)
        .catch(error => console.log(error)
        );

        return {
            data: {
                promotion
            }
        }
    }

    public async getById(id: string) {

        const promotion = await new GetOffer( this.repository ).execute(id)
            .then(promotion => promotion)
            .catch(error => console.log({error})
        );

        return {
            data: {
                promotion
            }
        }
    }

    public async getAll(form: any) {

        const promotion = await new GetOffers( this.repository ).execute(form)
        .then(promotion => promotion)
        .catch(error => console.log({error})
    );

        return {
            data: {
                promotion
            }
        }
    }

    public async update(dto: UpdateOfferDto) {
    
        const promotion = await new UpdateOffer( this.repository ).execute(dto)
            .then(promotion => promotion)
            .catch(error => console.log({error})
        );

        return {
            data: {
                promotion
            }
        }
    }

    public async delete(id: string) {
       
        const promotion = await new DeleteOffer( this.repository ).execute(id)
            .then(promotion => promotion)
            .catch(error => console.log({error})
        );
        return {
            data: {
                promotion
            }
        }
    }
    

}