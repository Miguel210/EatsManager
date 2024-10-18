import { CreateOfferDto } from "../../domain/dtos/offer/create-offer";
import { UpdateOfferDto } from "../../domain/dtos/offer/update-offer";
import { OfferRepositoryImpl } from "../../infraestructure/offer/repository/offer.repository.impl";




export class OfferService {

    constructor(
        public readonly repository: OfferRepositoryImpl
    ) {}

    public async create(dto: CreateOfferDto) {

        return {
            data: {
                //offer
            }
        }
    }

    public async getById(id: string) {

        return {
            data: {
                //offer
            }
        }
    }

    public async getAll(form: any) {

        return {
            data: {
                //offer
            }
        }
    }

    public async update(dto: UpdateOfferDto) {

        return {
            data: {
                //offer
            }
        }
    }

    public async delete(id: string) {

        return {
            data: {
                //offer
            }
        }
    }
    

}