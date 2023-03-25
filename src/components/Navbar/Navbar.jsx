import React, { Component } from 'react'

import { Link } from 'react-scroll'
import style from './Navbar.module.css'

export default class Navbar extends Component {
  resizeHeaderOnScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0.5rem 0";
      } else {
        document.getElementById("navbar").style.padding = "1.5rem 0";
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  render() {
    return (
      <div>
        <nav className={ `navbar navbar-expand-lg bg-body-tertiary ${style.navStyle}`} id='navbar'>
          <div className="container">
              <a className={`${style.navbrandStyle} navbar-brand`} href="#">START REACT</a>
            <button className={ `navbar-toggler ${style.navtogglerStyle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className='fs-6'>Menu</span>
              <i className="fa-solid fa-bars ps-2 fs-6"></i>
              </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-3">
                      <Link to='portfolio' spy={true} smooth={true} duration={500} offset={-50} activeClass={style.activeNav} activeStyle={{backgroundColor: '#1abc9c'}} className={`${style.navlinkStyle} nav-link`}>PORTFOLIO</Link>
                    </li>
                    <li className="nav-item me-3">
                      <Link to='about' spy={true} smooth={true} duration={500} offset={-50} activeClass={style.activeNav} activeStyle={{backgroundColor: '#1abc9c'}} className={`${style.navlinkStyle} nav-link`}>ABOUT</Link>
                    </li>
                    <li className="nav-item me-3">
                      <Link to='contact' spy={true} smooth={true} duration={500} offset={-50} activeClass={style.activeNav} activeStyle={{backgroundColor: '#1abc9c'}} className={`${style.navlinkStyle} nav-link`}>CONTACT</Link>
                    </li>
                  </ul>
                </div>
          </div>
        </nav>
      </div>
    )
  }
}
