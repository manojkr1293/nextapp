/*
  Warnings:

  - You are about to drop the column `description` on the `examitem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `examitem` table. All the data in the column will be lost.
  - You are about to drop the column `examitemId` on the `studenttest` table. All the data in the column will be lost.
  - Added the required column `classModelId` to the `customtest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "studenttest" DROP CONSTRAINT "studenttest_examitemId_fkey";

-- AlterTable
ALTER TABLE "customtest" ADD COLUMN     "classModelId" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deletedat" TIMESTAMP(3),
ADD COLUMN     "subjectId" TEXT,
ADD COLUMN     "subtopicId" TEXT,
ADD COLUMN     "topicId" TEXT;

-- AlterTable
ALTER TABLE "exam" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deletedat" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "examitem" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deletedat" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "question" ADD COLUMN     "classModelId" TEXT,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deletedat" TIMESTAMP(3),
ADD COLUMN     "subjectId" TEXT,
ADD COLUMN     "subtopicId" TEXT,
ADD COLUMN     "testseriesId" TEXT,
ADD COLUMN     "topicId" TEXT;

-- AlterTable
ALTER TABLE "studenttest" DROP COLUMN "examitemId",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "deletedat" TIMESTAMP(3),
ADD COLUMN     "testseriesId" TEXT;

-- CreateTable
CREATE TABLE "ClassModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "ClassModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "description" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "subjectId" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subtopic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "topicId" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "subtopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testseries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "questioncount" INTEGER,
    "marksTotal" INTEGER,
    "questiontype" "Questiontype" NOT NULL,
    "examitemId" TEXT,
    "classModelId" TEXT,
    "subjectId" TEXT,
    "topicId" TEXT,
    "subtopicId" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "testseries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "studenttest" ADD CONSTRAINT "studenttest_testseriesId_fkey" FOREIGN KEY ("testseriesId") REFERENCES "testseries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_classModelId_fkey" FOREIGN KEY ("classModelId") REFERENCES "ClassModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "ClassModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "topic" ADD CONSTRAINT "topic_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtopic" ADD CONSTRAINT "subtopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_examitemId_fkey" FOREIGN KEY ("examitemId") REFERENCES "examitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_classModelId_fkey" FOREIGN KEY ("classModelId") REFERENCES "ClassModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_classModelId_fkey" FOREIGN KEY ("classModelId") REFERENCES "ClassModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_testseriesId_fkey" FOREIGN KEY ("testseriesId") REFERENCES "testseries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
