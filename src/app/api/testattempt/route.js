import { fetchAllTestAttemptOnUserId, fetchTestAttemptOnId, finishTestAttemptService } from "../../../../services/testAttemptService";


export async function GET(req) {
  try{
    const {searchParams} = new URL(req.url);
    const userId = searchParams.get('userId');
    const testAttemptId = searchParams.get('attemptid');
    
    if(userId){
      const testAttemptOnUserId = await fetchAllTestAttemptOnUserId(userId);
     
      return new Response(JSON.stringify(testAttemptOnUserId),{
        status:200
      })
    }else if(testAttemptId){
      const testAttemptOnId = await fetchTestAttemptOnId(testAttemptId);
     
      return new Response(JSON.stringify(testAttemptOnId),{
        status:200
      })
    }
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to FETCH testattempt model'}),{
      status:500,
    })
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    
    const { testAttemptId, score,isPassed } = body;
    const finishTestSeries = await finishTestAttemptService({ testAttemptId, score, isPassed});

    return new Response(
      JSON.stringify({ message: 'finish testseriesAttempt  successfully', data: finishTestSeries }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error finish testseriesAttempt :', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}