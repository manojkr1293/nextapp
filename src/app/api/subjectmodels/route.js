import { createSubjectModelService, fetchAllSubjectOnClassId, getAllSubjectModel } from "services/subjectModelService";

/*export async function POST(req) {
  try{
    const {name,description,classId} = await req.json();
    if(!name){
      return new Response(
        JSON.stringify({error:'subject name is required'}),
       {status:400}
      )
    }

    const newsubjectModel = createSubjectModelService({name,description,classId});
    return new Response(JSON.stringify(newsubjectModel),{
      status:201
    });
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to create subject model'}),{
      status:500,
    });
  }
}*/

export async function GET(req) {
  try{
    const {searchParams} = new URL(req.url);
    const classId = searchParams.get('classId');
    if(classId){
      const subjectsOnClass = await fetchAllSubjectOnClassId(classId);
      return new Response(JSON.stringify(subjectsOnClass),{
        status:200
      })
    }else{
      const fetchAllSubjectModel = await getAllSubjectModel();
      return new Response(JSON.stringify(fetchAllSubjectModel),{
        error:200
      })
    }
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to FETCH subject model'}),{
      status:500,
    })
  }
}

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { subjects } = await req.json();

    // Log the received data to check its structure
    console.log("Received subject data:", subjects);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(subjects)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "subject" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const subject of subjects) {
      if (!subject.name) {
        return new Response(
          JSON.stringify({ error: 'Each subject must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedSubjects = subjects.map(subject => {
      const {
        name,
        description,
        classId,
      } = subject;

     

      return {
        name,
        description,
        classId // Set to null if empty string
      };
    });

    // Call the service function to create questions
    const result = await createSubjectModelService(preparedSubjects);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create subject(s)' }), {
      status: 500,
    });
  }
}