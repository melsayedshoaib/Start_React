import React, { Component } from 'react'

import image1 from '../../assets/images/cabin.png'
import image2 from '../../assets/images/cake.png'
import image3 from '../../assets/images/circus.png'
import image4 from '../../assets/images/game.png'
import image5 from '../../assets/images/safe.png'
import image6 from '../../assets/images/submarine.png'
import style from '../Portfolio/Portfolio.module.css'

export default class Portfolio extends Component {
  showCards(ev) {
    let container = document.createElement("div") 
    container.style.position = 'fixed'
    container.style.display = 'none'
    container.style.top = '0'
    container.style.left = '0'
    container.style.bottom = '0'
    container.style.right = '0'
    container.style.zIndex = '9999'
    container.classList.add("d-flex")
    container.classList.add("align-items-center")
    container.classList.add("justify-content-center")
    function close() {
      container.classList.replace("d-flex", 'd-none')
    }
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    let card = document.createElement("div")
    card.style.position = 'relative'
    card.style.backgroundColor = '#fff'
    card.style.height = '95%'
    card.style.width = '85%'
    card.style.borderRadius = '10px'
    let icon = document.createElement("i")
    icon.setAttribute("class", "fa-solid fa-x")
    icon.style.position = 'absolute'
    icon.style.top = '10px'
    icon.style.right = '10px'
    icon.style.color = '#1abc9c'
    icon.style.fontSize = '1.2rem'
    icon.style.fontWeight = 'bolder'
    icon.style.cursor = 'pointer'
    icon.addEventListener("click", close)
    let headLine = document.createElement("h2")
    headLine.innerHTML = ev.dataset.myattr
    headLine.style.textAlign = 'center'
    headLine.style.color = '#2c3e50'
    headLine.style.fontSize = '2rem'
    headLine.style.fontWeight = 'bolder'
    headLine.style.paddingTop = '1rem'
    let imageContainer = document.createElement("div")
    imageContainer.style.textAlign = 'center'
    imageContainer.style.borderRadius = '10px'
    let image = document.createElement("img")
    image.setAttribute("src", ev.nextElementSibling.src)
    image.style.width = '50%'
    image.style.borderRadius = '10px'
    imageContainer.append(image)
    let text = document.createElement("p")
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    text.style.textAlign = 'center'
    text.style.width = '50%'
    text.style.margin = '0 auto'
    text.style.marginBottom = '5px'
    let btnContainer = document.createElement("div")
    btnContainer.style.textAlign = 'center'
    let closeBtn = document.createElement("button")
    closeBtn.innerHTML = `<i class="fa-solid fa-x fa-xs"></i> Close Window`
    closeBtn.style.backgroundColor = '#1abc9c'
    closeBtn.style.border = 'none'
    closeBtn.style.outline = 'none'
    closeBtn.style.color = '#fff'
    closeBtn.style.borderRadius = '5px'
    closeBtn.style.padding = '5px 10px'
    closeBtn.addEventListener("click", close)
    btnContainer.append(closeBtn)
    let divider = document.createElement("div")
    let dividerLine = document.createElement("div")
    let dividerIcon = document.createElement("i")
    let secondDividerLine = document.createElement("div")
    dividerIcon.setAttribute("class", `fa-solid fa-star fs-3 ${style.darkColor}`)
    dividerLine.setAttribute("class", style.dividerLine)
    secondDividerLine.setAttribute("class", style.dividerLine)
    divider.setAttribute("class", style.divider)
    divider.append(dividerLine)
    divider.append(dividerIcon)
    divider.append(secondDividerLine  )
    card.append(icon)
    card.append(headLine)
    card.append(divider)
    card.append(imageContainer)
    card.append(text)
    card.append(btnContainer)
    container.append(card)
    document.body.append(container)
    document.addEventListener("click", (e) => {
      if (e.target == container) {
        close()
      }
    })
  }
  render() {
    return (
      <section className='py-5' id='portfolio'>
        <div className="container">
          <h2 className={`text-center ${style.h2Style}`}>PORTFOLIO</h2>
          <div className={ `${style.divider}`}>
            <div className={`${style.dividerLine}`}></div>
            <i class={`fa-solid fa-star fs-3 ${style.darkColor}`}></i>
            <div className={ `${style.dividerLine}`}></div>
          </div>
          <div className="row gy-3">
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'LOG CABIN'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'TASTY CAKE'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'CIRCUS TENT'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'CONTROLLER'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'LOCKED SAFE'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image5} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={ `${style.item} portfolioItem`}>
                <div className={ `${style.overlay}`} data-myattr={'SUBMARINE'} onClick={(e) => this.showCards(e.target)}></div>
                <img src={image6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
