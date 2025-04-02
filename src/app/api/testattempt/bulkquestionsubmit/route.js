import { bulkQuestionSubmitService } from '../../../../../services/testAttemptService';

export async function POST(req) {
  try {
    const body = await req.json();
    const { questionsAttempts } = body;

    console.log('Received questionsAttempts:', questionsAttempts);

    // ✅ Validate request body
    if (!questionsAttempts || !Array.isArray(questionsAttempts)) {
      return new Response(JSON.stringify({ message: 'Invalid request data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ✅ Submit to DB
    const newTestAttempts = await bulkQuestionSubmitService(questionsAttempts);

    return new Response(
      JSON.stringify({ message: 'Test Attempt created successfully', data: newTestAttempts }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating test attempt:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
