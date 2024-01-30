import React from 'react'
import pcImage from '../Assets/homebg.png';

function Hero() {
    const backgroundImageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the default height
        backgroundImage: `url(${pcImage})`,
    
      };
    return (
        <div id='home' className='bbblack' style={{ height: "100vh", ...backgroundImageStyle }}>
            <div className='homeContainer'>
                <h1>Authentic
                    Firewood Biryanis
                    in Wedding Style</h1>
                <p>Discover the art of Viragu Aduppu Biryani, crafted in wedding style. Immerse yourself in authentic flavors, straight from our cloud kitchen to your table. A culinary ode to Tamil Nadu's taste buds</p>

            </div>
            <button className='btn btn-primary'> Order Now</button>
        </div>
    )
}

export default Hero
