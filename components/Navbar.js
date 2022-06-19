import {MenuIcon} from "@heroicons/react/outline"
import Image from "next/image"
export default function Navbar() {
  return (
        <div className="z-50 bg-white py-2 px-2 md:py-0 fixed border-b border-[#7A3636] top-0 left-0 flex justify-between items-center w-screen">
            <div className="lg:hidden">
                <Image src="/logo.svg" width={60} height={60} objectFit="contain"/>
            </div>
            <div className="hidden lg:block ml-10">
                <Image src="/logo.svg" width={100} height={100} objectFit="contain"/>
            </div>
            <div className="hidden md:flex flex-row mr-10">
                <h2 className="m-5 pr-5 text-[#494949] text-xl font-bold hover:border-r-8 hover:border-[#7A3636] delay-10 duration-200 cursor-pointer">
                Menu
                </h2>
                <h2 className="m-5 pr-5 text-[#494949] text-xl font-bold hover:border-r-8 hover:border-[#7A3636] delay-10 duration-200 cursor-pointer">
                News
                </h2>
                <h2 className="m-5 pr-5 text-[#494949] text-xl font-bold hover:border-r-8 hover:border-[#7A3636] delay-10 duration-200 cursor-pointer">
                About
                </h2>
                <h2 className="m-5 pr-5 text-[#494949] text-xl font-bold hover:border-r-8 hover:border-[#7A3636] delay-10 duration-200 cursor-pointer">
                Reviews
                </h2>
            </div>
            <MenuIcon className="text-black mr-2 md:hidden h-6 w-6"/>
        </div>  
  )
}
