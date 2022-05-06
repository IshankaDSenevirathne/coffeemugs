import Image from "next/image"

export default function Menu() {
  return (
    <div className="flex flex-col">
      <div className="mt-40 mb-10 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 px-16">
              <div className="flex flex-col gap-1">
                <div href="" className="">
                  <Image src="/cup2.png" width={285} height={380} className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100  " />
                </div>
                <a href="#" className=" text-gray-200 font-semibold text-center"> ESPRESSO </a>
                <a href="#" className=" text-sm text-gray-200 -mt-1 text-center"> 5.99$ </a>
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className=" ">
                  <Image src="/cup3.png" width={285} height={380} className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100  " />
                </div> 
                <a href="#" className="] text-gray-200 font-semibold text-center"> CAPPUCHINO </a>
                <a href="#" className=" text-sm text-gray-200 -mt-1 text-center"> 6.99$ </a>
              </div>
              <div className="flex flex-col gap-1">
                <div href="" className="">
                  <Image src="/cup4.png" width={285} height={380} className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100  " />
                </div>
                  <a href="#" className=" text-gray-200 font-semibold text-center"> MOCHA </a>
                  <a href="#" className=" text-sm text-gray-200 -mt-1 text-center"> 11.99$ </a>
              </div>
          </div>    
      </div>
    </div>
  )
}
