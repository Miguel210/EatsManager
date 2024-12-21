import { Response, Request} from 'express'
import { CustomError } from "../../domain";
import { MovementService } from "../services/movement.service";
import { CreateMovementDto } from '../../domain/dtos/movement/create-movement.dto';
import { UpdateMovementDto } from '../../domain/dtos/movement/update-movement.dto';
import { UpdateMovementDetailDto } from '../../domain/dtos/movementDetail/update-movementDetail';
import { UpdateSupplierOrderDto } from '../../domain/dtos/supplierOrder/update-supplierOrder.dto';
import { CreateSupplierOrderDto } from '../../domain/dtos/supplierOrder/create-supplierOrder.dto';
import { CreateMovementDetailDto } from '../../domain/dtos/movementDetail/create-movementDetail';




export class MovementController {

    constructor(
        private readonly service: MovementService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    creatre = (req: Request, res: Response) => {
        const ElaborateId = req.body._meta.userId;

        console.log('1****************************');
        console.log(req.body.data);
        console.log('1****************************');     
        const [error, dto] = CreateMovementDto.create({...req.body.data, personId: req.body.data.personId.id, elaborateId: ElaborateId});
                
        if( error ) throw res.status(400).json({error});


        
        
        const   movementDetailDto = req.body.data.movementDetail.map( (m: { [key: string]: any }) => {
            const [error, dto] =CreateMovementDetailDto.create({productId: m.product.id, ...m})
            return dto    
        })
        
        
        
        const [error2, supplierOrderDto] = CreateSupplierOrderDto.create({...req.body.data.supplierOrders[0], status: req.body.data.status})
        console.log('2****************************');
        console.log(supplierOrderDto);
        console.log('2****************************');     

    
        this.service.create({...dto!, MovementDetailDto: movementDetailDto, SupplierOrderDto: supplierOrderDto!})
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    getById = (req: Request, res: Response) => {
        
        
        const id = req.body.id;
        if( !id ) throw res.json(400).json({error: 'id is requerid'});

        this.service.getById(id)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    getAll = (req: Request, res: Response) => {
        console.log(req.query);
        
        let date: Date | any;
        date = new Date(req.body.date)
        if( !req.body.date) {
            date = undefined;
        }
        const documentId = req.query.documentId ? [req.query.documentId] : '';
        const form = {
            personId: req.body.personId,
            documentId:  documentId ,
            elaborateId: req.body.elaborateId,
            status: req.body.status,
            isActive: req.body.isActive,
            date: date
        }

        this.service.getAll(form)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    update = (req: Request, res: Response) => {
       const id = req.body.id;
       const data = req.body.supplier.data;
       
        const [error, dto ] = UpdateMovementDto.create({id,...data})
        if( error ) throw res.json(400).json({error});
        // console.log(dto);
        
        
        const dto2 = data.movementDetail.map( (m: { [key: string]: any }) => UpdateMovementDetailDto.create({...m   , productId: m.product.id}))
       
        const orderDto = UpdateSupplierOrderDto.create(data.supplierOrders[0])
        console.log(dto2);
        
        this.service.update({...dto!, ...dto2,...orderDto})
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))

    }
}