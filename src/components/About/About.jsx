import React from 'react'
import "./About.css"
import Card from '../Cards/Card'
import mern from '../../assets/MERN.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all' 
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(()=>{
    gsap.from(".circle",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".circle",
          scroll:"body",
          scrub:2,
          start: "top 60%",
           end: "top 30%",
        }
    })

     gsap.from(".line",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".line",
          scroll:"body",
          scrub:2,
          start: "top 60%",
           end: "top 30%",
        }
    })
    gsap.from(".aboutinfo h1",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".aboutinfo h1",
          scroll:"body",
          scrub:2,
          start: "top 60%",
           end: "top 30%",
        }
    })
    gsap.from(".aboutinfo ul",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".aboutinfo ul",
          scroll:"body",
          scrub:2,
          start: "top 60%",
           end: "top 30%",
        }
    })
    gsap.from(".rightabout ",{
        x:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".rightabout ",
          scroll:"body",
          scrub:2,
          start: "top 60%",
           end: "top 30%",
        }
    })
  })
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutinfo">
          <div className="personalinfo">
            <h1>Persinal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : MANISH BHUVA
              </li>
               <li>
                <span>AGE</span> : 20
              </li>
               <li>
                <span>GENDER</span> : MALE
              </li>
               <li>
                <span>LANGUAGE KNOWN</span> : GUJARATI,HINDI,ENGLISH
              </li>
            </ul>
          </div>
           <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B.Tech
              </li>
               <li>
                <span>BRANCH</span> : COMPUTER ENGINEERING 
              </li>
               <li>
                <span>CGPA</span> : 7.3
              </li>
               
            </ul>
          </div>
           <div className="skill">
            <h1> SKILLS</h1>
            <ul>
              <li>
                 MERN STACK DEVELOPER
              </li>
               <li>
                 DSA
              </li>
               <li>
                 JAVA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
          <Card title="MER STACK WEB DEVELOPER" image={mern}/>
          <Card title="JAVA" image={java}/>
          <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About