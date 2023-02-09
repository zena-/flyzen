import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Quiz from "/components/Quiz"
// import Filted from "/components/Filted"

export default function Home() {
  return (
    <>
      <Head>
        <title>Did It & Ran</title>
        <meta name="description" content="We specialize in life experiences & peace of mind in travel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <h1>Did It & Ran</h1>
          <p>Have an adventure, get into trouble, experiences something new.</p>
        </nav>

        <div className={styles.quiz}>
          <Quiz />
        </div>

        <div className={styles.quiz}>
          {/*<Filted />*/}
        </div>

        <footer>
          <p className="none">Psalm 91</p>
          <p className="copyright">© All rights reserved Did It and Ran 2023</p>
          <p>made by <a href="https://nosazena.com" target="_blank">nosazena llc.</a></p>
        </footer>
      </main>
    </>
  )
}
