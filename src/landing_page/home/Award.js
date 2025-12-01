import React from 'react'
function Award() {
    return ( 
        <div className="container mt-5 ">
<div className="row">
    <div className="col-6">
<img src="/Media/image/largestBroker.svg" alt="" />
    </div>
    <div className="col-6 mt-5">
<h1>Largest stock broker in India</h1>
<p className='mb-5'>
    2+ million Zerodha clients contribute to over 15% of all retain volume in India,by trading and Investing in:
</p>

<ul>
    <div className="row">
        <div className="col-6 ">
            <li>  <p>Future and Options</p></li>
            <li>  <p>Commodity derivatives </p></li>
            <li><p>Currency derivatives</p></li>
        </div>
          <div className="col-6 ">
            <li>  <p> Stocks and IPOs</p></li>
            <li>  <p>Direct mutual funds</p></li>
            <li><p>Bonds and Growth</p></li>
        </div>
    </div>
</ul>
<img src="/Media/image/pressLogos.png" alt=""style={{width:"90%"}} 
 />
    </div>
</div>
        </div>
    );
}

export default Award;