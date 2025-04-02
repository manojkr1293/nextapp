import {  createClassModel, getAllClassModels } from "../../../../services/classModelService";

export async function GET(req) {
  try{
    const fetchAllClassModel = await getAllClassModels();
    return new Response(JSON.stringify(fetchAllClassModel),{
      status:200,
    });
  }catch(error){
    console.error('api Error',error);
    return new Response(JSON.stringify({error:'Failed to fetch class models on api'}),{
      status:500,
    });
  }
}

/*export async function POST(req) {
  try{
    const {name, description} = await req.json();
    if(!name){
      return new Response(
        JSON.stringify({ error: 'Class name is required' }),
        { status: 400 }
      );
    }
    
    const newClassModel = await createClassModel({ name, description });
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
    const { classes } = await req.json();

    // Log the received data to check its structure
    console.log("Received class data:", classes);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(classes)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "class" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const classs of classes) {
      if (!classs.name) {
        return new Response(
          JSON.stringify({ error: 'Each class must have "name"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedClasses = classes.map(classs => {
      const {
        name,
        description
      } = classs;

     

      return {
        name,
        description
      };
    });

    // Call the service function to create questions
    const result = await createClassModel(preparedClasses);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create class(s)' }), {
      status: 500,
    });
  }
}