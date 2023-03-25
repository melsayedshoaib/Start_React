import React, { Component } from 'react'

import style from '../Copyrights/Copyrights.module.css'

export default class Copyrights extends Component {
  render() {
    return (
        <section className={`py-4 text-center text-white ${style.bgColor}`}>
            <div className="container">
                <small>Copyright © Your Website 2021</small>
        </div>
      </section>
    )
  }
}
