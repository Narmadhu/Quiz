"use client";

export default function StartButton({
  handleStartBtn,
  currentUserName,
}: {
  handleStartBtn: (val: boolean) => void;
  currentUserName: string;
}) {
  return (
    <div className="btn-wrapper w-full text-center">
      <div className="btn-div  text-white mx-4">
        <button
          className="bg-[#F8C660] w-full py-3 rounded-2xl"
          onClick={() => {
            handleStartBtn(true);
          }}
          disabled={!currentUserName}
        >
          Start
        </button>
      </div>
    </div>
  );
}
