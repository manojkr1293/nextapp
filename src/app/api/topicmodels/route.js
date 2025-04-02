import { createTopicModelService, fetchAllTopicModelsService, fetchAllTopicOnSubjectIdService } from "../../../../services/topicModelService";

/*export async function POST(req) {
  try{
    const {name,description, subjectId} = await req.json();
    if(!name){
      return new Response(JSON.stringify('name is required'),{
        status:401,
      })
    }
    const newtopicModel = createTopicModelService({name, description,subjectId});
    return new Response(JSON.stringify(newtopicModel),{
      status:201
    })
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'failed to create topic from api'}),{
      status:500
    })
  }
}*/

export async function GET(req) {
  try{
    const {searchParams} = new URL(req.url);
    const subjectId = searchParams.get('subjectId');
    if(subjectId){
      const fetchAllTopicOnSubjectId = await fetchAllTopicOnSubjectIdService(subjectId);
      return new Response(JSON.stringify(fetchAllTopicOnSubjectId),{
        status:200
      })
    }else{

      const fetchAllTopicModels = await fetchAllTopicModelsService();
      return new Response(JSON.stringify(fetchAllTopicModels),{
        status:200
      })
    }
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'failed to fetch data from api'}),{
      status:500
    })
  }
}

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { topics } = await req.json();

    // Log the received data to check its structure
    console.log("Received topic data:", topics);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(topics)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "subtopic" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const topic of topics) {
      if (!topic.name) {
        return new Response(
          JSON.stringify({ error: 'Each topic must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedTopics = topics.map(topic => {
      const {
        name,
        description,
        subjectId,
      } = topic;

     

      return {
        name,
        description,
        subjectId // Set to null if empty string
      };
    });

    // Call the service function to create questions
    const result = await createTopicModelService(preparedTopics);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create topic(s)' }), {
      status: 500,
    });
  }
}