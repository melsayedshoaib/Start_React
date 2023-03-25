import React, { Component } from 'react'

import style from '../About/About.module.css'

export default class About extends Component {
  render() {
    return (
        <section className={`py-5 ${style.mainBg}`} id='about'>
            <div className="container py-5">
                <h2 className={`text-center ${style.h2Style}`}>ABOUT</h2>
                <div className={ `${style.divider}`}>
                    <div className={`${style.dividerLine}`}></div>
                    <i class={`fa-solid fa-star fs-3 text-white`}></i>
                    <div className={ `${style.dividerLine}`}></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <div className={`${style.lead}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <div className={`${style.lead}`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
                    </div>
                </div>
            </div>
      </section>
    )
  }
}
