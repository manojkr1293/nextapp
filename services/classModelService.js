import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllClassModels = async()=>{
  try{
      return await prisma.classModel.findMany();
  }catch(error){
    console.error('Error fetching class models:',error);
    throw new Error('Failed to fetch class models Prisma');
  }
};

export const getAllClassModelWithSubject = async()=>{
  try{
      return await prisma.classModel.findMany({
        include:{
          subject:true,
        },
      });
  }catch(error){
    console.error('Error fetching class models:',error);
    throw new Error('Failed to fetch class models');
  }
};

/*export const createClassModel = async (data) => {
  try {
    return await prisma.classModel.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  } catch (error) {
    console.error('Error creating class model:', error);
    throw new Error('Failed to create class model');
  }
};*/

export const createClassModel = async (classes) => {
  try {
    return await prisma.classModel.createMany({
      data: classes,
      skipDuplicates:true
    });
  } catch (error) {
    console.error('Error creating class model:', error);
    throw new Error('Failed to create class model');
  }
};

export const fetchClassModel = async(id)=>{
  try{
    return await prisma.classModel.findUnique({
      where:{
        id: id,
      }
    })
  }catch(error){
    console.log('Error feting class model', error);
    throw new Error('Failed to fetch single class');
  }
};

export const updateClassModel = async(id,data) =>{
  try{
    return await prisma.classModel.update({
      where:{
        id:id,
      },
      data:{
        name:data.name,
        description:data.description
      }
    })
  }catch(error){
    console.log('Error updating class model', error);
    throw new Error('Failed to update class model');
  }
};

export const deleteClassModel = async(id)=>{
  try{
    return await prisma.classModel.delete({
      where:{
        id:id,
      }
    })
  }catch(error){
    console.log('Error deleting class model', error);
    throw new Error('Failed to delete class model');
  }
};