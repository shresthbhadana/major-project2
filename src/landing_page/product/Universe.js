import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Universe() {
  const navigate = useNavigate(); // <-- yahi missing tha
  
  return (
    <div className="contianer  " style={{ marginTop: "120px", }}>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="d-flex  " style={{width:"80%",marginLeft:"100px"}}>
        <div className="col-4 p-2 ">
          <img
            src="/media/image/zerodhaFundhouse.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2"> Asset management</p>
        </div>
        <div className="col-4 p-2">
          {" "}
          <img
            src="/media/image/streakLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2"> Algo & Statergy platform</p>
        </div>
        <div className="col-4 p-2">
          <img
            src="/media/image/sensibullLogo.svg"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2 mb-5"> Option trading platform </p>
        </div>
        </div>
        <div className="d-flex mt-5  " style={{width:"80%",marginLeft:"100px"}}>
            
        <div className="col-4 p-2 ">
          <img
            src="/media/image/smallcaseLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2"> Asset management</p>
        </div>
        <div className="col-4 p-2">
          {" "}
          <img
            src="/media/image/dittoLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2">Insurance</p>
        </div>
        <div className="col-4 p-2">
          <img
            src="/media/image/goldenpiLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted mt-2"> Bonds trading platform </p>
        </div>
        </div>
   
   
      </div>
      <div style={{textAlign:"center",marginTop:"50px"}}>
          <button onClick={() => setTimeout(() => navigate("/signup"), 1000)}
          
        className="btn btn-primary mb-5 mt-3 
        " 
        style={{ width: "13%" }}
      >
        SignUp now
      </button>
      
      </div>
     
     
    </div>
    
    
  );
}

export default Universe;
