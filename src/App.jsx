import React, { Component } from 'react'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Copyrights from './components/Copyrights/Copyrights'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <Copyrights />
        <ScrollToTop />
      </>
    )
  }
}
