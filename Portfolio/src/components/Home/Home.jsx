import React from 'react'
import akash from '../../assets/man.png'
import './Home.css'
import TypewriterClass from 'typewriter-effect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(()=>{
    const t1 = gsap.timeline()
    t1.from(".line1,.line2,.line3",{
      y:50,
      duration:0.5,
      stagger:1,
      opacity:0
    })
    t1.from(".righthome img",{
      y:-100,
      opacity:0,
      duration:0.5,
    })
  })
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Akash Malvi</div>
          <div className="line3">

            <TypewriterClass 
 options={{
       
        strings: ["Web Developer", "MERN Stack developer",'React.js  Developer'],
        autoStart: true,
        loop: true,
      
       cursor:"|"
      }}
            
            />
          </div>
          
        <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={akash} alt="" />
      </div>
    </div>
  )
}

export default Home
