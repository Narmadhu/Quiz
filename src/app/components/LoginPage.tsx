export default function LoginPage({
  handleUser,
  currentUserName,
}: {
  handleUser: (e: any) => void;
  currentUserName: string;
}) {
  return (
    <>
      <div className="first-section">
        <div className="bg-white  p-8 rounded-[50%] font-bold text-right">
          <h1 className="text-[#004643] text-3xl">Quiz</h1>
          <span className="text-[#F8C660]">Khelo</span>
        </div>
      </div>
      <div className="second-section w-full">
        <div className="input-wrapper mx-4">
          <span className="text-gray">Enter your name</span>
          <div className="input-div mt-4">
            <input
              type="text"
              placeholder="John Doe..."
              className="bg-transparent border-gray-200 border p-4 rounded-3xl w-full outline-none"
              onChange={handleUser}
              value={currentUserName}
            />
          </div>
        </div>
      </div>
    </>
  );
}
