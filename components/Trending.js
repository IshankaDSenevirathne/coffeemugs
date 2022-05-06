import styles from '../styles/Home.module.css'

export default function Trending() {
  return (
    <div>
        <div className="mb-14">
            <h1 className="text-white font-bold text-4xl text-left">
                Trending Drinks
            </h1>
        </div>
        <div>
            <div className={styles.card1}>
                <div className="h-96 shadow-xl">
                        <h1 className="text-right px-10 py-10 text-white text-3xl">
                            Espresso
                        </h1>
                        <p className="text-white text-2xl px-44 text-center">
                            The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.
                        </p>
                        <h1 className="text-right px-10 text-white text-2xl">
                            5.99$
                        </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

