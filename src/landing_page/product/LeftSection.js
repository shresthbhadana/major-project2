import React from "react";
function LeftSection({
  ImageUrl,
  ProductName,
  ProductDescription,
  TryDemo,
  LearnMore,
  GooglePlay,
  AppStore,
   atags
}) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={ImageUrl} alt="" style={{ width: "80%" }} />
        </div>
        <div className="col-6 p-3"  style={{marginTop:"50px"}}>
          <h1 className="mt-5">{ProductName}</h1>
          <p style={{ width: "80%", lineHeight:" 1.9 ",fontSize:"1.2rem" }}>{ProductDescription}</p>
          <div> <a href={TryDemo} style={{marginRight:"50px",textDecoration:"none"}}>{atags}→</a>
          <a href={LearnMore} style={{textDecoration:"none"}}>Learn More →</a></div>
          
        <div style={{marginTop:"20px"}}>
             <a href={GooglePlay} style={{marginRight:"50px"}}>
            <img src="/media/image/googlePlayBadge.svg" alt=""  style={{ width: "18%" }} />
          </a>
          <a href={AppStore}>
            <img src="/media/image/appStoreBadge.svg" alt=""  style={{ width: "18%" }} />
          </a>
        </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
