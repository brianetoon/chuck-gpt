import { NavLink } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className='site-header'>
      <div className="site-header__inner | container">
        <span className="site-header__logo | fs-500">Chuck GPT</span>
        <nav className="nav">
          <ul className="nav__list">
            <li><NavLink className="nav__link" to="/chat">Chat</NavLink></li>
            <li><NavLink className="nav__link" to="/favorites">Favorites</NavLink></li>
            <li><NavLink className="nav__link" to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
