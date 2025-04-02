import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllTopicModelsService = async() =>{
  try{
    return await prisma.topic.findMany({
      include: {
        subject: {
          include: {
            classModel: true, // To include the associated class model for each subject
          }
        }
      }
    })
  }catch(error){
    console.error('error fetching topic models', error);
    throw new Error(error.message);
  }
}

export const fetchAllTopicOnSubjectIdService = async(id)=>{
  try{
    return await prisma.topic.findMany({
      where:{
        subjectId:id
      }
    })
  }catch(error){
    console.error('error fetching topic on subject id with service');
    throw new Error(error.message);
  }
}
/*export const createTopicModelService = async(data) =>{
  try{
    return await prisma.topic.create({
      data:{
        name:data.name,
        //description:data.description,
        subjectId:data.subjectId
      }
    })
  }catch(error){
    console.error('error on createing topic with service');
    throw new Error(error.message);
  }
}*/

export const createTopicModelService = async(topics) =>{
  try{
    console.log(topics);
    return await prisma.topic.createMany({
      data:topics,
      skipDuplicates: true,
    })
  }catch(error){
    console.error('error on createing topic with service');
    throw new Error(error.message);
  }
}