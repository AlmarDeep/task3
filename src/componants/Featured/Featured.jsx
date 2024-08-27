import React from 'react'
import styles from './Featured.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import UsefulLink from '../UsefulLink/UsefulLink'

const Featured = () => {
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
   <div className={styles.featured}>
    <div className={styles.me}>
      <div className={styles.imgside}>
      <img src="/assets/img/featured-icon.png" alt="" className={styles.parentim} />
      <img src="/assets/img/featured.jpg" alt=""  className={styles.child}/>
      
    </div>
    <div className={styles.textside}>
        <div className={styles.texttitle}>
        <h1> | FEATURED</h1>
        <h2>BEST APPARTMENT AND SEA VEIW</h2>
          </div>
        
       <UsefulLink />
      </div>
      </div>
    
      <div className={styles.cardside}>
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

export default Featured