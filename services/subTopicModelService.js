import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllSubTopicService =async () =>{
  try{
    return await prisma.subtopic.findMany({
      include:{
        topic:{
          include:{
            subject:{
              include:{
                classModel:true
              }
            }
          }
        }
      }
    })
  }catch(error){
    console.error(error);
    throw new Error(error.message);
  }
}

export const fetchAllSubTopicOnTopicIdService = async(id)=>{
  try{
    return await prisma.subtopic.findMany({
      where:{
        topicId:id
      }
    })
  }catch(error){
    console.error('error fetching topic on topic id with service');
    throw new Error(error.message);
  }
}

/*export const createSubTopicService = async(data) =>{
  try{
    return await prisma.subtopic.create({
      data:{
        name:data.name,
        topicId:data.topicId
      }
    })
  }catch(error){
    console.error(error);
    throw new Error(error.message);
  }
}*/


export const createSubTopicService = async(subtopics) =>{
  try{
    console.log(subtopics);
    return await prisma.subtopic.createMany({
      data:subtopics,
      skipDuplicates: true,
    })
  }catch(error){
    console.error(error);
    throw new Error(error.message);
  }
}