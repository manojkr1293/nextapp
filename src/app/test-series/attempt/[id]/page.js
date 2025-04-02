'use client';

import { useState, useEffect, useMemo } from 'react';
import ProtectedRoute from '@/app/component/ProtectedRoute';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { testSeriesActions } from '@/store/slices/testSeriesSlice';
import { testAttemptModelActions } from '@/store/slices/testAttemptSlice';
import DisclaimerPage from '@/app/component/Disclaimer';
import Image from 'next/image';

const INITIAL_TIME = 3600; // Default time (60 minutes in seconds)

export default function TestAttemptPage({ params }) {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = params;
  const { test_series } = useSelector((state) => state.testSeries);

  // States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testAttemptId, setTestAttemptId] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [markedForReview, setMarkedForReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);
  const [loading, setLoading] = useState(true);
  const totalQuestions = test_series?.questions?.length || 0;
  const currentQuestion = test_series?.questions?.[currentQuestionIndex];

  const answeredQuestion = useMemo(
    () => answers.find((a) => a.questionId === currentQuestion?.id),
    [answers, currentQuestion]
  );

  // Fetch Test Series and Create Test Attempt
  useEffect(() => {
    if (!id || !session?.user?.id) return;
  
    const fetchTestData = async () => {
      try {
        const existingTestAttempt = await dispatch(testAttemptModelActions.fetchTestAttemptSlice(id)).unwrap();
        if (existingTestAttempt) {
          setTestAttemptId(existingTestAttempt.id);
          setAgreedToDisclaimer(true); // Skip disclaimer if attempt exists
          await dispatch(testSeriesActions.fetchTestSeriesOnIdSlice(existingTestAttempt.testseriesId)).unwrap();
        }
      } catch (error) {
        console.error('Error fetching test attempt:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [id, session?.user?.id, dispatch]);

  // Timer Logic
  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      finishTest();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };


    // Function to handle Disclaimer acceptance
    const handleDisclaimerAgree = async () => {
      try {
        if (!testAttemptId) {
          const testAttemptPayload = {
            userId: session?.user?.id,
            testseriesId: id,
          };

          const testAttempt = await dispatch(
            testAttemptModelActions.createTestAttemptSlice(testAttemptPayload)
          ).unwrap();

          setTestAttemptId(testAttempt.id);
        }

        setAgreedToDisclaimer(true);
      } catch (error) {
        console.error("Error creating test attempt:", error);
      }
    };

  // Handlers
  const submitAnswer = async (markForReview = false) => {
    if (!currentQuestion || !testAttemptId) return;

    const isCorrect = selectedAnswer === currentQuestion.correctanswer;

    const questionAttemptPayload = {
      testAttemptId,
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer || null,
      isCorrect: markForReview ? false : isCorrect,
      timeTaken: 30, // Placeholder time
    };

    try {
     // await dispatch(
      //  testAttemptModelActions.updateTestAttemptSlice(questionAttemptPayload)
      //).unwrap();

      setAnswers((prev) => {
        const updatedAnswers = prev.filter((a) => a.questionId !== currentQuestion.id);
        return [
          ...updatedAnswers,
          { questionId: currentQuestion.id, selectedAnswer, isCorrect },
        ];
      });

      if (markForReview) {
        setMarkedForReview((prev) => [...new Set([...prev, currentQuestionIndex])]);
      } else {
        setMarkedForReview((prev) => prev.filter((index) => index !== currentQuestionIndex));
      }

      // Move to the next question, but prevent out-of-bounds navigation
      if (currentQuestionIndex + 1 < totalQuestions) {
        navigateToQuestion(currentQuestionIndex + 1);
      } 
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const navigateToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestionIndex(index);
      setSelectedAnswer(
        answers.find((a) => a.questionId === test_series?.questions?.[index]?.id)?.selectedAnswer ||
          null
      );
    }
  };

  const clearResponse = () => setSelectedAnswer(null);

  const finishTest = async () => {
    if (!testAttemptId) return;
  
    try {
      // ✅ Prepare answer payloads for submission
      const questionPayload = answers.map((answer) => ({
        testattemptId:testAttemptId,
        questionId: answer.questionId,
        selectedAnswer: answer.selectedAnswer || null,
        isCorrect: answer.isCorrect,
        timeTaken: 30, // Placeholder time per question
      }));
  
      console.log('questionPayload:', questionPayload);
  
      // ✅ Submit all answers in bulk
      await dispatch(testAttemptModelActions.bulkQuestionSubmit({ questionsAttempts: questionPayload })).unwrap();
  
      // ✅ Calculate final score
      const totalCorrect = answers.filter((ans) => ans.isCorrect).length;
      const score = (totalCorrect / totalQuestions) * 100;
  
      // ✅ Finalize the test attempt
      const finishAttemptPayload = {
        testAttemptId,
        isPassed: score >= 40, // Example pass/fail threshold
        score,
      };
  
      dispatch(testAttemptModelActions.finishTestAttemptSlice(finishAttemptPayload));
  
      router.push('/dashboard');
    } catch (error) {
      console.error('Error finishing test:', error);
    }
  };

  console.log('length:',test_series?.questions?.length);
  if (loading || !test_series?.questions?.length) return <p>Loading...</p>;
  
  return (
    <ProtectedRoute roleRequired="USER">
      {!agreedToDisclaimer ? (
        <DisclaimerPage onAgree={handleDisclaimerAgree} testesries={test_series} />
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Panel */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4">Test Series: {test_series.name}</h1>
              <div className="text-red-700 px-4 py-2 rounded-lg text-lg font-bold">
                Time Left: {formatTime(timeLeft)}
              </div>
            </div>

            <div className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold border-b pb-5 mb-3">
                Question {currentQuestionIndex + 1}/{test_series.questions.length}
                
              </h2>
              <p
                className="mb-4 font-semibold"
                dangerouslySetInnerHTML={{ __html: currentQuestion?.questiontext }}
              />

              <div className="space-y-2">
                {currentQuestion?.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => setSelectedAnswer(option)}
                      className="form-radio text-blue-600"
                    />
                    <span dangerouslySetInnerHTML={{ __html: option }} />
                  </label>
                ))}
              </div>

              <div className="flex justify-between border-t border-gray-100 py-6">
                <button
                  onClick={clearResponse}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Clear Response
                </button>
                <button
                  onClick={() => submitAnswer(true)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Mark for Review & Next
                </button>
                <button
                  onClick={() => submitAnswer(false)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[300px] bg-gray-100 border-l">
            <div className="flex flex-col items-center bg-blue-400 mb-6 border-b-2 p-4">
                
                <Image
                            width={112}
                            height={112}
                            src={"/images/user/user-01.png"}
                            style={{
                              width: "auto",
                              height: "auto",
                            }}
                            alt="User"
                          />
                
                <h2 className="mt-3 text-lg font-semibold">{session?.user?.name || "Guest User"}</h2>
              </div>
              <div className=" mb-6 border-b-2 p-4">
              <h2 className="text-lg font-bold mb-2">Questions Overview</h2>
            <div className="grid grid-cols-5 gap-2 ">
              {test_series.questions.map((_, index) => {
                const isAnswered = answers.some((a) => a.questionId === test_series.questions[index]?.id);
                const isMarked = markedForReview.includes(index);

                const boxColor = isMarked
                  ? 'bg-blue-500'
                  : isAnswered
                  ? 'bg-green-500'
                  : 'bg-gray-300';

                return (
                  <div
                    key={index}
                    onClick={() => navigateToQuestion(index)}
                    className={`h-10 w-10 flex items-center justify-center rounded-lg ${boxColor} text-white font-bold cursor-pointer`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <button
                onClick={finishTest}
                className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Final Submit
              </button>
              </div>
            
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
