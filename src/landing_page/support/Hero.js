import React from "react";
function Hero() {
  return (
    <div style={{ height: "400px", width: "100%", backgroundColor: "#397DD0" }}>
      <div className="container">
        <div className="row">
          <div className="col  p-5" style={{ color: "white" }}>
            <h3 className="fs-4">Support</h3>
            <p className="fs-5 mt-5 mb-4">
              
              Search fo an answer or browse help topcics <br /> to create
              tickets
            </p>
            <p
              className="border p-3 text-center fs-8  text-muted "
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                width: "80%",
              }}
            >
              how do i activate F&O,why is my order getting rejected...
            </p>
            
            
            <div className="gap text-muted">

  <a href="" style={{ color: "white",marginRight:"15px" }}>
              track account opening
            </a>
            <a href="" style={{ color: "white", marginRight:"15px" }}>
              track segement activation
            </a>
              <a href="" style={{ color: "white",marginRight:"15px"  }}>
              Intraday
            </a>
            <br />
              <a href="" style={{ color: "white",marginRight:"15px"  }}>
              Margins
            </a>
              <a href="" style={{ color: "white",marginRight:"15px"  }}>
              Kit user Mannually
            </a>
    </div>
           
          </div>
          <div className="col p-5   " style={{ color: "white" }}>
           
           <div className="text-center"> <a className="mb-5" href="" style={{ color: "white" }}>Track tickets</a></div>
            <h3 className="mt-5 fs-4" style={{marginLeft:"35px",}}>Features</h3>
            <ul>
                <ol>
  <li>
     <a href="" style={{ color: "white",marginTop:"25px"  }}>
              Current takeovers and Dilistings - jan 2024
            </a>
  </li>
  <li style={{marginTop:"10px"}}> <a href="" style={{ color: "white" }}>
           Latest infraday laverage
            </a>
            </li>
</ol>

            </ul>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
