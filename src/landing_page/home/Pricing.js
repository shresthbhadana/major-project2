import React from 'react'
function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
<h2 className='fs-3 mb-3'>Unbeatable pricing</h2>

<p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
<a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col border text-center p-4">
                            <h1 className='fs-3 mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 0</h1>
                            <p>Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className="col  border text-center p-4">
                            <h1 className='fs-3 mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 0</h1>
                            <p className='fs-7'>Intraday and FOs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;