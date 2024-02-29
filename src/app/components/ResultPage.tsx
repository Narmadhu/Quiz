import Image, { StaticImageData } from "next/image";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import crown from "../../../public/images/crown.svg";
import "./ResultPage.css";
import { useEffect } from "react";

export interface UserScore {
  id: string;
  userName: string;
  score: string;
  image: {
    src: StaticImageData;
    width: number;
    height: number;
  };
}

export default function ResultPage({
  userScoreList,
  currentUserName,
  volume,
}: {
  userScoreList: UserScore[];
  currentUserName: string;
  volume: boolean;
}) {
  const topThree = userScoreList.slice(0, 3);
  const remaining = userScoreList.slice(3, userScoreList.length);
  const currentUserInTopThree = topThree.some(
    (top) => top.userName === currentUserName
  );
  useEffect(() => {
    if (currentUserInTopThree) {
      const applause = new Audio("./sounds/applause.wav");
      if (volume) applause.play();
    }
  }, [currentUserInTopThree, volume]);

  return (
    <div className="text-black h-[80vh] max-w-[430px] w-full bg-gray-200 m-auto flex flex-col overflow-auto">
      <div className="bg-[#004643] h-96 w-full overflow-hidden relative back">
        <div className="header flex justify-between items-center text-white w-3/5 p-4">
          {/* <button onClick={handleBack} disabled={activeQuestionIdx === 0}>
            <KeyboardArrowLeftRoundedIcon />
          </button> */}
          <span>Leader Board</span>
        </div>
        <div className="flex justify-center items-center h-full">
          {topThree.map((user, idx) => (
            <div
              key={user.id}
              className={`w-20 ${
                idx === 1 ? "h-4/5" : "h-20"
              } m-3 flex flex-col items-center`}
            >
              {idx === 1 ? (
                <Image src={crown} alt="crown" width={50} height={50} />
              ) : null}

              <Image
                className={`rounded-[50%] w-full ${
                  idx === 1 ? "h-20" : "h-20"
                }`}
                src={user.image.src}
                alt=""
                width={user.image.width}
                height={user.image.height}
              />
              <span className="text-white text-sm">{user.userName}</span>
              <span className="text-white text-xs font-thin">{user.score}</span>
            </div>
          ))}
        </div>
        {/* <div className="new"></div> */}
      </div>

      <div className="rounded-t-full px-4">
        {remaining.map((option, idx) => (
          <div className="options-wrapper" key={idx}>
            <div className="option my-4 font-bold">
              <button
                type="button"
                className="w-full flex justify-between items-center p-3 rounded-2xl bg-white"
              >
                <div className="flex items-center">
                  <span>{idx + 4}. </span>
                  <Image
                    className="rounded-[50%] mx-2"
                    width={25}
                    height={25}
                    src={option.image.src}
                    alt=""
                  />
                  <span>{option.userName}</span>
                </div>
                <span>{option.score}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
