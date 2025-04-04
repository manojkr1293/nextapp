import { createExamModel, getAllExamModels } from "services/examModelService";


export async function GET(req) {
  try{
    const fetchAllExamModel = await getAllExamModels();
    
    return new Response(JSON.stringify(fetchAllExamModel),{
      status:200,
    });
  }catch(error){
    console.error('api Error',error);
    return new Response(JSON.stringify({error:'Failed to fetch exam models on api'}),{
      status:500,
    });
  }
}

/*export async function POST(req) {
  try{
    const {name, description} = await req.json();
    if(!name){
      return new Response(
        JSON.stringify({ error: 'Exam name is required' }),
        { status: 400 }
      );
    }
    
    const newClassModel = await createExamModel({ name, description });
    return new Response(JSON.stringify(newClassModel), {
      status: 201,
    });
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to create class model'}),{
      status:500,
    });
  }
}
*/

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { exams } = await req.json();

    // Log the received data to check its structure
    console.log("Received exams data:", exams);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(exams)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "exam" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const exam of exams) {
      if (!exam.name) {
        return new Response(
          JSON.stringify({ error: 'Each exam must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedExams = exams.map(exam => {
      const {
        name,
        description
      } = exam;

     

      return {
        name,
        description
      };
    });

    // Call the service function to create questions
    const result = await createExamModel(preparedExams);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create exam(s)' }), {
      status: 500,
    });
  }
}