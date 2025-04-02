import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*export const createSubjectModelService = async(data) =>{
  try{
    console.log('data',data);
    return await prisma.subject.create({
      data:{
        name:data.name,
        description:data.description,
        classId:data.classId
      }
    })
  }catch(error){
      console.error('Error creating subject service model:', error);
      throw new Error('Failed to creating subject service model');
  }
}
*/

export const createSubjectModelService = async(subjects) =>{
  try{
    console.log('data',subjects);
    return await prisma.subject.createMany({
      data:subjects,
      skipDuplicates: true,
    })
  }catch(error){
      console.error('Error creating subject service model:', error);
      throw new Error('Failed to creating subject service model');
  }
}

export const getAllSubjectModel = async()=>{
  try{
    return await prisma.subject.findMany({
        include: {
          classModel: true,  // Include the related class model data
        },
      }
    );
  }catch(error){
    console.error('Error fetching subject models:',error);
      throw new Error('Failed to fetch subject models Prisma');
  }
}

export const fetchAllSubjectOnClassId = async(id)=>{
  try{
    return await prisma.subject.findMany({
      where:{
        classId:id
      }
    }) 
  }catch(error){
    console.error('Error fetching subjects on classId:',error);
    throw new Error('failed to fetch all subjects on calssID');
  }
}