
const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
      
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-center text-white animate-pulse">
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  );
};
export default Loader;
