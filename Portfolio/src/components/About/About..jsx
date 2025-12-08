import React from "react";
import java from '../../assets/java.png'

import dsa from '../../assets/dsa.png'
import mern from '../../assets/mern.png'
import "./About.css";
import Card from "../Card/Card";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)
const About = () => {
useGSAP(()=>{

 gsap.from(".cricle",{
    x:-200,
    duration:1,
    stagger:1,
    scrollTrigger:{
      trigger:".cricle",
      start:"top 80%",
      end:"top 30%",
      scrub:true
    }
  })
})
  return (
    <div id="about">
      <div className="leftabout">
        <div className="cricle-line">
          <div className="cricle"></div>
          <div className="line"></div>
          <div className="cricle"></div>
          <div className="line"></div>
          <div className="cricle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info </h1>
            <ul>
              <li><span>Name</span>: Akash Malvi</li>
              <li><span>Age</span>: 22 Years</li>
              <li><span>Gender</span>: Male</li>
              <li><span>Language Know</span>: English/Hindi </li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>Degree</span>: BCA</li>
              <li><span>Branch</span>: computer science and engenerring</li>
              <li><span>Grade</span>: B+</li>
              
            </ul>
          </div>
          <div className="skills">
            <h1>SKILLS</h1>
            <ul>
              <li><span>FRONTEND</span>: HTML,CSS,JAVASCRIPT,REACTJS,TAILWIND</li>
              <li><span>BACKEND</span>: EXPRESS,NODEJS</li>
              <li><span>DATABASE</span>: MONGODB</li>
              <li><span>TOOLS</span>: POSTMAN,VS CODE</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card image={mern} title={"Mern stack developer"} />
        <Card image={java} title={"Java"} />
        <Card image={dsa} title={"DSA"} />
     
      </div>
    </div>
  );
};

export default About;
