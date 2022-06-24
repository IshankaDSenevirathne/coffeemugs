import Image from "next/image"
export default function Hero() {
  return (
    <div className="">
        <div className="container mx-auto px-5 lg:px-20 mb-20">
            <div className="flex flex-col gap5 pt-20 md:grid md:grid-cols-6 justify-center items-center min-h-screen">
                <div className="md:col-span-3">
                    <h1 className=" flex text-5xl md:text-5xl xl:text-7xl font-bold text-black text-left max-w-2xl mb-10">
                        ENJOY WORLD’S FINEST COFFEE !
                    </h1>
                    <h5 className="flex text-md text-3xl xl:text-2xl font-bold text-[#C1C1C1] text-left">
                        We serve all the best kinds of coffee around the world. 
                    </h5>
                    <div className="mb-2">
                        <button className="mt-5 px-5 py-4 border border-[#7A3636] rounded-md text-lg font-bold text-[#7A3636] bg-white hover:bg-red-300 hover:text-black active:bg-grey-900 focus:outline-none transition-all w-56">
                            Start Brewing
                        </button>
                    </div>
                </div>
                <div className="p-10 md:p-0 md:col-span-3">
                    <Image src="/banner2.svg" width={2000} height={2000} alt="coffee"/>
                </div>
            </div>
        </div>
  </div>
  )
}
