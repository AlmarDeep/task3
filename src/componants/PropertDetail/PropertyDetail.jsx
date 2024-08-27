import React from 'react'
import './PropertyDetail.css'
import ImageandText from '../ImageandText/ImageandText'
import ExtraInfo from '../ExtraInfo/ExtraInfo'
import UsefulLink from '../UsefulLink/UsefulLink'
import FeaturedCard from '../FeaturedCard/FeaturedCard'


const PropertyDetail = () => {
  const carddata=[
    {
      cimg:'/assets/img/info-icon-01.png ',
      ctitle:'250 m2',
      ctext:'total flat space',
    },
    {
      cimg:'/assets/img/info-icon-02.png ',
      ctitle:'contract',
      ctext:'contract ready',
    },
    {
      cimg:'/assets/img/info-icon-03.png ',
      ctitle:'payment',
      ctext:'payment',
    },
    {
      cimg:'/assets/img/info-icon-04.png ',
      ctitle:'safety',
      ctext:'24/7 under',
    }
  ]
  return (
    <>
     <ImageandText iimg='/assets/img/contact-bg.jpg' ititle='HOME/SINGLE PROPERTY' idescription='SINGLE PROPERTY' />
     <div className='PropertyDetail'>
      <div className="singleproperty">
        <img src='/assets/img/property-01.jpg' alt="" />
          <h3>Appartment</h3>
          <ExtraInfo extratitle='24 NEW STREET MIAMI ,OR 24560' />
          <UsefulLink />
      </div>
      <div className='cardside'>
      {
          carddata.map((element,index) =>{
            return (
              <FeaturedCard key={index} cimg={element.cimg} ctitle={element.ctitle} ctext={element.ctext}  />
            )
          })
        }
      </div>
     </div>
    </>
   
  )
}

export default PropertyDetail