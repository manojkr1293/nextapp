import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTestAttemptService = async (testAttempts) => {
  try {
    
    return await prisma.testattempt.create({
      data: {
        userId:testAttempts.userId,
        testseriesId:testAttempts.testseriesId,
        customtestId:testAttempts.customtestId,
      },
    });
  } catch (error) {
    console.error('Error creating test Attempt service:', error);
    throw new Error('Failed to create test Attempt service');
  }
};

export const fetchAllTestAttemptOnUserId = async(id)=>{
  try{
    return await prisma.testattempt.findMany({
      where:{
        userId:id,
        deleted: false, // Fetch only non-deleted records
      },
      include: {
        questionattempts: {
          include: {
            question: true,
            /*question: {
              select: {
                questiontext: true,
                options: true,
                correctanswer: true,
                solution: true,
              },
            },*/
          },
        },
        user: true, // Fetch the associated user (if needed)
        testseries: true, // Fetch the associated test series (if needed)
        customtest: true, // Fetch the associated custom test (if needed)
      },
    }) 
  }catch(error){
    console.error('Error fetching testattempt on userid:',error);
    throw new Error('failed to fetch all testattempt on userid');
  }
}


export const fetchTestAttemptOnId = async(id)=>{
  try{
    return await prisma.testattempt.findUnique({
      where:{
        id:id,
        deleted: false, // Fetch only non-deleted records
      },
      include: {
        questionattempts: {
          include: {
            question: true,
            /*question: {
              select: {
                questiontext: true,
                options: true,
                correctanswer: true,
                solution: true,
              },
            },*/
          },
        },
        user: true, // Fetch the associated user (if needed)
        testseries: true, // Fetch the associated test series (if needed)
        customtest: true, // Fetch the associated custom test (if needed)
      },
    }) 
  }catch(error){
    console.error('Error fetching testattempt on id:',error);
    throw new Error('failed to fetch testattempt on id');
  }
}

export const updateTestAttemptService = async(questionAttempts) =>{
  try {
    console.log('questionAttempts:',questionAttempts);
    return await prisma.questionattempt.create({
      data: {
        testattemptId:questionAttempts.testAttemptId,
        questionId:questionAttempts.questionId,
        selectedAnswer:questionAttempts.selectedAnswer,
        isCorrect:questionAttempts.isCorrect,
        timeTaken:questionAttempts.timeTaken,
      },
    });
  } catch (error) {
    console.error('Error creating question Attempt service:', error);
    throw new Error('Failed to create question Attempt service');
  }
};


export const finishTestAttemptService = async(finishAttempts) =>{
  try{
    
    return await prisma.testattempt.update({
      where:{
        id:finishAttempts.testAttemptId,
      },
      data:{
        score: finishAttempts.score,
        isPassed: finishAttempts.isPassed,
        status: 'COMPLETED',
        completedAt: new Date(),
      }
    })
  }catch(error){
    console.log('Error updating class model', error);
    throw new Error('Failed to update class model');
  }
};


export const bulkQuestionSubmitService = async (questions) => {
  try {
    console.log('bulk:', questions);

    return await prisma.questionattempt.createMany({
      data: questions,
      skipDuplicates: true, // ✅ Prevent duplicate entries
    });
  } catch (error) {
    console.error('Error in bulk question submission:', error);
    throw new Error(error.message);
  }
};