import React from 'react'
import { data } from '../restApi.json'

const WhoAreWe = () => {
  const whoWeAreData = data[0].who_we_are;

  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          
          {/* 1. LEFT TEXT BANNER (Displays the 1st item: Chef In Kitchen) */}
          <div className="text_banner">
            {whoWeAreData[0] && (
              <div className="card" key={whoWeAreData[0].id}>
                <h1 className='heading' style={{ fontWeight: "300" }}>{whoWeAreData[0].number}</h1>
                <p>{whoWeAreData[0].title}</p>
              </div>
            )}
          </div>

          {/* 2. CENTER IMAGE BANNER */}
          <div className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src="whoweare.png" alt="food" />
          </div>

          {/* 3. RIGHT TEXT BANNER (Displays the 2nd item: Food Dishes) */}
          <div className="text_banner">
            {whoWeAreData[1] && (
              <div className="card" key={whoWeAreData[1].id}>
                <h1 className='heading' style={{ fontWeight: "300" }}>{whoWeAreData[1].number}</h1>
                <p>{whoWeAreData[1].title}</p>
              </div>
            )}
          </div>

        </div>
      </section> 
    </>
  )
}

export default WhoAreWe