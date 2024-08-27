import React from 'react'
import styles from'./Properties.module.css'
import PropertyCard from '../PropertyCard/PropertyCard'
import { useState } from 'react'; 
import ImageandText from '../ImageandText/ImageandText';


const Properties = () => {
   const data=[
    {
       img:'/assets/img/property-01.jpg',
       type:'luxray villa',
       price:'$2.23.000',
       location:'18new street maimi,or97219',
       bedroom:'8',
       bathroom:'8',
       area:'545m2',
       floor:'3',
       parking:'6spots'
    },
    {
      img:'/assets/img/property-02.jpg',
        type:'luxray villa' ,
        price:'$1.180.000',
        location:'54 New street florida,or 27001',
        bedroom:'6',
        bathroom:'5', 
        area:'450m2',
        floor:'3',
        parking:'8 spots',
    },
    {
      img:'/assets/img/property-03.jpg',
        type:'luxray villa' ,
        price:'$1.460.000',
        location:'26mid street portland,or38540',
        bedroom:'5',
        bathroom:'4', 
        area:'225m2',
        floor:'3',
        parking:'10 spots',
    },
    {
      img:'/assets/img/property-04.jpg',
        type:'Appartment' ,
        price:'$584.500',
        location:'12 hope street potland,or12650',
        bedroom:'4',
        bathroom:'3', 
        area:'125m2',
        floor:'25th',
        parking:'2 cars',
    },
    {
      img:'/assets/img/property-05.jpg',
        type:'penthouse' ,
        price:'$925.600',
        location:'34 hope street portland,or42680',
        bedroom:'4',
        bathroom:'4', 
        area:'180m2',
        floor:'38th',
        parking:'2 cars',
    },
    {
      img:'/assets/img/property-06.jpg',
        type:'penthouse' ,
        price:'$450.000',
        location:'22 hope street portland,or16540',
        bedroom:'3',
        bathroom:'2', 
        area:'165m2',
        floor:'26th',
        parking:'3 cars',
    },
    {
      img:'/assets/img/property-03.jpg',
        type:'Appartment' ,
        price:'$980.000',
        location:'14 mid street miami,or36450',
        bedroom:'8',
        bathroom:'8', 
        area:'550m2',
        floor:'3',
        parking:'12 spots',
    },
    {
      img:'/assets/img/property-01.jpg',
        type:'Appartment' ,
        price:'$1.520.000',
        location:'26 old street miami,or12870',
        bedroom:'12',
        bathroom:'15', 
        area:'380m2',
        floor:'3',
        parking:'14 spots',
    },
    {
      img:'/assets/img/property-03.jpg',
        type:'Appartment' ,
        price:'$3.145.000',
        location:'34 new street miami,or24650',
        bedroom:'10',
        bathroom:'12', 
        area:'860m2',
        floor:'3',
        parking:'10 spots',
    },
   ]


   const [filteredCards, setFilteredCards] = useState(data);
   const filterCards = (type) => {
    const newFilteredCards = data.filter(card => card.type === type);
    setFilteredCards(newFilteredCards);
  };

  const showAllCards = () => {
    setFilteredCards(data);
  };


  return (
    <div className={styles.Properties}>
       
          <ImageandText iimg='/assets/img/page-heading-bg.jpg' ititle='HOME/PROPERTIES' idescription='PROPEERTIES' />
        
        <div className={styles.buttons}>
          <button onClick={showAllCards}>show all</button>
          <button onClick={() => filterCards('Appartment')}>Appartment</button>
          <button onClick={() => filterCards('luxray villa')}>  Villa House</button>
          <button onClick={() => filterCards('penthouse')}>Penthouse</button>
        </div>
        <div className={styles.propcard}>
          {
            filteredCards.map((element,index)=>{
              return(
                <PropertyCard key={index} img={element.img} villatype={element.type} villaprice={element.price} 
                location={element.location} bedroom={element.bedroom} bathroom={element.bathroom} 
                area={element.area} floor={element.floor} parking={element.parking} />
              )
            })
          }
        </div>
        <div className={styles.propertybuttons}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
    </div>
  )
}

export default Properties