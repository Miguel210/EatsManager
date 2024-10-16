import { CategoryService } from "../services/category.service";
import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";




export class CategoryController {

    constructor(
        private readonly service: CategoryService
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
        if( error ) return res.status(400).json({error});

        this.service.create(createCategoryDto!)
        .then(category => res.json(category))
        .catch(error => this.handleError(error, res));

        
    }

    getAllc = (req: Request, res: Response ) => {

        const form = {
            categoryName: req.body.categoryName,
            isActive: req.body.isActive
        }

        this.service.getAll(form)
        .then(categories => res.json(categories))
        .catch(error => this.handleError(error, res))
    }

    getCategory = (req: Request, res: Response) => {

        const id = req.body.id

        if( !id ) this.handleError('No id', res);

        this.service.get(id)
        .then(category => res.json(category))
        .catch(error => this.handleError(error, res));

    }

}