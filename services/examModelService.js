import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllExamModels = async()=>{
  try{
    
    return await prisma.exam.findMany({
      where: {
        deleted: false, // Fetch only non-deleted records
      },
      include: {
        examitems: true, // Include related examitems if needed
      },
    });
      
  }catch(error){
    console.error('Error fetching exam models:',error);
    throw new Error('Failed to fetch exam models Prisma');
  }
};



/*export const createExamModel = async (data) => {
  try {
    return await prisma.exam.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  } catch (error) {
    console.error('Error creating exam model:', error);
    throw new Error('Failed to create exam model');
  }
};*/

export const createExamModel = async (exams) => {
  try {
    
    return await prisma.exam.createMany({
      data: exams,
      skipDuplicates:true
    });
  } catch (error) {
    console.error('Error creating exam model:', error);
    throw new Error('Failed to create exam model');
  }
};

export const fetchExamModel = async(id)=>{
  try{
    return await prisma.exam.findUnique({
      where:{
        id: id,
      }
    })
  }catch(error){
    console.log('Error feting exam model', error);
    throw new Error('Failed to fetch single exam');
  }
};

export const updateExamModel = async(id,data) =>{
  try{
    return await prisma.exam.update({
      where:{
        id:id,
      },
      data:{
        name:data.name,
        description:data.description
      }
    })
  }catch(error){
    console.log('Error updating exam model', error);
    throw new Error('Failed to update exam model');
  }
};

export const deleteExamModel = async(id)=>{
  try{
    return await prisma.exam.delete({
      where:{
        id:id,
      }
    })
  }catch(error){
    console.log('Error deleting exam model', error);
    throw new Error('Failed to delete exam model');
  }
};