
import { createTestAttemptService } from 'services/testAttemptService';
import prisma from '@/lib/prisma';
export async function POST(req) {
  try {
    const body = await req.json();
   
    const { userId, testseriesId, customtestId } = body;
    const testseriesIdValue = testseriesId === "" ? null : testseriesId;
    const customtestIdValue = customtestId === "" ? null : customtestId;

    const newTestAttempts = await createTestAttemptService({ userId, testseriesId:testseriesIdValue, customtestId:customtestIdValue });

    return new Response(
      JSON.stringify({ message: 'Test Attempt created successfully', data: newTestAttempts }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating test attempt:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
