import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAlltestSeriesModels = async()=>{
  try{
      return await prisma.testseries.findMany({
        include: {
          questions: true, // Include the related questions for each test series
        },
      });
      
  }catch(error){
    console.error('Error fetching testSeries models:',error);
    throw new Error('Failed to fetch testSeries models Prisma');
  }
};

export const fetchtestSeriesOnId = async(id)=>{
  try{
    return await prisma.testseries.findUnique({
      where:{
        id:id,
        deleted: false, // Fetch only non-deleted records
      },
      include: {
        questions: true, // Include related data
      },
    }) 
  }catch(error){
    console.error('Error fetching examitems on id:',error);
    throw new Error('failed to fetch all examitems on id');
  }
}

export const createtestSeriesModel = async (testSeriess) => {
  try {
    return await prisma.testseries.create({
      data: {
        name:testSeriess.name,
        questioncount:testSeriess.questioncount,
        marksTotal:testSeriess.marksTotal,
        duration:testSeriess.duration,
        questiontype:testSeriess.questiontype,
        examId:testSeriess.examIds,
        examitemId:testSeriess.examitemId,
        classModelId:testSeriess.classModelId,
        subjectId:testSeriess.subjectId,
        topicId:testSeriess.topicId,
        subtopicId:testSeriess.subtopicId,
        questions: {
          connect: testSeriess.questionIds.map((id) => ({ id })), // Link questions by their IDs
        },
      },
    });
  } catch (error) {
    console.error('Error creating class model:', error);
    throw new Error('Failed to create class model');
  }
};

export const fetchtestSeriesModel = async(id)=>{
  try{
    return await prisma.testseries.findUnique({
      where:{
        id: id,
      }
    })
  }catch(error){
    console.log('Error feting testSeries model', error);
    throw new Error('Failed to fetch single testSeries');
  }
};

export const updatetestSeriesModel = async(id,data) =>{
  try{
    return await prisma.testseries.update({
      where:{
        id:id,
      },
      data:{
        name:data.name,
        description:data.description
      }
    })
  }catch(error){
    console.log('Error updating testSeries model', error);
    throw new Error('Failed to update testSeries model');
  }
};

export const deletetestSeriesModel = async(id)=>{
  try{
    return await prisma.testseries.delete({
      where:{
        id:id,
      }
    })
  }catch(error){
    console.log('Error deleting testSeries model', error);
    throw new Error('Failed to delete testSeries model');
  }
};