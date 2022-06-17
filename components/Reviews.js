import styles from '../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className=" h-128 bg-red-300 text-white flex flex-col mt-40">
        <div className="h-128 shadow-2xl flex flex-col justify-center py-8 ">
                <h1 className="text-center  text-[#7A3636] font-bold text-5xl xl:text-6xl my-10 ">
                  How does it taste ?
                </h1>
                <p className="text-white  text-2xl xl:px-80 text-left px-5">
                Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                </p>
        </div>
    </div>
  )
}