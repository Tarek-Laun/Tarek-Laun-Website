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
            <h2>About me</h2>
            <p>My name is Tarek Laun.<br/>
            I've been learning programming since I was 9 and started with the C# programming language and then tried more and more programming languages.<br/>
            By now I would say I have mastered C#, HTML, CSS, JavaScript and C++.<br/>
            In 2020, I also released my first game called Block Jump.<br/>
            </p>
            <p>
            Other information about me, I like to listen to EDM music, but actually I can listen to any kind of music, I also love cats and dogs and have a little cat myself.<br/>
            My hobbies besides programming are VR, video games and electronics.<br/>
            And my favorite games are Portal 2, UNO and Beat Saber.
            </p>
          </>
          :<>
            <h2>Über mich</h2>
            <p>Mein Name ist Tarek Laun.<br/>
            Ich lerne seit dem ich 9 bin Programmieren und habe mit der Programmiersprache C# angefangen und dann immer mehr Programmiersprachen ausprobiert.<br/>
            Mittlerweile würde ich sagen beherrsche ich C#, HTML, CSS, Javascript und C++.<br/>
            2020 habe ich ebenso mein erstes spiel veröffentlicht namens Block Jump.<br/>
            </p>
            <p>
            Sonstige Informationen über mich, ich höre gerne EDM Musik, aber eigentlich kann ich jede Musikrichtung hören, ebenso liebe ich Katzen und Hunde und habe selber eine kleine Katze.<br/>
            Meine Hobbys neben Programmieren sind VR, Video Games und Elektronik.<br/>
            Und meine Lieblings-Games sind Portal 2, UNO und Beat Saber.
            </p>
          </>
          }
        </div>
      </main>
      <Footer/>
    </>
  )
}
