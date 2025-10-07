import React from 'react'
import "./project.css"
import Card from '../Cards/Card'
import airbnb from '../../assets/airbnb1.png'
import chat from '../../assets/chat.png'
import weather from '../../assets/weather.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all' 
gsap.registerPlugin(ScrollTrigger)


const Project = () => {
  useGSAP(()=>{
    gsap.from("#para",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: "#para",
          scroll:"body",
          scrub:2,
          start: "top 80%",
           end: "top 30%",
        }
    })
    gsap.from(".slider",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".slider",
          scroll:"body",
          scrub:2,
          start: "top 80%",
           end: "top 30%",
        }
    })
  })
  return (
    <div id='project'>
        <h1 id='para'>PROJECTS </h1>
        <div className="slider">
            <Card title="AIRBNB WEB CLONE" image={airbnb} />
            <Card title="CHAT APP" image={chat}/>
            <Card title="WEATHER APP" image={weather}/>
           
        </div>
    </div>
  )
}

export default Project