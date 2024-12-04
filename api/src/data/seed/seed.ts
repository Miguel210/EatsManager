import { prisma } from './../index'
import { seedData } from './data';


`{(async() => {
    await main()
})
}`
main().catch(e => {
    console.log(e)
    process.exit(1)
})
.finally(() => {
    prisma.$disconnect();     
});

async function main() {


    await prisma.costumer.deleteMany(),
    await prisma.profileOperation.deleteMany(),
    await prisma.supplierOrder.deleteMany(),
    await prisma.clientOrderDetail.deleteMany(),
    await prisma.clientOrder.deleteMany(),
    await prisma.table.deleteMany(),
    await prisma.metric.deleteMany(),
    await prisma.operation.deleteMany(),
    await prisma.attendance.deleteMany(),
    await prisma.docuemntAttendace.deleteMany(),
    await prisma.supplier.deleteMany(),
    await prisma.promotion.deleteMany(),
    await prisma.garrison.deleteMany(),
    await prisma.inventory.deleteMany(),
    await prisma.typePayment.deleteMany(),
    await prisma.payment.deleteMany(),
    await prisma.orderPayment.deleteMany(),
    await prisma.movementDetail.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.devolutionSupplier.deleteMany(),
    await prisma.movement.deleteMany(),
    await prisma.employee.deleteMany(),
    await prisma.person.deleteMany(),
    await prisma.document.deleteMany(),
    await prisma.profile.deleteMany(),
    await prisma.typeperson.deleteMany(),
    await prisma.gender.deleteMany(),
    await prisma.module.deleteMany(),
    await prisma.productType.deleteMany(),
    await prisma.categoryProduct.deleteMany(),

    await prisma.module.createMany({
        data: seedData.module,
    });

    await prisma.operation.createMany({
        data: seedData.operation
    });

    await prisma.profile.createMany({
        data: seedData.profile
    });

    await prisma.metric.createMany({
        data: seedData.metric
    })
    await prisma.profileOperation.createMany({
        data: seedData.profileoperation
    });

    await prisma.typePayment.createMany({
        data: seedData.typePayment
    })
    await prisma.typeperson.createMany({
        data: seedData.typopersona
    });

    await prisma.gender.createMany({
        data: seedData.gender
    })
    await prisma.person.createMany({
        data: seedData.person
    });

    await prisma.employee.createMany({
        data: seedData.employee
    });
    await prisma.docuemntAttendace.createMany({
        data: seedData.documentAttendance
    })
    await prisma.attendance.createMany({
        data: seedData.attendance
    });

    await prisma.supplier.createMany({
        data: seedData.supplier
    });

    await prisma.productType.createMany({
        data: seedData.typeProduct
    });

    await prisma.categoryProduct.createMany({
        data: seedData.categoryProduct
    })

     await prisma.product.createMany({
        data: seedData.product
    })

    await prisma.document.createMany({
        data: seedData.document
    })

    await prisma.costumer.createMany({
        data: seedData.client
    })

    await prisma.movement.createMany({
        data: seedData.moviment
    })

    await prisma.movementDetail.createMany({
        data: seedData.movementDetail
    })

    await prisma.inventory.createMany({
        data: seedData.inventory
    })

    await prisma.garrison.createMany({
        data: seedData.garrision
    })

    await prisma.promotion.createMany({
        data: seedData.promotion
    })

    await prisma.table.createMany({
        data: seedData.table
    })
}

const randomBetween0andX = (x: number) => {
    return Math.floor(Math.random() * x)
}

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