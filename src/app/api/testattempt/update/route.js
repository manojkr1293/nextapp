import { createTestAttemptService, updateTestAttemptService } from 'services/testAttemptService';
import prisma from '@/lib/prisma';
export async function POST(req) {
  try {
    const body = await req.json();
    console.log('ques:', body);
    const { testAttemptId, questionId, selectedAnswer,isCorrect, timeTaken } = body;
    const newQuestionAttempts = await updateTestAttemptService({ testAttemptId, questionId, selectedAnswer,isCorrect, timeTaken });

    return new Response(
      JSON.stringify({ message: 'question Attempt created successfully', data: newQuestionAttempts }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating question attempt:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
