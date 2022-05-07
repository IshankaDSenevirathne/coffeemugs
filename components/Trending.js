import styles from '../styles/Home.module.css'

export default function Trending() {
  return (
    <div className="w-screen">
        <div>
            <div className="">
                <h1 className="text-6xl font-bold text-white text-left pl-44 pb-20">Popular this month!</h1>
            </div>
            <div className={styles.card1}>
                <div className="h-128 shadow-2xl flex flex-col justify-between py-8 px-20">
                        <h1 className="text-right px-10 text-[#7A3636] font-bold text-6xl">
                            Espresso
                        </h1>
                        <p className="text-white  text-2xl px-96 text-center">
                        Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. It's made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 pr-10 font-bold text-white text-5xl">
                            5.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card2}>
                <div className="h-128 shadow-2xl flex flex-col justify-between py-8 px-20">
                        <h1 className="text-left px-10 text-white font-bold text-6xl">
                            Macho
                        </h1>
                        <p className="text-white  text-2xl px-96 text-center">
                        Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. It's made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-left pb-10 pl-10 font-bold text-white text-5xl">
                            12.99<span style={{"color":"#222121"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card3}>
                <div className="h-128 shadow-2xl flex flex-col justify-between py-8 px-20">
                        <h1 className="text-right px-10 text-[#7A3636] font-bold text-6xl">
                            Cappuchino
                        </h1>
                        <p className="text-white  text-2xl px-96 text-center">
                        Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. It's made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 pr-10 font-bold text-white text-5xl">
                            6.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

