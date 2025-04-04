
import { createtestSeriesModel } from 'services/testseriesModelService';
import prisma from '@/lib/prisma';


export async function POST(req) {
  try {
    const body = await req.json();
    console.log('body:',body);
    const { name, questionIds, examIds, examitemId, classModelId, subjectId, questioncount,topicId, subtopicId, marksTotal, questiontype,duration } = body;

    if (!name || !questionIds || questionIds.length === 0) {
      return new Response(JSON.stringify({ message: 'Invalid input' }), {
        status: 400,
      });
    }

    const examIdValue = examIds === "" ? null : examIds;
    const examitemIdValue = examitemId === "" ? null : examitemId;
    const marksTotalInt = parseInt(marksTotal, 10);
    const durationInt = parseInt(duration, 10);
    const questioncountInt = parseInt(questioncount, 10);
    const classModelIdValue = classModelId === "" ? null : classModelId;
    const subjectIdValue = subjectId === "" ? null : subjectId;
    const topicIdValue = topicId === "" ? null : topicId;
    const subtopicIdValue = subtopicId === "" ? null : subtopicId;

    const newTestSeries = await createtestSeriesModel({ 
      name,
      questioncount:questioncountInt,
      marksTotal:marksTotalInt,
      duration:durationInt,
      questiontype,  examIds:examIdValue, examitemId:examitemIdValue, classModelId:classModelIdValue, subjectId:subjectIdValue, topicId:topicIdValue, subtopicId:subtopicIdValue,
      questionIds });
    
    // Create the test series and link it with questions
    /*const newTestSeries = await prisma.testseries.create({
      data: {
        name,
        questioncount,
        marksTotal,
        questiontype,
        questions: {
          connect: questionIds.map((id) => ({ id })), // Link existing questions by their IDs
        },
      },
    });*/

    return new Response(JSON.stringify(newTestSeries),{ 
      status: 201 
    });
  } catch (error) {
    console.error('Error creating test series:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
