import { createExamItemModelService, fetchAllExamItemOnExamId, fetchExamItemOnId, getAllExamItemModel } from "services/examItemModelService";

export async function GET(req) {
  try{
    const {searchParams} = new URL(req.url);
    const examId = searchParams.get('examId');
    const examitemId = searchParams.get('examitemId');
    if(examId){
      
      const examitemOnexams = await fetchAllExamItemOnExamId(examId);
      return new Response(JSON.stringify(examitemOnexams),{
        status:200
      })
    }else if(examitemId){
      
      const examitemOnid = await fetchExamItemOnId(examitemId);
      return new Response(JSON.stringify(examitemOnid),{
        status:200
      })
    }else {
      
      const fetchAllExamItemModel = await getAllExamItemModel();
      return new Response(JSON.stringify(fetchAllExamItemModel),{
        error:200
      })
    }
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to FETCH exam items model'}),{
      status:500,
    })
  }
}

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { examitems } = await req.json();

    // Log the received data to check its structure
    console.log("Received examitems data:", examitems);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(examitems)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "examitems" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const examitem of examitems) {
      if (!examitem.name) {
        return new Response(
          JSON.stringify({ error: 'Each examitem must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedExamitems = examitems.map(examitem => {
      const {
        name,
        description,
        examId,
      } = examitem;

     

      return {
        name,
        description,
        examId // Set to null if empty string
      };
    });

    // Call the service function to create questions
    
    const result = await createExamItemModelService(preparedExamitems);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create examitems(s)' }), {
      status: 500,
    });
  }
}