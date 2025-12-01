import React from 'react'
function RightSection({
     ImageUrl,
  ProductName,
  ProductDescription,
  TryDemo
}) {
    return ( <div className="container">
      <div className="row">
        <div className="col-6  p-3">
          <h1>{ProductName}</h1>
          <p style={{ width: "80%", lineHeight:" 1.9 ",fontSize:"1.2rem" }}>{ProductDescription}</p>
          <div> <a href={TryDemo} style={{marginRight:"50px",textDecoration:"none"}}>Try Demo →</a>
         
         </div>
          </div>
         
           <div className="col-6 p-3 ">
          <img src={ImageUrl} alt="" style={{ width: "90%" }} />
        </div>
          
      
      
      </div>
    </div> );
}

export default RightSection;