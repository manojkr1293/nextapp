'use client';
import HomePageHeader from "@/app/component/HomePageHeader";
import { examItemModelActions } from "@/store/slices/examItemSlice";
import { testAttemptModelActions } from "@/store/slices/testAttemptSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ExamDetails({ params }) {
  const { data: session } = useSession();
  const { id } = params;
  const { examitem } = useSelector((state) => state.examItemModel);
  const dispatch = useDispatch();
  const [testAttemptStatuses, setTestAttemptStatuses] = useState({});

  useEffect(() => {
    dispatch(examItemModelActions.fetchexamItemOnIdSlice(id));

    if (session?.user?.id) {
      fetchTestAttemptStatuses();
    }
  }, [id, session]);

  const fetchTestAttemptStatuses = async () => {
    
    try {
      const attempts = await dispatch(
        testAttemptModelActions.fetchUserTestAttemptsSlice(session?.user?.id)
      ).unwrap();

      const attemptStatusMap = {};
      attempts.forEach((attempt) => {
        if (attempt.testseriesId) {
          attemptStatusMap[attempt.testseriesId] = attempt;
        }
      });
      setTestAttemptStatuses(attemptStatusMap);
    } catch (error) {
      console.error("Error fetching test attempts:", error);
    }
  };

  
  return (
    <div>
      <HomePageHeader />
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Exam Item Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h1 className="text-3xl font-semibold text-gray-900">{examitem.name}</h1>
          <p className="text-lg text-gray-600 mt-4">{examitem.description}</p>
        </div>

        {/* Test Series Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Test Series</h2>

          {examitem.testseries?.length === 0 ? (
            <p className="text-lg text-gray-600">No test series available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examitem.testseries?.map((test) => {
                const attempt = testAttemptStatuses[test.id];
                console.log(attempt)
                return (
                  <div key={test.id} className="bg-gray-50 p-5 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{test.name}</h3>
                    <p className="text-gray-600 mt-2">
                      <strong>Question Count:</strong> {test.questioncount}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Total Marks:</strong> {test.marksTotal}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Question Type:</strong> {test.questiontype}
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 space-x-2">
                     
                     
                    {attempt ? (
                      <>
                        {/* If attempt is completed, show Solution & Analysis buttons */}
                        {attempt.status === 'COMPLETED' && (
                          <>
                            <Link href={`/test-series/solution/${attempt.id}`}>
                              <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                                Solution
                              </button>
                            </Link>
                            <Link href={`/test-series/analysis/${attempt.id}`}>
                              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                                Analysis
                              </button>
                            </Link>
                            <Link href={`/test-series/${attempt.testseriesId}`}>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                              Re-Attempt
                            </button>
                          </Link>
                          </>
                        )}

                        {/* If attempt is incomplete, show Resume Test button */}
                        {attempt.status === 'IN_PROGRESS' && (
                          <Link href={`/test-series/attempt/${attempt.id}`}>
                            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                              Resume Test
                            </button>
                          </Link>
                        )}

                      </>
                    ) : (
                      <Link href={`/test-series/${test.id}`}>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                          Start Test
                        </button>
                      </Link>
                    )}

                   
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
