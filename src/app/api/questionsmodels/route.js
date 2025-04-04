import { createQuestionService, fetchAllQuestionsService, fetchQuestionsForTestService } from "services/questionService";

export async function GET(req) {
  try{
    const queryParams = Object.fromEntries(new URL(req.url).searchParams.entries());
    console.log('questiondata', queryParams);
    if(queryParams){
      const questionsList = await fetchQuestionsForTestService(queryParams);
      return new Response(JSON.stringify(questionsList),{
        status:200
      })
    }else{
      const questionsList = await fetchAllQuestionsService();
      return new Response(JSON.stringify(questionsList),{
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
    //const manoj = await req.json();
    //console.log('manoj',manoj);
    const {questiontext,options,correctanswer,marksInt, questiontype,yearInt,difficultylevel,examIds, classModelId, subjectId, topicId, subtopicId, testseriesId} = await req.json();
    if(!questiontext){
      return new Response(
        JSON.stringify({error:'question name is required'}),
       {status:400}
      )
    }

    // If examId is provided as an empty string, set it to null
    const examId = examIds === "" ? null : examIds;
    // If examId is provided as an empty string, set it to null
    const testseriesIdValue = testseriesId === "" ? null : testseriesId;
    


    const newQuestion = await createQuestionService({questiontext,options,correctanswer,marksInt, questiontype,yearInt, difficultylevel,examId, classModelId, subjectId, topicId, subtopicId, testseriesIdValue});
    return new Response(JSON.stringify(newQuestion),{
      status:201
    });
  }catch(error){
    console.error(error);
    return new Response(JSON.stringify({error:'Failed to create question model'}),{
      status:500,
    });
  }
}*/

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { questions } = await req.json();

    // Log the received data to check its structure
    console.log("Received questions data:", questions);
    
    // Check if the 'questions' array exists and is properly structured
    if (!Array.isArray(questions)) {
      return new Response(
        JSON.stringify({ error: 'Invalid data format, "questions" must be an array' }),
        { status: 400 }
      );
    }

    // Validate that each question has valid data (e.g., questiontext and options)
    for (const question of questions) {
      if (!question.questiontext || !question.options || question.options.length === 0) {
        return new Response(
          JSON.stringify({ error: 'Each question must have "questiontext" and non-empty "options"' }),
          { status: 400 }
        );
      }
    }

    // Prepare data to be inserted into the database
    const preparedQuestions = questions.map(question => {
      const {
        questiontext,
        options,
        correctanswer,
        marks,
        questiontype,
        questioncategory,
        years,
        difficultylevel,
        examIds,
        examitemId,
        classModelId,
        subjectId,
        topicId,
        subtopicId,
        testseriesId,
        solution
      } = question;

      // Convert empty strings to null for foreign key fields
      const examIdValue = examIds === "" ? null : examIds;
      const examitemIdValue = examitemId === "" ? null : examitemId;
      const testseriesIdValue = testseriesId === "" ? null : testseriesId;
      const classModelIdValue = classModelId === "" ? null : classModelId;
      const subjectIdValue = subjectId === "" ? null : subjectId;
      const topicIdValue = topicId === "" ? null : topicId;
      const subtopicIdValue = subtopicId === "" ? null : subtopicId;

      return {
        questiontext,
        options,
        correctanswer,
        marks,
        questiontype,
        questioncategory,
        years,
        difficultylevel,
        examId:examIdValue,         // Set to null if empty string
        examitemId:examitemIdValue, 
        classModelId:classModelIdValue,
        subjectId:subjectIdValue,
        topicId:topicIdValue,
        subtopicId:subtopicIdValue,
        solution,
        //testseriesId: testseriesIdValue, // Set to null if empty string,
      };
    });
    console.log('preparedQuestions:', preparedQuestions);
    // Call the service function to create questions
    const result = await createQuestionService(preparedQuestions);

    return new Response(JSON.stringify(result), {
      status: 201
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: 'Failed to create question(s)' }), {
      status: 500,
    });
  }
}