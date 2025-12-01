import React from "react";
function Brokrage() {
  return (
    <div className="container mt-5 p-5 border-top">
      <div className="row">
        <div className="col-8 p-3 ">
          <a  href="" style={{ textDecoration: "none" }}>
            <h4 className="text-center">Brokrage calculator</h4> </a>
            <ul className="text-muted mt-3" style={{ lineHeight: "2.5",textAlign:"left"}}>
               
               <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity.</li>
               <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
               <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
               <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
               <li>Options - ₹50 per crore + GST traded value (premium value).</li>
               <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST </li>
            </ul>
         
        </div>
        <div className="col-4 p-3 ">
          <a  href="" style={{ textDecoration: "none" }}>
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
