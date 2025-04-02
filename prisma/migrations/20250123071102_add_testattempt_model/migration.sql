/*
  Warnings:

  - You are about to drop the `studenttest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "studenttest" DROP CONSTRAINT "studenttest_customtestId_fkey";

-- DropForeignKey
ALTER TABLE "studenttest" DROP CONSTRAINT "studenttest_testseriesId_fkey";

-- DropForeignKey
ALTER TABLE "studenttest" DROP CONSTRAINT "studenttest_userId_fkey";

-- DropTable
DROP TABLE "studenttest";

-- CreateTable
CREATE TABLE "testattempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "testseriesId" TEXT,
    "customtestId" TEXT,
    "score" INTEGER,
    "isPassed" BOOLEAN,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedat" TIMESTAMP(3),

    CONSTRAINT "testattempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questionattempt" (
    "id" TEXT NOT NULL,
    "testattemptId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "selectedAnswer" TEXT,
    "isCorrect" BOOLEAN,
    "timeTaken" INTEGER,

    CONSTRAINT "questionattempt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "testattempt" ADD CONSTRAINT "testattempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testattempt" ADD CONSTRAINT "testattempt_testseriesId_fkey" FOREIGN KEY ("testseriesId") REFERENCES "testseries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testattempt" ADD CONSTRAINT "testattempt_customtestId_fkey" FOREIGN KEY ("customtestId") REFERENCES "customtest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questionattempt" ADD CONSTRAINT "questionattempt_testattemptId_fkey" FOREIGN KEY ("testattemptId") REFERENCES "testattempt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questionattempt" ADD CONSTRAINT "questionattempt_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
