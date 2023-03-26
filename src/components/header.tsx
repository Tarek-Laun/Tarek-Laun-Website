import headerstyle from '../styles/Header.module.css'

export default function Header() {
	
  	return (
      <header className={headerstyle.header}>
        <div className={headerstyle.content}>
          <div className={headerstyle.container}>
            <h2>Outer Space</h2> 
            <h4><a target="_blank" href='https://store.steampowered.com/app/2054270/Outer_Space/'>Wishlist now</a></h4>
          </div>
        </div>
      </header>
  	)
}