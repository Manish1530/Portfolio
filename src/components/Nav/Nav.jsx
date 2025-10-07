import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import {useGSAP } from "@gsap/react"
import gsap from "gsap";

const Nav = () => {
  let menu=useRef()
  let mobilemenu=useRef()

  useGSAP(()=>{
    let t1=gsap.timeline();
    t1.from("nav h1",{
      y:-100,
      duration:1,
      opacity:0
    })
    t1.from("nav ul li",{
      y:-100,
      duration:1,
      opacity:0,
      stagger:1
    })
  })
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className="destop">
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>ABOUT</li>
        </Link>
        <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>CONTACT</li>
        </Link>
      </ul>

      <div className="hamburger" ref={menu} onClick={()=>{
        mobilemenu.current.classList.toggle("activemobile")
        menu.current.classList.toggle("activeham")
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

       <ul className="mobile" ref={mobilemenu}>
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>ABOUT</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
