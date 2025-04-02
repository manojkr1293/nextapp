import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllQuestionsService = async ()=>{
  try{
    return prisma.question.findMany({
      include:{
        exam: true,
        examitem: true,
        subtopic:true,
        topic:true,
        subject:true,
        classModel:true
      }
    })
  }catch(error){
    console.error(error);
    throw new Error(error.message);
  }
}

export const fetchQuestionsForTestService = async (filters = {})=>{
  try {
    // Build the where clause dynamically based on filters
    const whereClause = {};
    if (filters.examIds) whereClause.examId = filters.examIds;
    if (filters.examitemId) whereClause.examitemId = filters.examitemId;
    if (filters.classModelId) whereClause.classModelId = filters.classModelId;
    if (filters.subjectId) whereClause.subjectId = filters.subjectId;
    if (filters.topicId) whereClause.topicId = filters.topicId;
    if (filters.subtopicId) whereClause.subtopicId = filters.subtopicId;
    if (filters.examitemId) whereClause.examitemId = filters.examitemId;

    console.log('whereClause:',whereClause);
    // Fetch questions with Prisma, applying the filters and including related models
    return await prisma.question.findMany({
      where: whereClause,
      include: {
        exam: true,
        examitem: true,
        subtopic: true,
        topic: true,
        subject: true,
        classModel: true,
      },
    });
  } catch (error) {
    console.error('Error in fetchAllQuestionsService:', error);
    throw new Error(error.message);
  }
}


export const createQuestionService = async(questions)=>{
  try{
    console.log('service:', questions);

    return await prisma.question.createMany({
      data: questions,
      skipDuplicates: true,  // Optional: skips records that already exist based on unique constraints
    });
  }catch(error){
    console.error(error.message);
    throw new Error(error.message);
  }
}

/*export const createQuestionService = async (data) => {
  try {
    console.log('service:', data);

    const result = await prisma.question.createMany({
      data: data.map((question) => ({
        questiontext: question.questiontext,
        options: question.options,
        correctanswer: question.correctanswer,
        marks: question.marks,
        questiontype: question.questiontype,
        years: question.years,
        difficultylevel: question.difficultylevel,
        classModelId: question.classModelId || null,
        subjectId: question.subjectId || null,
        topicId: question.topicId || null,
        subtopicId: question.subtopicId || null,
        testseriesId: question.testseriesId || null,
        examId:question.examId || null,
      })),
    });
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};*/

/*export const createQuestionService = async (data) => {
  try {
    // Connect exams during question creation
   

    const questionData = {
      questiontext: 'What is 2 + 2?',
      options: ['1', '2', '3', '4'],
      correctanswer: '4',
      marks: 3,
      questiontype: 'MCQ',
      years: ['2022'],
      difficultylevel: 'Medium',
      solution: 'It is basic math.',
      exams: {
        connect: [
          { id: 'bd702341-7325-4b00-96e9-a86048326a51' },  // Connect to the existing exams by ID
          { id: 'cf04c982-1cca-4c9b-9468-78b075807f7b' },  // Connect to the existing exams by ID
        ],
      },
    };
    console.log('questionData2:', questionData);
    const result = await prisma.question.create({
      data: questionData,
      
    });

    return result;
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Failed to create question with exams");
  }
};*/
