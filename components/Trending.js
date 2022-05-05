import styles from '../styles/Home.module.css'

export default function Trending() {
  return (
    <div className="pb-20">
        <div className="mb-14">
            <h1 className="text-white font-bold text-5xl text-left">
                TRENDING DRINKS
            </h1>
        </div>
        <div className={styles.card1}>
            <div className="h-96 mb-20 shadow-xl">
                    <h1 className="text-right px-10 py-10 text-white text-4xl">
                        ESPRESSO
                    </h1>
                    <p className="text-white text-2xl px-44 text-center">
                        The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.
                    </p>
                    <h1 className="text-right px-10 text-white text-2xl">
                        5.99$
                    </h1>
            </div>
        </div>
        <div className={styles.card2}>
            <div className="h-128 mb-20 shadow-xl">
                <h1 className="text-left px-10 py-10 text-white text-4xl">
                    CAPPUCCINO
                </h1>
                <p className="text-white text-2xl px-44 text-center">
                    The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.
                </p>
                <h1 className="text-left px-10 text-white text-2xl">
                    8.99$
                </h1>
            </div>
        </div>
        <div className={styles.card3}>
        <div className="h-128 mb-20 shadow-xl">
            <h1 className="text-right px-10 py-10 text-white text-4xl">
                MOCHA
            </h1>
            <p className="text-white text-2xl px-44 text-center">
                The mocha is considered a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor and cuts the acidity of the espresso.
            </p>
            <h1 className="text-right px-10 text-white text-2xl">
                10.99$
            </h1>
        </div>
    </div>
    </div>
  )
}
