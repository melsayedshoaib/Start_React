import '../../index.css'

import React, { Component } from 'react'

import image from '../../assets/images/avataaars.svg'
import style from '../Header/Header.module.css'

export default class Header extends Component {
  render() {
    return (
        <header className={`${style.headerStyle}`}>
            <img className={style.imageStyle} src={image} />
            <h1 className={style.h1Style}>START REACT</h1>
            <div className={ `${style.divider}`}>
              <div className={`${style.dividerLine}`}></div>
              <i class="fa-solid fa-star fs-3 text-white"></i>
              <div className={ `${style.dividerLine}`}></div>
            </div>
            <p className='text-white fs-3 text-center'>Graphic Artist - Web Designer - Illustrator</p>
        </header>
    )
  }
}
