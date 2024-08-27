import React from 'react'
import styles from './NavBar.module.css'

import SchedualButton from '../SchedualButton/SchedualButton'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const showMenu=()=>{
    const menu =document.querySelector('.navmenu')
    menu.classList.toggle("active")
  }
  return (
    <>
    <div className={styles.nav}>
    <div className={styles.fnav}>
    <div className={styles.emaillink}>
                  <img src='/assets/img/email-icon.png' alt="" />
                  <p> info@company.com</p>
                </div>
                <div className={styles.emaillink}>
                  <img src='/assets/img/map.png' alt="" />
                  <p> sunny Isles Beach,FL 33160</p>
                </div>
                <div className={styles.socailmedia}>
               <ul>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-linkedin-in"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
               </ul>
                </div>
             
    </div>
   
    <div className={styles.snav}>
        <h2>VILLA</h2>
        <div className={styles.mlinks}>  
        <div className={styles.links}>
              <Link to='/'>Home </Link> 
              <Link to='/properties'>Properties </Link> 
              <Link to='/propertydetails'>Property Details </Link> 
              <Link to='/contactus'>Contact Us </Link> 
            </div>
            <SchedualButton />
           
            </div> 
            <button className={styles.bars} onClick={()=>showMenu}> 
            <i class="fas fa-bars"></i>
            </button>
    </div>
    
    </div>
    <div className={styles.navmenu}>
    <Link to='/'>Home </Link> 
              <Link to='/properties'>Properties </Link> 
              <Link to='/propertydetails'>Property Details </Link> 
              <Link to='/contactus'>Contact Us </Link> 
    </div>
    
    </>
  )
}

export default NavBar