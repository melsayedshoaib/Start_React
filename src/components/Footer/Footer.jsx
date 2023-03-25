import React, { Component } from 'react'

import style from '../Footer/Footer.module.css'

export default class Footer extends Component {
  render() {
    return (
        <footer className={`${style.sectionStyle}`}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className='mb-4'>LOCATION</h4>
                        <p className={`${style.lead}`}>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className='mb-4'>AROUND THE WEB</h4>
                        <div className={`${style.icons}`}>
                            <div className={`${style.icon}`}>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div className={`${style.icon}`}>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div className={`${style.icon}`}>
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className={`${style.icon}`}>
                                <i class="fa-brands fa-dribbble"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4 className='mb-4'>ABOUT FREELANCER</h4>
                        <p className={`${style.lead}`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        
      </footer>
    )
  }
}
