import React from 'react'
import Typist from 'react-typist'

const Hero = (): JSX.Element => {
  return (
    <div className="hero">
      <div className="canvas"></div>
      <img src={`static/images/hero-banner.jpeg`} alt="hero-banner" />
      <div className="hero-img">
        <img src={`static/images/anka-logo-hero.png`} alt="hero-img" />
      </div>
      <div className="hero-text">
        <Typist>
          <h1 className="beginning">Undangan Pernikahan</h1>
          <h3 className="name"> Dita {'&'} Eka </h3>
          <h5 className="date">17 . 07 . 22</h5>
        </Typist>
      </div>
    </div>
  )
}

export default Hero
