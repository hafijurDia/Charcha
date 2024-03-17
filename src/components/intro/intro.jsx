import React from 'react'
import './intro.css'
import ucgif from '../../images/underconstruction.gif'


const Intro = () => {
  return (
    <div className='i'> 
    <div className="i-left">
        <div className="i-left-wrapper">
            <h1 className='i-intro'> This is Charcha </h1>
            <h2 className='i-name'>from Tangail </h2>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item"> credit Program</div>
                    <div className="i-title-item"> Health Program </div>
                    <div className="i-title-item"> Awareness building </div>
                    <div className="i-title-item"> IGA/Family Improvement </div>
                    <div className="i-title-item"> Disaster response </div>
                    <div className="i-title-item"> Relief Program </div>
                    <div className="i-title-item"> Covid Program </div>                    
                </div>
            </div>
            <div className="i-desc">
              <p> 
              here is a brief about CHARCHA Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sunt harum magnam reprehenderit dolore, ad molestiae dolorum inventore numquam laborum.
              </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
</svg>


        </div>
    </div>


    <div className="i-right">
      <div className="i-bg"> </div>
      <img src={ucgif} alt="" className="i-img" />
      
    </div>
    
    </div>
  )
}

export default Intro