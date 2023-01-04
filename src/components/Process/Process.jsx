import React from 'react'
import "./Process.css"
import rightLine from "../../assets/right-line.png"
import leftLine from "../../assets/left-line.png"
import process from "../../assets/process.png"

const Process = () => {
  return (
    <div className='process-container'>
      <p>PROCESS</p>
      <h3 className="process-title">Our development process</h3>
      <div className="steps-container">
        {/* Discover */}
        <div className="each-step">
          <span className="num">01</span>
          <p className="step-name">Discover</p>
        </div>
        <div className="step-transitions">
          <img src={leftLine} className="line left-line-1" alt="leftLine" />
          <img src={rightLine} className="line right-line-1" alt="rightLine" />
        </div>
        
        {/* Design */}
        <div className="each-step ml-277">
          <span className="num">02</span>
          <p className="step-name">Design</p>
        </div>
        <div className="step-transitions">
          <img src={leftLine} className="line left-line-2" alt="leftLine" />
          <img src={rightLine} className="line right-line-2" alt="rightLine" />
        </div>
        {/* Build */}
        <div className="each-step ml-560">
          <span className="num">03</span>
          <p className="step-name">Build</p>
        </div>
        <div className="step-transitions">
          <img src={leftLine} className="line left-line-3" alt="leftLine" />
          <img src={rightLine} className="line right-line-3" alt="rightLine" />
        </div>
        {/* Deliver */}
        <div className="each-step ml-827">
          <span className="num">04</span>
          <p className="step-name">Deliver</p>
        </div>
      </div>
      <img className='bg-process' src={process} alt="" />
    </div>
  )
}

export default Process

