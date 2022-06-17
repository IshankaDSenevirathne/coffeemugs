
export default function Footer() {
  return (
    <div>
    <div className="flex flex-row bg-black text-white pb-14 pt-14 h-fit items-center justify-center text-start">
        <div className="mb-14 grid grid-cols-4 gap-10 px-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#7A3636] text-md xl:text-xl text-left">
              Online Shopping
            </h1>
            <p className="text-xs md:text-sm ">
              Delivery Information and FAQ
            </p>
            <p className="text-xs md:text-sm ">
              Terms and conditions
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#7A3636] text-md xl:text-xl text-left">
              Store Areas
            </h1>
            <p className="text-xs md:text-sm ">
              New Products
            </p>
            <p className="text-xs md:text-sm "> 
              Special Offers
            </p>
            <p className="text-xs md:text-sm ">
              Trade Coffee?
            </p>
            <p className="text-xs md:text-sm ">
              Trade Coffee/White Label
            </p>
            <p className="text-xs md:text-sm ">
              Signature blend
            </p>
            <p className="text-xs md:text-sm ">
              Blog
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#7A3636] text-md xl:text-xl text-left">
              Brewing Guide
            </h1>
            <p className="text-xs md:text-sm ">
              Brew Guide
            </p>
            <p className="text-xs md:text-sm ">
              The Coffee Bean Journey
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#7A3636] text-md xl:text-xl text-left">
              About us
            </h1>
            <p className="text-xs md:text-sm ">
              About CafeMugShop
            </p>
            <p className="text-xs md:text-sm ">
              Terms of Service
            </p>
            <p className="text-xs md:text-sm ">
              Refund policy
            </p>
          </div>
        </div>
        </div>
        <div className= "bg-black text-white pb-4 pt-4 h-fit items-center justify-center text-center">
          <p>© 2022 CafeMugs . All Rights reserved</p>
        </div>
      </div>
  )
}
