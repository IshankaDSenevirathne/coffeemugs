
export default function Navbar() {
  return (
        <div className="flex flex-row justify-between text-center items-center">
            <h1 className="m-5 text-white text-3xl font-bold">
                CafeMugs
            </h1>
            <div className="flex flex-row">
                <h2 className="m-5 px-5 text-[#494949] text-xl font-bold">
                Menu
                </h2>
                <h2 className="m-5 px-5 text-[#494949] text-xl font-bold">
                News
                </h2>
                <h2 className="m-5 px-5 text-[#494949] text-xl font-bold">
                About
                </h2>
            </div>
        </div>
  )
}
