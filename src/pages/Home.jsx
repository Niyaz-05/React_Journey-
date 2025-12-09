import React from 'react'
import "./Home.css";
import Nike from '../assets/image/NIKE.jpg'
import Adidas from '../assets/image/ADIDAS.jpg'
import Puma from '../assets/image/PUMA.jpg'

const Home = () => {
  return (
    <div>
        <h1>Welcome!</h1>

        <p id='head'>BUY FROM THE BEST SHOPS NEAR YOU</p>

        <button id='Browse'>Browse Product</button>

        <h3>Browse By Brand</h3>

        <div className='images'>
            <img id='Nike' src={Nike} alt="Nike" />
            <img id='Adidas' src={Adidas} alt="Adidas"/>
            <img id='Puma' src={Puma} alt='Puma'/>
        </div> 

        <div className='HighLight'>
            <p>Hurry up!</p>
            <p>Order Now</p>
            <p>Get yours Favorite shoes at your door</p>            
        </div>

    </div>
  )
}

export default Home