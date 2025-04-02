-- AlterTable
ALTER TABLE "customtest" ADD COLUMN     "examId" TEXT;

-- AlterTable
ALTER TABLE "question" ADD COLUMN     "examId" TEXT;

-- AlterTable
ALTER TABLE "testseries" ADD COLUMN     "examId" TEXT;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;
