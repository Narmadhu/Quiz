import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { useEffect, useState } from "react";
import { questionsData, usersScoreData } from "../../../public/questionData";
import ResultPage, { UserScore } from "./ResultPage";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import person1 from "../../../public/images/person1.jpg";
import ProgressTimer from "./Timer";
import "./Question.css";
import { IconButton } from "@mui/joy";

export interface SelectedAnswer {
  [key: number]: string;
}

export default function Questions({
  currentUserName,
}: {
  currentUserName: string;
}) {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer>({});
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [userScoreList, setUserScoreList] = useState<Array<UserScore>>(
    [] as UserScore[]
  );
  const [volume, setVolume] = useState(true);

  const currentQuestion = questionsData[activeQuestionIdx];
  const clickSound = new Audio("./sounds/select.wav");
  const nextSound = new Audio("./sounds/nextBtnClick.wav");

  const handleNext = () => {
    if (volume) nextSound.play();
    if (questionsData.length - 1 === activeQuestionIdx) {
      setShowResult(true);
      setTimer(0);
      const correctAnswers = questionsData.filter((data, idx) =>
        Object.entries(selectedAnswers).some(
          (selectedAnswer) =>
            selectedAnswer[0] === idx.toString() &&
            selectedAnswer[1] === data.answer
        )
      );
      const totalScore = {
        id: "4",
        userName: currentUserName,
        score: `${correctAnswers.length}/${questionsData.length}`,
        image: {
          src: person1,
          width: 84,
          height: 84,
        },
      };
      const list = [...usersScoreData, totalScore];
      const calculateScore = list.sort(
        (a, b) => parseInt(b.score) - parseInt(a.score)
      );
      const second = calculateScore.splice(1, 1)[0];
      calculateScore.unshift(second);
      setUserScoreList(calculateScore);
    } else {
      const alreadyAnswerSelected = Object.keys(selectedAnswers).some(
        (key) => key === (activeQuestionIdx + 1).toString()
      );
      alreadyAnswerSelected ? setTimer(0) : setTimer(30);
      setActiveQuestionIdx((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    setTimer(0);
    setActiveQuestionIdx((prev) => prev - 1);
  };

  const handleOption = (val: string) => {
    if (volume) clickSound.play();
    const findAnswer = Object.entries(selectedAnswers).find(
      (entry) => entry[0] === activeQuestionIdx.toString() && entry[1] === val
    );
    const updated = Object.fromEntries(
      Object.entries(selectedAnswers).filter(
        (answers) =>
          answers[0] !== activeQuestionIdx.toString() && answers[1] === val
      )
    );
    if (findAnswer?.length! > 0) {
      setSelectedAnswers(updated);
    } else {
      setSelectedAnswers({ ...selectedAnswers, [activeQuestionIdx]: val });
    }
  };

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      {showResult ? (
        <ResultPage
          userScoreList={userScoreList}
          currentUserName={currentUserName}
          volume={volume}
        />
      ) : (
        <div className="relative text-black h-[90vh] max-w-[430px] w-full bg-gray-200 mx-auto flex flex-col">
          <div className="custom-scrollbar overflow-auto mb-20 px-4">
            <div className="header flex justify-between px-4 pt-8">
              {activeQuestionIdx !== 0 ? (
                <button onClick={handleBack} disabled={activeQuestionIdx === 0}>
                  <KeyboardArrowLeftRoundedIcon />
                  <span>Previous</span>
                </button>
              ) : null}

              <span className="mr-14">{`${activeQuestionIdx + 1} / ${
                questionsData.length
              }`}</span>

              <IconButton onClick={() => setVolume((pre) => !pre)}>
                {volume ? (
                  <VolumeUpIcon style={{ color: "black" }} />
                ) : (
                  <VolumeOffIcon />
                )}
              </IconButton>
            </div>
            <div>
              <div className="question-wrapper relative mt-12">
                <div className="bg-white h-56 rounded-3xl flex items-center justify-center">
                  <span className="w-[80%]">{currentQuestion.question}</span>
                </div>
                <div className="absolute -top-[45px] left-[38%]">
                  <ProgressTimer timer={timer} volume={volume} />
                </div>
              </div>
              {currentQuestion.options.map((option, idx) => (
                <div className="options-wrapper" key={idx}>
                  <div className="option my-4 font-bold">
                    <button
                      type="button"
                      className={`w-full flex justify-between items-center p-3 rounded-2xl ${
                        Object.entries(selectedAnswers).find(
                          (answer) =>
                            answer[0] === activeQuestionIdx.toString() &&
                            answer[1] === option
                        ) !== undefined
                          ? "bg-[#ABD1C6]"
                          : "bg-white"
                      }`}
                      onClick={() => handleOption(option)}
                      disabled={timer === 0}
                    >
                      <span>{option}</span>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={
                          Object.entries(selectedAnswers).find(
                            (answer) =>
                              answer[0] === activeQuestionIdx.toString() &&
                              answer[1] === option
                          ) !== undefined
                        }
                        onChange={() => handleOption(option)}
                        className={`${timer === 0 ? "" : "cursor-pointer"}`}
                        disabled={timer === 0}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-wrapper w-full text-center absolute left-0 bottom-0 px-8 py-4">
            <div className="btn-div text-white">
              <button
                className="bg-[#004643] w-full py-3 rounded-2xl"
                onClick={handleNext}
                disabled={
                  timer === 0
                    ? timer !== 0
                    : Object.entries(selectedAnswers).find(
                        (entry) => entry[0] === activeQuestionIdx.toString()
                      ) === undefined
                }
              >
                {questionsData.length - 1 === activeQuestionIdx
                  ? "My Score"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
