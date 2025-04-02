"use client";

import { useSession } from "next-auth/react";
import ProtectedRoute from "../component/ProtectedRoute";
import HomePageHeader from "../component/HomePageHeader";
import { useDispatch } from "react-redux";
import { testAttemptModelActions } from "@/store/slices/testAttemptSlice";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  
  const [testAttempts, setTestAttemptStatuses] = useState({});
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (session?.user?.id) {
      fetchTestAttemptStatuses();
    }
  }, [session]);

  const fetchTestAttemptStatuses = async () => {
      try {
        const attempts = await dispatch(
          testAttemptModelActions.fetchUserTestAttemptsSlice(session?.user?.id)
        ).unwrap();
  
        const attemptStatusMap = {};
        attempts.forEach((attempt) => {
          if (attempt.id) {
            attemptStatusMap[attempt.id] = attempt;
          }
        });
        setTestAttemptStatuses(attemptStatusMap);
      } catch (error) {
        console.error("Error fetching test attempts:", error);
      }
  };

  console.log('testAttempts:',testAttempts);
 
  return (
    <ProtectedRoute roleRequired="USER">
      <HomePageHeader/>
    
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Exam Item Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h1 className="text-3xl mb-5 font-semibold text-gray-900">Welcome, {session?.user?.name}!</h1>
        {!testAttempts || Object.keys(testAttempts).length === 0 &&
          <p>No test attempts found.</p>
        }
        <ul className="space-y-4">
            {Object.values(testAttempts).map((attempt) => (
              <li
                key={attempt.id}
                className="border p-4 rounded-lg shadow-md bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {attempt.testseries.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      <strong>Score:</strong> {attempt.score}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Total Marks:</strong> {attempt.testseries.marksTotal}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <strong>Question Count:</strong> {attempt.testseries.questioncount}
                    </p>
                  </div>
                  <div className="space-x-2">
                    {attempt.status === "IN_PROGRESS" ? (
                      <Link href={`/test-series/attempt/${attempt.id}`}>
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                          Go to Test
                        </button>
                      </Link>
                    ) : (
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
    
    </ProtectedRoute>
  );
}
