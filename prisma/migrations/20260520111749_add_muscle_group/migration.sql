-- CreateEnum
CREATE TYPE "muscleGroup" AS ENUM ('CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS', 'LEGS', 'ABS');

-- CreateTable
CREATE TABLE "exercise" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "muscleGroup" "muscleGroup" NOT NULL,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);
