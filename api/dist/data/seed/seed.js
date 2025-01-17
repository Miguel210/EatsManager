"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../index");
const data_1 = require("./data");
`{(async() => {
    await main()
})
}`;
main().catch(e => {
    console.log(e);
    process.exit(1);
})
    .finally(() => {
    index_1.prisma.$disconnect();
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.prisma.costumer.deleteMany(),
            yield index_1.prisma.profileOperation.deleteMany(),
            yield index_1.prisma.supplierOrder.deleteMany(),
            yield index_1.prisma.clientOrderDetail.deleteMany(),
            yield index_1.prisma.clientOrder.deleteMany(),
            yield index_1.prisma.table.deleteMany(),
            yield index_1.prisma.metric.deleteMany(),
            yield index_1.prisma.operation.deleteMany(),
            yield index_1.prisma.attendance.deleteMany(),
            yield index_1.prisma.docuemntAttendace.deleteMany(),
            yield index_1.prisma.supplier.deleteMany(),
            yield index_1.prisma.promotion.deleteMany(),
            yield index_1.prisma.garrison.deleteMany(),
            yield index_1.prisma.inventory.deleteMany(),
            yield index_1.prisma.typePayment.deleteMany(),
            yield index_1.prisma.payment.deleteMany(),
            yield index_1.prisma.orderPayment.deleteMany(),
            yield index_1.prisma.movementDetail.deleteMany(),
            yield index_1.prisma.devolutionSupplier.deleteMany(),
            yield index_1.prisma.evaluation.deleteMany(),
            yield index_1.prisma.product.deleteMany(),
            yield index_1.prisma.movement.deleteMany(),
            yield index_1.prisma.employee.deleteMany(),
            yield index_1.prisma.person.deleteMany(),
            yield index_1.prisma.document.deleteMany(),
            yield index_1.prisma.profile.deleteMany(),
            yield index_1.prisma.typeperson.deleteMany(),
            yield index_1.prisma.gender.deleteMany(),
            yield index_1.prisma.module.deleteMany(),
            yield index_1.prisma.productType.deleteMany(),
            yield index_1.prisma.categoryProduct.deleteMany(),
            yield index_1.prisma.module.createMany({
                data: data_1.seedData.module,
            });
        yield index_1.prisma.operation.createMany({
            data: data_1.seedData.operation
        });
        yield index_1.prisma.profile.createMany({
            data: data_1.seedData.profile
        });
        yield index_1.prisma.metric.createMany({
            data: data_1.seedData.metric
        });
        yield index_1.prisma.profileOperation.createMany({
            data: data_1.seedData.profileoperation
        });
        yield index_1.prisma.typePayment.createMany({
            data: data_1.seedData.typePayment
        });
        yield index_1.prisma.typeperson.createMany({
            data: data_1.seedData.typopersona
        });
        yield index_1.prisma.gender.createMany({
            data: data_1.seedData.gender
        });
        yield index_1.prisma.person.createMany({
            data: data_1.seedData.person
        });
        yield index_1.prisma.employee.createMany({
            data: data_1.seedData.employee
        });
        yield index_1.prisma.docuemntAttendace.createMany({
            data: data_1.seedData.documentAttendance
        });
        yield index_1.prisma.attendance.createMany({
            data: data_1.seedData.attendance
        });
        yield index_1.prisma.supplier.createMany({
            data: data_1.seedData.supplier
        });
        yield index_1.prisma.productType.createMany({
            data: data_1.seedData.typeProduct
        });
        yield index_1.prisma.categoryProduct.createMany({
            data: data_1.seedData.categoryProduct
        });
        yield index_1.prisma.product.createMany({
            data: data_1.seedData.product
        });
        yield index_1.prisma.document.createMany({
            data: data_1.seedData.document
        });
        yield index_1.prisma.costumer.createMany({
            data: data_1.seedData.client
        });
        yield index_1.prisma.movement.createMany({
            data: data_1.seedData.moviment
        });
        yield index_1.prisma.movementDetail.createMany({
            data: data_1.seedData.movementDetail
        });
        yield index_1.prisma.inventory.createMany({
            data: data_1.seedData.inventory
        });
        yield index_1.prisma.garrison.createMany({
            data: data_1.seedData.garrision
        });
        yield index_1.prisma.promotion.createMany({
            data: data_1.seedData.promotion
        });
        yield index_1.prisma.table.createMany({
            data: data_1.seedData.table
        });
        yield index_1.prisma.supplierOrder.createMany({
            data: data_1.seedData.supplierOrder
        });
    });
}
const randomBetween0andX = (x) => {
    return Math.floor(Math.random() * x);
};
/*
    await prisma.operation.createMany({
        data: {
            id: seedData.modules[randomBetween0andX(modules.length)].id,
            moduleId: '1',
            name: '21',
            isActive: true
        }
    })
*/ 
