-- CreateTable
CREATE TABLE "docuemntAttendace" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deleteAt" TIMESTAMP(3),
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "docuemntAttendace_pkey" PRIMARY KEY ("id")
);
