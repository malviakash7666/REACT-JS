import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from"gsap"
const Navbar = () => {
  const menu = useRef()
const mobile = useRef()
useGSAP(()=>{
  const t1 = gsap.timeline()
  t1.from("nav h1",{
y:100,
opacity:0,
duration:1
  })
  t1.from(" li",{
    stagger:1,
    y:-100,
    opacity:0,
    duration:0.5
  })
})
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className="desktop-menu">
        <Link to="home" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="about" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>About</li>{" "}
        </Link>
        <Link to="projects" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Projects</li>{" "}
        </Link>
        <Link to="contact" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Contact</li>{" "}
        </Link>
      </ul>
      <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle("mobile-view")
        menu.current.classList.toggle("active-ham")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className="mobile-menu" ref={mobile}>
        <Link to="home" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link to="about" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>About</li>{" "}
        </Link>
        <Link to="projects" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Projects</li>{" "}
        </Link>
        <Link to="contact" smooth={true} duration={700} activeClass="active" spy={true}>
          {" "}
          <li>Contact</li>{" "}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
