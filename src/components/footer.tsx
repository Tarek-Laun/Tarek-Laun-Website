import footerstyle from '../styles/Footer.module.css'
import { useRouter } from 'next/router'

export default function Footer() {
	const router = useRouter();

  return (
  <footer className={footerstyle.footer}>
    <ul>
		{router.locale == "en"
			?<>
			  <li><a href={"/" + router.locale + "/impr"}>imprint</a></li><br/>
			</>
			:<>
			  <li><a href={"/" + router.locale + "/impr"}>Impressum</a></li><br/>
			</>
		}
    </ul>
	</footer>
  )
}