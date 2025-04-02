/*
  Warnings:

  - You are about to drop the column `testseriesId` on the `question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_testseriesId_fkey";

-- AlterTable
ALTER TABLE "question" DROP COLUMN "testseriesId";

-- CreateTable
CREATE TABLE "_testseriesQuestions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_testseriesQuestions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_testseriesQuestions_B_index" ON "_testseriesQuestions"("B");

-- AddForeignKey
ALTER TABLE "_testseriesQuestions" ADD CONSTRAINT "_testseriesQuestions_A_fkey" FOREIGN KEY ("A") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_testseriesQuestions" ADD CONSTRAINT "_testseriesQuestions_B_fkey" FOREIGN KEY ("B") REFERENCES "testseries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
