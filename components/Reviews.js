import styles from '../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className="w-screen h-128 bg-red-300  text-white flex flex-col mt-40">
      <div className="  ">
        <div className="h-128 shadow-2xl flex flex-col justify-between py-8 px-20">
                <h1 className="text-left px-10 text-[#7A3636] font-bold text-6xl">
                  How does it taste ?
                </h1>
                <p className="text-white  text-2xl px-96 text-center">
                Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                </p>
                <h1 className="text-right pb-10 pr-10 font-bold text-white text-5xl">
                    5.99<span style={{"color":"#7A3636"}}>$</span>
                </h1>
        </div>
      </div>
    </div>
  )
}