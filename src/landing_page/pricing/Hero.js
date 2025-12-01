import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-3 "   >
        <div className="border-bottom mb-5">
            <h1 className="text-center mb-3">Pricing</h1>
        <h3 className="text-center  fs-5 text-muted" style={{ marginBottom:"100px" }}>
          Free equity investments and flat &#8377;20 and traday and F&O trades
        </h3></div>
        
        
        <div className="col-4 text-center mt-5 ">
          <img
            src="/media/image/pricing0.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h2 className="text-center">Free equity delivery</h2>
          <p className="text-center fs-5 mt-3 text-muted mb-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img
            src="/media/image/intradayTrades.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h2 className="text-center">Intraday and F&O trades</h2>
          <p className="text-center fs-5 mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
            <img 
            src="/media/image/pricing0.svg"
            alt=""
            style={{ width: "70%", }}
          />
            <h2 className="text-center">Free direct MF</h2>
          <p className="text-center fs-5 mt-3 text-muted">
         All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p></div>
      </div>
    </div>
  );
}

export default Hero;
