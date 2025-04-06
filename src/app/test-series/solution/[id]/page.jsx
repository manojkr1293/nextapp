'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '@/app/component/ProtectedRoute';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { testAttemptModelActions } from '@/store/slices/testAttemptSlice';
import { testSeriesActions } from '@/store/slices/testSeriesSlice';
import Image from 'next/image';

export default function TestSolutionPage({ params }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = params;
  const dispatch = useDispatch();

  const { selectedtestAttempt } = useSelector((state) => state.testAttempt);
  const [testAttempt, setTestAttempt] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question

  useEffect(() => {
    if (!id || !session?.user?.id) return;

    const fetchTestAttempt = async () => {
      try {
        const response = await dispatch(testAttemptModelActions.fetchTestAttemptSlice(id)).unwrap();
        setTestAttempt(response);
      } catch (error) {
        console.error('Error fetching test attempt:', error);
      }
    };

    fetchTestAttempt();
  }, [id, session?.user?.id]);

  const getAnswerStatus = (selectedAnswer, correctAnswer) => {
    if (!selectedAnswer) return 'Not Answered';
    if (selectedAnswer === correctAnswer) return 'Correct';
    return 'Incorrect';
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedtestAttempt.questionattempts.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index); // Set the selected question's index
  };

  if (!selectedtestAttempt?.questionattempts?.length || !testAttempt) return <p>Loading...</p>;

  const currentQuestion = selectedtestAttempt?.questionattempts[currentQuestionIndex];
  const userSelectedAnswer = currentQuestion?.selectedAnswer || null;
  const answerStatus = getAnswerStatus(userSelectedAnswer, currentQuestion?.question?.correctanswer);

  return (
    <ProtectedRoute roleRequired="USER">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section: Test Solutions */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Test Series: {selectedtestAttempt.testseries.name}</h1>
          <div className="border p-4 rounded-lg shadow-md">
            <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2 border-b py-3">
              Question {currentQuestionIndex + 1}/{selectedtestAttempt?.questionattempts?.length}
            </h2>
              <p dangerouslySetInnerHTML={{ __html: currentQuestion?.question?.questiontext }} className="mb-2 font-semibold" />
              <div className="space-y-2">
                {currentQuestion?.question?.options?.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <span
                      className={`p-2 border rounded-lg ${
                        userSelectedAnswer === option
                          ? 'bg-red-500 text-white font-semibold'
                          : 'bg-gray-100'
                      }`}
                      dangerouslySetInnerHTML={{ __html: option }}
                    />
                    {userSelectedAnswer === option && (
                      <span className={`text-sm ${userSelectedAnswer === currentQuestion?.question?.correctanswer ? 'text-green-600' : 'text-red-600'}`}>
                        {userSelectedAnswer === currentQuestion?.question?.correctanswer ? 'Correct' : 'Incorrect'}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <strong>Solution:</strong> <span dangerouslySetInnerHTML={{ __html: currentQuestion?.question?.correctanswer }} />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handlePreviousQuestion}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg disabled:opacity-50"
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                className="bg-green-600 text-white py-2 px-4 rounded-lg disabled:opacity-50"
                disabled={currentQuestionIndex === selectedtestAttempt.questionattempts.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: User Info & Summary Overview */}
<div className="w-full lg:w-[300px] bg-gray-100 border-l">
  {/* User Info Section */}
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

  {/* Summary Overview Section */}
  <h2 className="text-lg font-bold p-4">Summary Overview</h2>
  <div className="flex justify-between mb-4 text-sm px-4">
    <div className="bg-green-500 text-white px-2 py-1 rounded-lg">Correct</div>
    <div className="bg-red-500 text-white px-2 py-1 rounded-lg">Incorrect</div>
    <div className="bg-blue-500 text-white px-2 py-1 rounded-lg">Not Answered</div>
  </div>
  <div className="grid grid-cols-5 gap-2 px-4">
    {selectedtestAttempt?.questionattempts?.map((question, index) => {
      const userSelectedAnswer = question?.selectedAnswer || null;
      const answerStatus = getAnswerStatus(userSelectedAnswer, question?.question?.correctanswer);

      const boxColor =
        answerStatus === 'Correct'
          ? 'bg-green-500'
          : answerStatus === 'Incorrect'
          ? 'bg-red-500'
          : 'bg-blue-500';

      return (
        <div
          key={index}
          className={`h-10 w-10 flex items-center justify-center rounded-lg ${boxColor} text-white font-bold cursor-pointer`}
          onClick={() => handleQuestionClick(index)}
        >
          {index + 1}
        </div>
      );
    })}
  </div>
</div>

      </div>
    </ProtectedRoute>
  );
}
