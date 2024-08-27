import React from 'react'
import styles from './ContactUs.module.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import ImageandText from '../ImageandText/ImageandText'
const ContactUs = () => {
  return (
    <div className={styles.ContactUs}>
    <div className={styles.rr}>
      <div className={styles.textonimg}>
       <ImageandText iimg='/assets/img/contact-bg.jpg' ititle='HOME/CONTACT' idescription='CONTACT US' />
      </div>
       
        
        <div className={styles.titleandcards}>
          <div className={styles.contacttext}>
            <h2>| contact us</h2>
            <h1>GET IN TOUCH WITH OUR AGENTS</h1>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus delectus, itaque, dicta in nemo voluptatum dolore placeat recusandae magni temporibus, saepe eius sed. Non, nobis ab quod laboriosam ullam soluta.</p>
             <div className={styles.contactuscard}>
            <FeaturedCard cimg='/assets/img/phone-icon.png' ctitle='010-020-030' ctext='phonenumber' />
            <FeaturedCard cimg='/assets/img/email-icon.png' ctitle='info@villa.co' ctext='Business Email' />
        </div>
          </div>
          <div className={styles.contactcard}>
            <h1>full name</h1>
            <input type="text" placeholder='  your name'  />
            <h1>Email address</h1>
            <input type="email" placeholder='  your E-mail'  />
            <h1>sbject</h1>
            <input type="text" placeholder='  subject'  />
            <h1>massage</h1>
            <textarea name="" id="" ></textarea>
            <button>send massage</button> 
        </div>
        </div>
        <img src="/assets/img/lo.JPG" alt="" className={styles.imgchild} />
        
       
        </div>
    

    </div>
  )
}

export default ContactUs