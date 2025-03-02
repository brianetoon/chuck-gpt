import { NavLink } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className='site-header'>
      <div className="site-header__inner | container">
        <span className="site-header__logo">Chuck GPT</span>
        <nav className="site-header__nav">
          <ul className="site-header__nav-list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/chat">Chat</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
