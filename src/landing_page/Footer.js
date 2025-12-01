import React from "react";
function Footer() {
  return (
    <footer className=" border-top bg-light" >
      <div className="container mt-5">
        <div className="row mt-5 ">
          <div className="col">
            <img
              src="/media/image/logo.svg"
              alt=""
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <h5 className="mb-3 ">Company</h5>
            <a className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">About</a>
            <a className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Product</a>
        
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Pricing</a>
            
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Carrers</a>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Zerodha.tech</a> 
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Press & media</a>
            
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Zerodha cares(CSR)</a>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href=""> Referral program</a>
          </div>
          <div className="col ">
            <h5 className="mb-3">Support</h5>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Contact us</a> 
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Support portal</a>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Circular</a>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href=""> Z-Connect blog</a> 
          </div>
          <div className="col">
            <h5 className="mb-3">Account</h5>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Open an account</a>
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href=""> Fund tranfer</a> 
            <a  className="mb-3 d-block text-muted" style={{textDecoration:"none"}} href="">Open challenges</a>
          </div>
        </div>
        <div className=" text-muted mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
