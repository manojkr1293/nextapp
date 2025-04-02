/*
  Warnings:

  - You are about to drop the `QuestionExam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuestionExam" DROP CONSTRAINT "QuestionExam_examId_fkey";

-- DropForeignKey
ALTER TABLE "QuestionExam" DROP CONSTRAINT "QuestionExam_questionId_fkey";

-- AlterTable
ALTER TABLE "question" ADD COLUMN     "examId" TEXT;

-- DropTable
DROP TABLE "QuestionExam";

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;
