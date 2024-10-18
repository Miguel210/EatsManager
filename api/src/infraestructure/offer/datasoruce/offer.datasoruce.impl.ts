import { OfferDatasource } from "../../../domain/datasource/offer/offer.datasoruce";
import { CreateOfferDto } from "../../../domain/dtos/offer/create-offer";
import { UpdateOfferDto } from "../../../domain/dtos/offer/update-offer";
import { OfferEntity } from "../../../domain/entities/offer.entity";





export class OfferDatasourceImpl implements OfferDatasource {
    async create(dto: CreateOfferDto): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }
    async getOfferbyId(id: string): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }
    async getOffers(): Promise<OfferEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateOfferDto): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<OfferEntity> {
        throw new Error("Method not implemented.");
    }

}