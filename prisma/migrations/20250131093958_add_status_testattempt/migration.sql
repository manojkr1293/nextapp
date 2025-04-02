-- AlterTable
ALTER TABLE "testattempt" ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS';
