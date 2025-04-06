'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '@/app/component/ProtectedRoute';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { testAttemptModelActions } from '@/store/slices/testAttemptSlice';
import { testSeriesActions } from '@/store/slices/testSeriesSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function TestAnalysisPage({ params }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = params;
  const dispatch = useDispatch();
  const { selectedtestAttempt } = useSelector((state) => state.testAttempt);
  const [testAttempt, setTestAttempt] = useState(null);
  console.log(selectedtestAttempt);
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

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const test = {
    name: "Math Test Series 1",
    totalMarks: 100,
    duration: 60,
    attemptedOn: "12 Feb 2025",
    score: 75,
    accuracy: 80,
    status: "Passed",
  };


  const questionAnalysis = selectedtestAttempt?.questionattempts?.map((attempt) => ({
    id: attempt.id,
    question: attempt.question.questiontext || "N/A",
    yourAnswer: attempt.selectedAnswer || "N/A",
    correctAnswer: attempt.question.correctanswer || "N/A",
    timeTaken: `${attempt.timeTaken} sec`,
    status: attempt.isCorrect ? "Correct" : "Incorrect"
  }));

  return (
    <ProtectedRoute roleRequired="USER">
      <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="mb-6">
        
        <Image
                        width={112}
                        height={112}
                        src={"/images/user/user-01.png"}
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                        alt={session?.user?.name}
                      />
        <h2 className="mt-3 text-lg font-semibold border-b pb-5 ">{session?.user?.name || "Guest User"}</h2>
        
        <p className="text-gray-500 mt-4">Test Analysis ({formatDate(selectedtestAttempt.completedAt) })</p>
        <h2 className="text-2xl font-bold ">{selectedtestAttempt?.testseries?.name}</h2>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Score</h3>
          <p className="text-3xl font-bold">{selectedtestAttempt.score}/{selectedtestAttempt?.testseries?.marksTotal}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Accuracy</h3>
          <progress value={test.accuracy} max="100" className="w-full"></progress>
          <p className="text-lg font-bold">{test.accuracy}%</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Status</h3>
          <p className={`text-2xl font-bold ${selectedtestAttempt.isPassed ? "text-green-800" : "text-red-500"}`}>{selectedtestAttempt.isPassed ? "Passed" : "Fail"}</p>
        </div>
      </div>

      {/* Question Analysis */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Question Analysis</h3>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Question</th>
              <th className="border p-2">Your Answer</th>
              <th className="border p-2">Correct Answer</th>
              <th className="border p-2">Time Taken</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            
            {questionAnalysis?.map((q) => (
              <tr key={q.id} className="border">
                <td className="border p-2 font-semibold" dangerouslySetInnerHTML={{ __html: q.question }}/>
                <td className="border p-2" dangerouslySetInnerHTML={{ __html: q.yourAnswer }}/> 
                <td className="border p-2" dangerouslySetInnerHTML={{ __html: q.correctAnswer }}/>
                <td className="border p-2" dangerouslySetInnerHTML={{ __html: q.timeTaken }} />
                <td className={`border p-2 ${q.status === "Correct" ? "text-green-500" : "text-red-500"}`}>{q.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="mt-6 flex space-x-4">
        
        <Link href={`/test-series/${selectedtestAttempt.testseriesId}`} className="px-4 py-2 bg-blue-500 text-white rounded">Retake Test</Link>
        
      </div>
    </div>
    </ProtectedRoute>
  );
}
