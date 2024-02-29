"use client";

import { useState } from "react";
import QuizWrapper from "../components/QuizWrapper";
import StartButton from "../components/StartButton";
import Questions from "../components/Questions";
import LoginPage from "../components/LoginPage";

export default function QuizGrid() {
  const [quizStarts, setQuizStarts] = useState<boolean>(false);
  const [currentUserName, setCurrentUserName] = useState<string>("");

  const handleStartBtn = (value: boolean) => {
    setQuizStarts(value);
  };

  const handleUser = (e: any) => {
    setCurrentUserName(e.target.value);
  };

  return (
    <QuizWrapper>
      {quizStarts ? (
        <Questions currentUserName={currentUserName} />
      ) : (
        <div className="text-gray-200 h-[90vh] max-w-[430px] w-full bg-teal-900 m-auto flex flex-col items-center justify-around">
          <LoginPage
            handleUser={handleUser}
            currentUserName={currentUserName}
          />
          <StartButton
            handleStartBtn={handleStartBtn}
            currentUserName={currentUserName}
          />
        </div>
      )}
    </QuizWrapper>
  );
}
