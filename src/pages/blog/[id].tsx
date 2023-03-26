import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { useRouter } from 'next/router'

export default function Blog() {
	const router = useRouter();
    const { id } = router.query

  return (
    <>
      <Head>
        <title>LK Entertainment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Header/>
        <div className={styles.blog}>
          <h2>{id}</h2>
          {router.locale == "en"
          ?<>

          </>
          :<>
              
          </>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
