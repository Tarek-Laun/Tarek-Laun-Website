import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter();

  return (
    <>
      <Head>
        <title>Tarek Laun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Header/>
        <div className={styles.about}>
          {router.locale == "en"
          ?<>
            <h2>Error 404</h2>
            <p>Page not found.</p>
          </>
          :<>
            <h2>Error 404</h2>
            <p>Seite nicht gefunden.</p>
          </>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
