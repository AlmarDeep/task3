import React from 'react'
import './ExtraInfo.css'
import { useState } from 'react';

const ExtraInfo = ({extratitle}) => {

    const [Open, setIsOpen] = useState(false);
    const moreText = () => {
        setIsOpen(!Open);
      };
       
  return (
    <div className='ExtraInfo'>
      <h2 onClick={moreText} > {extratitle}</h2>
     
      {Open && (
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, quis at quasi ipsam maiores placeat ducimus earum assumenda aliquam quidem cum maxime amet nam cupiditate? Quibusdam est voluptates minima dolores?
        </p>
      )}
     { Open && (
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum veritatis iure provident, quisquam fugit autem labore. Molestias tempore optio soluta unde temporibus. Impedit non atque nesciunt alias, autem voluptate!</p>
     )

     }
    </div>
  )
}

export default ExtraInfo