import { createSubTopicService, fetchAllSubTopicOnTopicIdService, fetchAllSubTopicService } from "services/subTopicModelService";

export async function GET(req) {
  try{
    const {searchParams} = new URL(req.url);
    const topicId = searchParams.get('topicId');
    if(topicId){
      const fetchAllsubTopic = await fetchAllSubTopicOnTopicIdService(topicId);
      return new Response(JSON.stringify(fetchAllsubTopic),{
        status:200
      })
    }else{

      const fetchAllSubTopic = await fetchAllSubTopicService();
      return new Response(JSON.stringify(fetchAllSubTopic),{
        status:200
      })
    }
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify(error.message),{
      status:500
    })
  }
}



/*export async function POST(req) {
  try{
    const {name,description,topicId} = await req.json();
    if(!name){
      return new Response(JSON.stringify('name is required for subtopic'),{
        status:401
      })
    }
    const createSubTopic = await createSubTopicService({name,description,topicId});
    return new Response(JSON.stringify(createSubTopic),{
      status:201
    })
  }catch(error){
    console.log(error);
    return new Response(JSON.stringify(error.message),{
      status:500
    })
  }
  
}*/


export async function POST(req) {
  try {
    // Parse the incoming request body
    const { subtopics } = await req.json();

    // Log the received data to check its structure
    console.log("Received subtopic data:", subtopics);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(subtopics)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "subtopic" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const subtopic of subtopics) {
      if (!subtopic.name) {
        return new Response(
          JSON.stringify({ error: 'Each subtopic must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedSubtopics = subtopics.map(subtopic => {
      const {
        name,
        description,
        topicId,
      } = subtopic;

     

      return {
        name,
        description,
        topicId // Set to null if empty string
      };
    });

    // Call the service function to create questions
    const result = await createSubTopicService(preparedSubtopics);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create subtopic(s)' }), {
      status: 500,
    });
  }
}