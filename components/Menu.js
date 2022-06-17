import Image from "next/image"

export default function Menu() {
  return (
    <div className="flex flex-col">
      <div className="mt-48 pb-20">
        <h1 className="text-4xl xl:text-6xl font-bold text-white text-center">Start brewing your coffee!</h1>
      </div>
      <div className=" mb-10 flex items-center justify-center text-[#7A3636]">
          <div className="grid grid-cols-3 gap-1 px-1">
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item1.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 5.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className=" text-md md:text-xl font-bold text-center py-2"> ESPRESSO </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item2.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 11.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className="text-md md:text-xl font-bold text-center py-2"> CAPPUCHINO </a>
                </div> 
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item3.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 8.99<span className="text-[#7A3636]">$</span></a>
                  </div>
                  <a href="#" className="text-md md:text-xl font-bold text-center py-2"> MACHO </a>
                </div> 
              </div>
          </div>    
      </div>
      <div className=" mb-10 flex items-center justify-center text-[#7A3636]">
          <div className="grid grid-cols-3 gap-1 px-1">
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item4.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 5.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className=" text-md md:text-xl font-bold text-center py-2"> ESPRESSO </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item5.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 11.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className="text-md md:text-xl font-bold text-center py-2"> CAPPUCHINO </a>
                </div> 
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item6.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 8.99<span className="text-[#7A3636]">$</span></a>
                  </div>
                  <a href="#" className="text-md md:text-xl font-bold text-center py-2"> MACHO </a>
                </div> 
              </div>
          </div>    
      </div>
      <div className=" mb-10 flex items-center justify-center text-[#7A3636]">
          <div className="grid grid-cols-3 gap-1 px-1">
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item7.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 5.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className=" text-md md:text-xl font-bold text-center py-2"> ESPRESSO </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="group bg-white delay-10 duration-300  flex flex-col hover:bg-red-300 hover:text-black">
                  <div className="relative">
                    <Image src="/item8.jpg" width={420} height={580} />
                    <a href="#" className="opacity-0 group-hover:opacity-100 delay-10 duration-300 absolute bottom-0 right-0 text-4xl mb-2 font-bold mr-2 text-center text-white"> 11.99<span className="text-[#7A3636]">$</span> </a>
                  </div>
                  <a href="#" className="text-md md:text-xl font-bold text-center py-2"> CAPPUCHINO </a>
                </div> 
              </div>
          </div>    
      </div>
    </div>
  )
}
