-- CreateEnum
CREATE TYPE "Questioncategory" AS ENUM ('exam', 'class');

-- CreateEnum
CREATE TYPE "Questiontype" AS ENUM ('MCQ', 'PYQ');

-- CreateEnum
CREATE TYPE "Difficultylevel" AS ENUM ('Easy', 'Medium', 'Hard');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studenttest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "testseriesId" TEXT,
    "customtestId" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studenttest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customtest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "questioncount" INTEGER,
    "marks" INTEGER,
    "questiontype" "Questiontype" NOT NULL,
    "userId" TEXT NOT NULL,
    "examId" TEXT,
    "classModelId" TEXT NOT NULL,
    "subjectId" TEXT,
    "topicId" TEXT,
    "subtopicId" TEXT,

    CONSTRAINT "customtest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

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

    CONSTRAINT "subtopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testseries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "questioncount" INTEGER,
    "marksTotal" INTEGER,
    "questiontype" "Questiontype" NOT NULL,
    "examId" TEXT,
    "classModelId" TEXT,
    "subjectId" TEXT,
    "topicId" TEXT,
    "subtopicId" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testseries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "questiontext" TEXT NOT NULL,
    "options" TEXT[],
    "correctanswer" TEXT NOT NULL,
    "marks" INTEGER NOT NULL,
    "questiontype" "Questiontype" NOT NULL,
    "years" INTEGER[],
    "difficultylevel" "Difficultylevel" NOT NULL,
    "examIds" TEXT,
    "classModelId" TEXT,
    "subjectId" TEXT,
    "topicId" TEXT,
    "subtopicId" TEXT,
    "testseriesId" TEXT,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "solution" TEXT,
    "questioncategory" "Questioncategory" NOT NULL DEFAULT 'exam',

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provideraccountid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "accesstoken" TEXT,
    "tokentype" TEXT,
    "scope" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "sessiontoken" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_customtestQuestions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_customtestQuestions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_provideraccountid_key" ON "account"("provider", "provideraccountid");

-- CreateIndex
CREATE UNIQUE INDEX "session_sessiontoken_key" ON "session"("sessiontoken");

-- CreateIndex
CREATE INDEX "_customtestQuestions_B_index" ON "_customtestQuestions"("B");

-- AddForeignKey
ALTER TABLE "studenttest" ADD CONSTRAINT "studenttest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studenttest" ADD CONSTRAINT "studenttest_testseriesId_fkey" FOREIGN KEY ("testseriesId") REFERENCES "testseries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studenttest" ADD CONSTRAINT "studenttest_customtestId_fkey" FOREIGN KEY ("customtestId") REFERENCES "customtest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customtest" ADD CONSTRAINT "customtest_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_classModelId_fkey" FOREIGN KEY ("classModelId") REFERENCES "ClassModel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testseries" ADD CONSTRAINT "testseries_subtopicId_fkey" FOREIGN KEY ("subtopicId") REFERENCES "subtopic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_examIds_fkey" FOREIGN KEY ("examIds") REFERENCES "exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customtestQuestions" ADD CONSTRAINT "_customtestQuestions_A_fkey" FOREIGN KEY ("A") REFERENCES "customtest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customtestQuestions" ADD CONSTRAINT "_customtestQuestions_B_fkey" FOREIGN KEY ("B") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
