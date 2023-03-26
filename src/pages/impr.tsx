import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
import { useRouter } from 'next/router'

export default function Impr() {
  
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tarek Laun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <Header/>
        <div className={styles.about}>
          {router.locale == "en"
          ?<>
          <h2>Imprint</h2>
          <p>CEO: Tarek Laun</p>
          <p>Address: Katharinenstrasse 36,</p>
          <p>73728 Esslingen am Neckar,</p>
          <p>Germany</p>
          <p>Tel.: +49 0176 76753416</p>          
          <p>Email: <a href="mailto:tareklaun@hotmail.com"> tareklaun@hotmail.com</a></p>
          </>
          :<>
          <h2>Impressum</h2>
          <p>Geschäftsführer: Tarek Laun</p>
          <p>Adresse: Katharinenstraße 36,</p>
          <p>73728 Esslingen am Neckar,</p>
          <p>Deutschland</p>
          <p>Tel.: +49 0176 76753416</p>          
          <p>Email: <a href="mailto:tareklaun@hotmail.com"> tareklaun@hotmail.com</a></p>
          </>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
