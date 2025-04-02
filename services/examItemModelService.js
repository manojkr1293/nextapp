import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createExamItemModelService = async(examitems) =>{
  try{
    console.log('data',examitems);
    return await prisma.examitem.createMany({
      data:examitems,
      skipDuplicates: true,
    })
  }catch(error){
      console.error('Error creating examitems service model:', error);
      throw new Error('Failed to creating examitems service model');
  }
}

export const getAllExamItemModel = async()=>{
  try{
    return await prisma.examitem.findMany({
        where:{
          deleted: false, // Fetch only non-deleted records
        },
        include: {
          exam: true,  // Include the related class model data
        },
      }
    );
  }catch(error){
    console.error('Error fetching examitems models:',error);
      throw new Error('Failed to fetch examitems models Prisma');
  }
}

export const fetchAllExamItemOnExamId = async(id)=>{
  try{
    return await prisma.examitem.findMany({
      where:{
        examId:id,
        deleted: false, // Fetch only non-deleted records
      }
    }) 
  }catch(error){
    console.error('Error fetching examitems on examid:',error);
    throw new Error('failed to fetch all examitems on examid');
  }
}

export const fetchExamItemOnId = async(id)=>{
  try{
    return await prisma.examitem.findUnique({
      where:{
        id:id,
        deleted: false, // Fetch only non-deleted records
      },
      include: {
        testseries: true, // Include related data
        customtests: true,
      },
    }) 
  }catch(error){
    console.error('Error fetching examitems on id:',error);
    throw new Error('failed to fetch all examitems on id');
  }
}