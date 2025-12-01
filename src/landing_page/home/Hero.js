import React from 'react'
function Hero() {
    return ( 
       <div className='container p-5'>

<div className="row p-15 text-center ">
    
   <img src="/Media/image/homeHero.png" alt="hero image" className='mb-5' />
   <h1 className='mt-5 '>Invest in Everything</h1>
   <p >Online platform to invest in stocks,derivates,mutual funds and more</p>
   <button className='btn btn-primary mb-5  ' style={{width:"13%",margin:"0 auto"}}>SignUp now</button>
</div>

       </div>
    );
}

export default Hero;