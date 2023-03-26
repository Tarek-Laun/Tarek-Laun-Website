import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { useRouter } from 'next/router'

export default function Blog() {
	const router = useRouter();

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
          <h2>Blog</h2>
          {router.locale == "en"
          ?<>
            <div className={styles.blogentrys}>
              <a href={"/" + router.locale + "/blog/Outer-Space-Redesign"}><div className={styles.blogEntry} style={{borderRadius: "10px 10px 0 0"}}>
                <img src='/SteamBibliothecsBanner.png' style={{borderRadius: "10px 0 0 0"}}></img>
                <div className={styles.blogContent}>
                  <h3>Outer Space Redesign.</h3>
                  <p>Outer Space got Completely Redesign.</p>
                </div>
              </div></a>
            </div>
          </>
          :<>
            <div className={styles.blogentrys}>
              <div className={styles.blogEntry} style={{borderRadius: "10px 10px 0 0"}}>
                <img src='/SteamBibliothecsBanner.png' style={{borderRadius: "10px 0 0 0"}}></img>
                <div className={styles.blogContent}>
                  <h3>Blog Title</h3>
                  <p>Description for the Blog Entry.</p>
                </div>
              </div>
            </div>
          </>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
