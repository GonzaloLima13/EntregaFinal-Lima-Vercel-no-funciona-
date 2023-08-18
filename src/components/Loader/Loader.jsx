export const Loader = () => {
  return (
    <div className="flex w-full flex-grow flex-col bg-slate-700 p-35 justify-center items-center">
      <div className="w-20 h-20 flex justify-center items-center">
        <div className="loader flex">
          <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce my-2 mx-2 delay-100"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce my-2 mx-2 delay-200"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce my-2 mx-2 delay-300"></div>
        </div>
      </div>
    </div>
  );
};