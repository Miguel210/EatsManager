-- CreateTable
CREATE TABLE "metric" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sentence" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "metric_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "metric" ADD CONSTRAINT "metric_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "operation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
