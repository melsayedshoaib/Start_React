import React, { Component } from 'react'

import style from '../Contact/Contact.module.css'

export default class Contact extends Component {
    showLabel(ev) {
        ev.value.length > 0 ? ev.previousElementSibling.classList.add("opacity-100") : ev.previousElementSibling.classList.remove("opacity-100");
        ev.value.length > 0 ? ev.previousElementSibling.classList.add("top-0") : ev.previousElementSibling.classList.remove("top-0")
        ev.value.length > 0 ? ev.nextElementSibling.classList.replace("d-block", "d-none") : ev.nextElementSibling.classList.replace("d-none", "d-block")
    }
    validateSubmit(ev) {
        let validateName = () => {
            let nameClass = document.getElementsByClassName("form-control")[0]
            let nameInput = document.getElementsByClassName("form-control")[0].value;
            return nameInput === '' ? nameClass.nextElementSibling.classList.replace("d-none", "d-block") : nameClass.nextElementSibling.classList.replace("d-block", "d-none")
        }
        let validateMail = () => {
            let emailClass = document.getElementsByClassName("form-control")[1]
            let emailInput = document.getElementsByClassName("form-control")[1].value;
            return emailInput === '' ? emailClass.nextElementSibling.classList.replace("d-none", "d-block") : emailClass.nextElementSibling.classList.replace("d-block", "d-none")
        }
        let validatePhone = () => {
            let phoneClass = document.getElementsByClassName("form-control")[2]
            let phoneInput = document.getElementsByClassName("form-control")[2].value;
            return phoneInput === '' ? phoneClass.nextElementSibling.classList.replace("d-none", "d-block") : phoneClass.nextElementSibling.classList.replace("d-block", "d-none")
        }
        let validateMessage = () => {
            let messageClass = document.getElementsByClassName("form-control")[3]
            let messageInput = document.getElementsByClassName("form-control")[3].value;
            return messageInput === '' ? messageClass.nextElementSibling.classList.replace("d-none", "d-block") : messageClass.nextElementSibling.classList.replace("d-block", "d-none")
        }
        if (!validateName() && !validateMail() && !validatePhone() && !validateMessage()) {
            return true
        } else {
            ev.preventDefault()
        }
    }
    render() {
        return (
        <section className='py-5' id='contact'>
            <div className="container">
                <h2 className={`text-center ${style.h2Style}`}>CONTACT ME</h2>
                <div className={ `${style.divider}`}>
                    <div className={`${style.dividerLine}`}></div>
                    <i class={`fa-solid fa-star fs-3 ${style.darkColor}`}></i>
                    <div className={`${style.dividerLine}`}></div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form>
                            <div className="control-group">
                                <div className={`form-group mb-0 pb-2 ${style.controlForm}`}>
                                    <label className={`${style.labelStyle}`}>Name</label>
                                        <input onInput={(e) => { this.showLabel(e.target)}} className={`form-control ${style.inputStyle}`} type='text' placeholder='Name'/>
                                        <p className='text-danger fw-bold d-none'>Please Enter Your Name</p>
                                </div>  
                            </div>
                            <div className="control-group">
                                <div className={`form-group mb-0 pb-2 ${style.controlForm}`}>
                                    <label className={`${style.labelStyle}`}>Email Address</label>
                                    <input onInput={(e) => { this.showLabel(e.target)}} className={`form-control ${style.inputStyle}`} type='email' placeholder='Email Address'/>
                                    <p className='text-danger fw-bold d-none'>Please Enter Your Email Address</p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className={`form-group mb-0 pb-2 ${style.controlForm}`}>
                                    <label className={`${style.labelStyle}`}>Phone Number</label>
                                    <input onInput={(e) => { this.showLabel(e.target)}} className={`form-control ${style.inputStyle}`} type='tel' placeholder='Phone Number'/>
                                    <p className='text-danger fw-bold d-none'>Please Enter Your Phone Number</p> 
                                </div>
                            </div>
                            <div className="control-group">
                                <div className={`form-group mb-0 pb-2 `}>
                                    <label className={`${style.labelStyle}`}>Message</label>
                                    <textarea onInput={(e) => { this.showLabel(e.target)}} className={`form-control ${style.inputStyle}`} placeholder='Message' rows={5}></textarea>
                                    <p className='text-danger fw-bold d-none'>Please Enter Your Message</p>
                                </div>
                            </div>
                            <div className="control-group border-top">
                                <button id='submitBtn' onClick={(e) => this.validateSubmit(e)} className={`btn ${style.btnStyle}`}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
      </section>
    )
  }
}
