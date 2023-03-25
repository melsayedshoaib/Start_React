import React, { Component } from 'react'

import style from './ScrollToTop.module.css'

export default class ScrollToTop extends Component {
    resizeHeaderOnScroll() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("toTopBtn").classList.replace("d-none", 'd-block')
        } else {
            document.getElementById("toTopBtn").classList.replace("d-block", 'd-none')
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    render() {
    return (
    <section>
            <button onClick={() => {
                window.scrollTo({ top: 0, behavior:'smooth'})
        }} className={`${style.scrollBtn} d-none`} id="toTopBtn"><i class="fa-solid fa-arrow-up fa-xs text-white"></i></button>    
    </section>
    )
    }
}
