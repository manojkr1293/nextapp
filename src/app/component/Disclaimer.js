import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export default function DisclaimerPage({ onAgree,testesries }) {
  const { data: session } = useSession();
  return (

    <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Section: Test Solutions */}
            <div className="flex-1 p-6">
              
              <div className="border p-4 rounded-lg shadow-md">
              <div className=" flex flex-col items-center justify-center  p-4">
     
        <h1 className="text-2xl font-bold text-center mb-6">General Instructions</h1>

        <div className="text-gray-700 space-y-4 h-[700px] overflow-y-auto border p-4 rounded-lg bg-white shadow-md">
          <p>
            <strong>1.</strong> The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.
          </p>
          <p>
            <strong>2.</strong> The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:
          </p>
          <div className="flex flex-col space-y-2 pl-4">
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-gray-300 rounded"></span>
              <span>You have not visited the question yet.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-red-500 rounded"></span>
              <span>You have not answered the question.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-green-500 rounded"></span>
              <span>You have answered the question.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-blue-500 rounded"></span>
              <span>You have not answered the question, but have marked the question for review.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 bg-purple-500 rounded"></span>
              <span>You have answered the question, but marked it for review.</span>
            </div>
          </div>

          <p>
            The <strong>Mark For Review</strong> status for a question simply indicates that you would like to look at that question again. If a question is answered but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.
          </p>

          <p><strong>3.</strong> <u>Navigating to a Question:</u></p>
          <ul className="list-decimal list-inside pl-4 space-y-2">
            <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
            <li>Click on <strong>Save & Next</strong> to save your answer for the current question and then go to the next question.</li>
            <li>Click on <strong>Mark for Review & Next</strong> to save your answer for the current question and also mark it for review, and then go to the next question.</li>
          </ul>

          <p><strong>4.</strong> <u>Answering a Question:</u></p>
          <ul className="list-decimal list-inside pl-4 space-y-2">
            <li>Choose one answer from the 4 options (A, B, C, D) given below the question, click on the bubble placed before the chosen option.</li>
            <li>To deselect your chosen answer, click on the bubble of the chosen option again or click on the <strong>Clear Response</strong> button.</li>
            <li>To change your chosen answer, click on the bubble of another option.</li>
            <li>To save your answer, you MUST click on the <strong>Save & Next</strong> button.</li>
          </ul>

          <p><strong>5.</strong> Procedure for answering a numerical answer type question:</p>
          <ul className="list-decimal list-inside pl-4 space-y-2">
            <li>To enter an answer to a numerical question, use the virtual numerical keypad.</li>
            <li>A fraction (e.g., -0.3 or -.3) can be entered as an answer with or without "0" before the decimal point. As many as four decimal points, e.g., 12.5435 or 0.003 or -932.6711 or 12.82 can be entered.</li>
            <li>To clear your answer, click on the <strong>Clear Response</strong> button.</li>
            <li>To save your answer, you must click on the <strong>Save & Next</strong> button.</li>
          </ul>

          <p>
            Note that only questions for which answers are <strong>saved or marked for review after answering</strong> will be considered for evaluation.
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button
           onClick={onAgree}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
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
      <div className=" justify-items-center">
      <p className="text-sm font-bold mb-4">Test Series </p>
      <h1 className="text-2xl font-bold mb-4"> {testesries.name}</h1>
      </div>
     
     
    </div>
    
          </div>

    
  );
}
