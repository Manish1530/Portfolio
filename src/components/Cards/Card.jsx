import React from 'react'
import "./Card.css"
import mern from "../../assets/MERN.png"

const Card = ({title,image}) => {
  return (
    <div className="card">
        <h1> {title} </h1>
        <div className='hoverimage'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Card