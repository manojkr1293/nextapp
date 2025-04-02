/*
  Warnings:

  - You are about to drop the column `classModelId` on the `customtest` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `customtest` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `customtest` table. All the data in the column will be lost.
  - You are about to drop the column `subtopicId` on the `customtest` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `customtest` table. All the data in the column will be lost.
  - You are about to drop the column `classModelId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `subtopicId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `testseriesId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `topicId` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `testseriesId` on the `studenttest` table. All the data in the column will be lost.
  - You are about to drop the `ClassModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subtopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testseries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `topic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "customtest" DROP CONSTRAINT "customtest_classModelId_fkey";

-- DropForeignKey
ALTER TABLE "customtest" DROP CONSTRAINT "customtest_examId_fkey";

-- DropForeignKey
ALTER TABLE "customtest" DROP CONSTRAINT "customtest_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "customtest" DROP CONSTRAINT "customtest_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "customtest" DROP CONSTRAINT "customtest_topicId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_classModelId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_examId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_testseriesId_fkey";

-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_topicId_fkey";

-- DropForeignKey
ALTER TABLE "studenttest" DROP CONSTRAINT "studenttest_testseriesId_fkey";

-- DropForeignKey
ALTER TABLE "subject" DROP CONSTRAINT "subject_classId_fkey";

-- DropForeignKey
ALTER TABLE "subtopic" DROP CONSTRAINT "subtopic_topicId_fkey";

-- DropForeignKey
ALTER TABLE "testseries" DROP CONSTRAINT "testseries_classModelId_fkey";

-- DropForeignKey
ALTER TABLE "testseries" DROP CONSTRAINT "testseries_examId_fkey";

-- DropForeignKey
ALTER TABLE "testseries" DROP CONSTRAINT "testseries_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "testseries" DROP CONSTRAINT "testseries_subtopicId_fkey";

-- DropForeignKey
ALTER TABLE "testseries" DROP CONSTRAINT "testseries_topicId_fkey";

-- DropForeignKey
ALTER TABLE "topic" DROP CONSTRAINT "topic_subjectId_fkey";

-- AlterTable
ALTER TABLE "customtest" DROP COLUMN "classModelId",
DROP COLUMN "examId",
DROP COLUMN "subjectId",
DROP COLUMN "subtopicId",
DROP COLUMN "topicId",
ADD COLUMN     "examitemId" TEXT;

-- AlterTable
ALTER TABLE "question" DROP COLUMN "classModelId",
DROP COLUMN "examId",
DROP COLUMN "subjectId",
DROP COLUMN "subtopicId",
DROP COLUMN "testseriesId",
DROP COLUMN "topicId",
ADD COLUMN     "examitemId" TEXT;

-- AlterTable
ALTER TABLE "studenttest" DROP COLUMN "testseriesId",
ADD COLUMN     "examitemId" TEXT;

-- DropTable
DROP TABLE "ClassModel";

-- DropTable
DROP TABLE "subject";

-- DropTable
DROP TABLE "subtopic";

-- DropTable
DROP TABLE "testseries";

-- DropTable
DROP TABLE "topic";

-- CreateTable
CREATE TABLE "examitem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "examId" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "examitem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "studenttest" ADD CONSTRAINT "studenttest_examitemId_fkey" FOREIGN KEY ("examitemId") REFERENCES "examitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_examitemId_fkey" FOREIGN KEY ("examitemId") REFERENCES "examitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "examitem" ADD CONSTRAINT "examitem_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_examitemId_fkey" FOREIGN KEY ("examitemId") REFERENCES "examitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
