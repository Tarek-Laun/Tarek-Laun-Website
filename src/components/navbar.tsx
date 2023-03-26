import navstyle from '../styles/Nav.module.css'
import { atom, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Navbar() {
	
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
	const [user, setUser] = useState();
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const router = useRouter();
	var searchJobs = false;
	var login = false;

  useEffect(() => {
    if (window.innerWidth < 400) {
      setTitle("Tarek Laun");
    }else {
      if (router.locale == "en") {
        setTitle("Tarek Laun");
      }else {
        setTitle("Tarek Laun");
      }
    }
  })

  var toggelShow = ()=> {
    if (show) {
      setShow(false);
      document.getElementById("links")?.classList.add(navstyle.close);
      document.getElementById("links")?.classList.remove(navstyle.open);
    }else {
      setShow(true);
      document.getElementById("links")?.classList.add(navstyle.open);
      document.getElementById("links")?.classList.remove(navstyle.close);

    }
  }

  return (
  	<nav className={navstyle.n}>
    	<div className={navstyle.nav}>
    		<a href={"/" + router.locale}><h1 className={navstyle.h1}><span style={{color: "#5c9aff"}} id="title">{title}</span></h1></a>

        <a onClick={toggelShow} className={navstyle.menuLink} id="MenuLink"><img src='/Menu.svg'></img></a>
    		<div className={[navstyle.links, navstyle.close].join(" ")} id="links">
    			{router.locale == "en"
    			?<>
    			<a href={"/" + router.locale}>About me</a>
    			<a href={"/" + router.locale + "/projects"}>Projects</a>
    			</>
    			:<>
    			<a href={"/" + router.locale}>Über mich</a>
    			<a href={"/" + router.locale+ "/projects"}>Projekte</a>
    			</>
    			}

    		</div>
    	</div>
    </nav>
  )
}