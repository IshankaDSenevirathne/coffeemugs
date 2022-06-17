import styles from '../styles/Home.module.css'

export default function Trending() {
  return (
    <div className="w-screen">
        <div>
            <div className="">
                <h1 className="text-4xl xl:text-6xl font-bold text-black text-left px-5 pb-20">Popular this month!</h1>
            </div>
            <div className={styles.card1}>
                <div className="hidden h-128 shadow-2xl md:flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-right lg:text-right lg:px-10 text-[#7A3636] font-bold text-4xl xl:text-6xl">
                            Espresso
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                            Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 lg:pr-10 font-bold text-white text-3xl xl:text-5xl">
                            5.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card1mobile}>
                <div className="md:hidden h-128 shadow-2xl flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-right lg:text-right lg:px-10 text-[#7A3636] font-bold text-4xl xl:text-6xl">
                            Espresso
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                            Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 lg:pr-10 font-bold text-white text-3xl xl:text-5xl">
                            5.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card2}>
                <div className="hidden h-128 shadow-2xl sm:flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-left lg:px-10 text-white font-bold text-4xl xl:text-6xl">
                            Macho
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                        Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-left pb-10 lg:pl-10 font-bold text-white text-3xl xl:text-5xl">
                            12.99<span style={{"color":"#222121"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card2mobile}>
                <div className="sm:hidden h-128 shadow-2xl flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-left lg:px-10 text-white font-bold text-4xl xl:text-6xl">
                            Macho
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                            Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-left pb-10 lg:pl-10 font-bold text-white text-3xl xl:text-5xl">
                            12.99<span style={{"color":"#222121"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card3}>
                <div className="hidden h-128 shadow-2xl sm:flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-right lg:text-right lg:px-10 text-[#7A3636] font-bold text-4xl xl:text-6xl">
                            Cappachino
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                            Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 lg:pr-10 font-bold text-white text-3xl xl:text-5xl">
                            5.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
            <div className={styles.card3mobile}>
                <div className="sm:hidden h-128 shadow-2xl flex flex-col justify-between py-8 px-5 xl:px-20">
                        <h1 className="text-right lg:text-right lg:px-10 text-[#7A3636] font-bold text-4xl xl:text-6xl">
                            Cappachino
                        </h1>
                        <p className="text-white text-xl xl:text-2xl xl:px-96 text-left lg:text-center">
                            Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks. Its made from the same beans as coffee but is stronger, thicker, and higher in caffeine. However, because espresso is typically served in smaller servings than coffee, it has less caffeine per serving.
                        </p>
                        <h1 className="text-right pb-10 lg:pr-10 font-bold text-white text-3xl xl:text-5xl">
                            5.99<span style={{"color":"#7A3636"}}>$</span>
                        </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

