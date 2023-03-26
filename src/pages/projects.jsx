import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Header from '../components/header'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Impr() {
  
  const router = useRouter();
	const [blockJump, setBlockJump] = useState(false);

  var OpenBlockJump = ()=> {
    setBlockJump(true);
  }

  var CloseBlockJump = ()=>  {
    setBlockJump(false);
  }

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
        <div className={styles.games}>
          {router.locale == "en"
          ?<>
            <h2>Projects</h2><br/>
            <div className={styles.cards}>
              <div className={styles.gameCard}>
                <img src='/SteamBibliothecsBanner.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Outer Space</h3>
                  <p>In Outer Space, you play either alone or with others as an astronaut who has to repair his spaceship in order to escape from this planet.</p>
                </div>
                <a target="_blank" href='https://store.steampowered.com/app/2054270/Outer_Space/'>Wishlist now</a>
              </div>
              <div className={styles.gameCard}>
                <img src='/BlockJumpBanner.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Block Jump</h3>
                  <p>Block Jump is a small jump and run game where you play a small block.</p>
                </div>
                <a onClick={OpenBlockJump} href='#'>Download now</a>
              </div>
              <div className={styles.gameCard}>
                <img src='/AceEngine.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Ace Engine Lite</h3>
                  <p>Ace Engine Lite is a 2D C++ Game Engine I work since 1 year.</p>
                </div>
                <a onClick={OpenBlockJump} href='#'>Read more</a>
              </div>
            </div>
          </>
          :<>
            <h2>Spiele</h2><br/>
            <div className={styles.cards}>
              <div className={styles.gameCard}>
                <img src='/SteamBibliothecsBanner.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Outer Space</h3>
                  <p>In Outer Space spielen Sie entweder alleine oder mit anderen als Astronaut, der sein Raumschiff reparieren muss, um von diesem Planeten zu entkommen.</p>
                </div>
                <a target="_blank" href='https://store.steampowered.com/app/2054270/Outer_Space/'>Wishlist now</a>
              </div>
              <div className={styles.gameCard}>
                <img src='/BlockJumpBanner.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Block Jump</h3>
                  <p>Block Jump ist ein kleines Jump & Run Game, wo du ein kleinen block spielst.</p>
                </div>
                <a onClick={OpenBlockJump} href='#'>Download now</a>
              </div>
              <div className={styles.gameCard}>
                <img src='/AceEngine.png'></img>
                <div className={styles.gameCardContent}>
                  <h3>Ace Engine Lite</h3>
                  <p>Ace Engine Lite ist eine 2D Game Engine geschrieben in C++.</p>
                </div>
                <a target="_blank" href='https://github.com/Tarek-Laun/AceEngineLite'>Read more</a>
              </div>
            </div>
          </>
          }
          {/* Block Jump Downloads */}
          {blockJump
          ?<>
          <div onClick={CloseBlockJump} className={styles.downloadBackground}>
            <div onClick={OpenBlockJump} className={styles.downloads}>
              <h3>Download Block Jump</h3>
              <a target="_blank" href='https://www.microsoft.com/store/productId/9NZD4LL0HWD9'>PC</a>
              <a target="_blank" href='https://www.xbox.com/de-DE/games/store/blockjump/9nzd4ll0hwd9'>Xbox</a>
              <a target="_blank" href='https://play.google.com/store/apps/details?id=de.SpeedGamesDevelopment.BlockJump&pli=1'>Android</a>
            </div>
          </div>
          </>
          :<></>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
