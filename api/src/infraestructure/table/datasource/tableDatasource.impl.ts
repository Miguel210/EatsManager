import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { TableDatasoruce } from "../../../domain/datasource/table/table.datasource";
import { CreateTableDto } from "../../../domain/dtos/table/create-table.dto";
import { UpdateTableDto } from "../../../domain/dtos/table/update-table.dto";
import { TableEntity } from "../../../domain/entities/table.entity";
import { ClientOrderDatasourceImpl } from "../../clientOrder/datasource/clientOrder.datasource.impl";
import { MovementDatasourceImpl } from "../../movement/datasource/movement.datasource.impl";

export class TableDatasourceImpl implements TableDatasoruce {

  async finalizateclientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
    const clientOrderImpl = new ClientOrderDatasourceImpl();

    if (dto.status === "Disponible/Vacia") {
      this.update(dto);

      dto.clientOrder.map(async (order) => {
            
          clientOrderImpl.update({
            id: order.id,
            paymentDate: order.paymentDate,
            tableId: order.tableId,
            status: 'Finalizado',
            isActive: order.isActive,
            
            CreateMovementDto: order.CreateMovementDto
           });
      });
    }
    
    return TableEntity.fromObject(dto);


  }

  async PayclientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
    const clientOrderImpl = new ClientOrderDatasourceImpl();

    dto.clientOrder.map(async (order) => {
      if (order.status === "Pagado") {
        clientOrderImpl.update({ ...order });
      }
    });

    return TableEntity.fromObject(dto);
  }

  async clientOrderDataTable(dto: UpdateTableDto): Promise<TableEntity> {
    const movement = new MovementDatasourceImpl();
    // console.log('---------------------------------------------') ;

    // console.log(dto.clientOrder);
    // dto.clientOrder.map(order => console.log(order.movement));
    ``;

    // console.log('---------------------------------------------') ;
    // console.log(dto.clientOrder);

    // const clientOrder = new ClientOrderDatasourceImpl();

    // console.log('---------------------------------------------') ;

    dto.clientOrder.map(async (order) => {
      // console.log(order.CreateMovementDto.MovementDetailDto)
      if (order.CreateMovementDto.personId.startsWith("CODESECRET-")) {
        const separate = order.CreateMovementDto.personId.slice(
          "CODESECRET-".length
        );
        const person = await prisma.person.create({
          data: {
            id: Uuid.uuid(),
            genderId: "a674eeeb-cd0f-4794-a35b-e321b33344a0",
            profileId: "17dc3357-85b3-403d-840d-fed63b1c5171",
            typePersonId: "35c890e4-d191-4f93-97de-d3ea6984423f",
            fullname: separate,
            username: "",
            password: "",
            isActive: true,
          },
        });
        order = {
          ...order,
          CreateMovementDto: {
            ...order.CreateMovementDto,
            personId: person.id,
          },
        };
      }

      await movement.create({
        ...order.CreateMovementDto,
        elaborateId: dto.elaborateId,
      });
    });

    const table = this.update({
      id: dto.id,
      description: dto.description,
      status: dto.status,
      mainTable: dto.mainTable,
      isActive: dto.isActive,
      clientOrder: dto.clientOrder,
      elaborateId: dto.elaborateId,
    });
    console.log("--------------------CODESECRET-------------------------");
    console.log("TERMINADO");
    console.log("--------------------CODESECRET-------------------------");

    return TableEntity.fromObject(dto);
  }

  async create(dto: CreateTableDto): Promise<TableEntity> {
    const table = await prisma.table.create({
      data: {
        id: Uuid.uuid(),
        description: dto.description,
        status: dto.status,
        mainTableId: dto.mainTable,
      },
    });
    if (!table) throw `Table no created`;
    return TableEntity.fromObject(table);
  }
  async get(id: string): Promise<TableEntity> {
    const table = await prisma.table.findFirst({
      where: {
        id: id,
        isDelete: false,
      },
    });
    if (!table) throw `Table not found`;
    return TableEntity.fromObject(table);
  }

  async getDataTable(id: string): Promise<TableEntity> {
    const table = await prisma.table.findFirst({
      where: {
        id: id,
        isDelete: false,
        
      },
      select: {
        id: true,
        description: true,
        status: true,
        mainTableId: true,
        isActive: true,
        clientOrder: {
            where: { NOT: { status: 'Finalizado' } },
          select: {
            id: true,
            status: true,
            paymentDate: true,
            tableId: true,
            invoiceFolio: true,
            movement: {
              select: {
                date: true,
                personId: true,
                id: true,
                amount: true,
                status: true,
                referenceId: true,
                person: {
                  select: {
                    id: true,
                    fullname: true,
                  },
                },
                documentId: true,
                elaborateId: true,
                movementDetail: {
                  select: {
                    movementId: true,
                    productId: true,
                    quantity: true,

                    product: {
                      select: {
                        id: true,
                        description: true,
                        price: true,
                        existence: true,
                      },
                    },
                    priceUnit: true,
                    subTotal: true,
                    tax: true,
                    total: true,
                    costUnit: true,
                    promotionId: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    console.log(id);
    console.log("*****");
    console.log(table);

    if (!table) throw `Table not found`;
    return TableEntity.fromObject(table);
  }
  async getAll(form: any): Promise<TableEntity[]> {
    const table = await prisma.table.findMany({
      where: {
        isDelete: false,
      },
    });
    console.log("table");

    if (!table) throw `Table no created`;

    return table.map((e) => TableEntity.fromObject(e));
  }
  async update(dto: UpdateTableDto): Promise<TableEntity> {
    console.log("Esta es mi mesa" + dto);
    await this.get(dto.id);

    const table = await prisma.table.update({
      where: {
        id: dto.id,
      },
      data: {
        description: dto.description,
        status: dto.status,
        mainTableId: dto.mainTable,
        isActive: dto.isActive,
      },
    });
    if (!table) throw `Table no created`;
    return TableEntity.fromObject(table);
  }
  async delete(id: string): Promise<TableEntity> {
    await this.get(id);

    const table = await prisma.table.update({
      where: {
        id: id,
      },
      data: {
        isDelete: true,
        deleteAt: new Date(),
      },
    });
    if (!table) throw `Table no created`;
    return TableEntity.fromObject(table);
  }
}
