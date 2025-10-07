import React from "react";
import "./home.css";
import man from "../../assets/man.png";
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {

  useGSAP(()=>{
    let tl1=gsap.timeline();

    tl1.from(".line1",{
      y:50,
      duration:1,
      opacity:0
    })
    tl1.from(".line2",{
      y:50,
      duration:1,
      opacity:0
    })
    tl1.from(".line3",{
      y:50,
      duration:1,
      opacity:0
    })
    // tl1.from(".homedetails btn",{
    //   y:-100,
    //   duration:1,
    //   opacity:0
    // })
    gsap.from(".righthome img ",{
      x:100,
      duration:2,
      opacity:0
    })
  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MANISH BHUVA</div>
          <div className="line3">
            <TypeAnimation
              sequence={["WEB DEVELOPER", 1000, "SOFTWARE DEVELOPER", 1000]}
              speed={300}
              repeat={Infinity}
            />
          </div>
          <button className="btn">HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="man png" />
      </div>
    </div>
  );
};

export default Home;
