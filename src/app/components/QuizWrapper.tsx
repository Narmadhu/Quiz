import { ReactNode } from "react";

export default function QuizWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="text-gray-200 h-[100vh] flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
