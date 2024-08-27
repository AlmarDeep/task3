import React from 'react'
import './BestDealDown.css'
import BestDealCard from '../BestDealCard/BestDealCard'

const BestDealDown = ({img ,title ,t1,t2,t3,t4,t5}) => {
  return (
    <div className='downsection'>
    <div className='card'>
      <BestDealCard t1={t1} t2={t2} t3={t3} t4={t4} t5={t5} />
    {/* <BestDealCard ftitle='' stitle='total flat space' />
    <BestDealCard ftitle='' stitle='floor number' />
    <BestDealCard ftitle='' stitle='number of rooms' />
    <BestDealCard ftitle='' stitle='parking available' />
    <BestDealCard ftitle='' stitle='payment process' /> */}
    </div>
    
    <img src={img} alt="" className='downsectionimg'/>
    <div className='textcardside'>
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ut blanditiis architecto provident repudiandae. Animi ipsa pariatur, doloremque voluptatum veritatis porro, tempore aspernatur iste eius, magnam quam quos. Incidunt, rerum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam non ullam doloremque, unde veritatis autem suscipit, mollitia dolore ut enim magni quasi harum ex dicta, incidunt iure rem debitis?</p>
        {/* <SchedualButton /> */}
    </div>
   
</div>
  )
}

export default BestDealDown