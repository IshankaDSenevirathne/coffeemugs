
export default function Hero() {
  return (
    <div>
        <div className="container mx-auto px-20">
            <div className="flex flex-row justify-center items-center min-h-screen">
            <div>
                <h1 className="flex-1 text-7xl font-bold text-white text-left max-w-2xl mb-28">
                GET TO ENJOY, WORLD’S FINEST COFFEE!
                </h1>
                <h5 className="flex-1 text-2xl font-bold text-[#C1C1C1] text-left">
                We serve all the best kinds of coffee around the world. 
                </h5>
                <div className="mb-2">
                <button className="mt-5 px-5 py-4 rounded-md text-lg font-medium text-[#7A3636] bg-white hover:bg-indigo-800 active:bg-grey-900 focus:outline-none transition-all w-56">
                    Start Brewing
                </button>
                </div>
            </div>
            <div className="flex-1 max-w-xl">
                <img src="/cup.svg" alt="coffee"/>
            </div>
            </div>
        </div>
  </div>
  )
}
