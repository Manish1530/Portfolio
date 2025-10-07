import React from 'react'
import './Contact.css'
import contact from '../../assets/contacts-book.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all' 
gsap.registerPlugin(ScrollTrigger)

function Contact() {
    useGSAP(()=>{
    gsap.from(".leftcontact img",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: ".leftcontact img",
          scroll:"body",
          scrub:2,
          start: "top 80%",
           end: "top 30%",
        }
    })
    gsap.from("form",{
        x:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger: "form",
          scroll:"body",
          scrub:2,
          start: "top 80%",
           end: "top 30%",
        }
    })
  })
  return (
    <div>
        <div id="contact">
            <div className="leftcontact">
                <img src={contact} alt="contact book" />
            </div>
            <div className="rightcontact">
                <form action="https://formspree.io/f/mwprqybo" method='POST'>
                    <input name='Username' type="text" placeholder='Name'/>
                    <input name='Email' type="email" placeholder='E-mail'/>
                   <textarea name="message" id="textarea" placeholder='Message-me'></textarea>
                   <input type="submit"  id="btn" value='Submit'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact