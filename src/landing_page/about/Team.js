import React from "react";
function Team() {
  return (
    <div className="container border-top mb-5">
      <h2 className="text-center  mt-5">People</h2>

      <div
        className="row  p-3 text-muted"
        style={{ lineHeight: "1.9rem", fontSize: "1.2rem" , textAlign: "justify" }}>
        <div className="col-6 p-5 text-center ">
          <img
            src="/media/image/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin kamath</h4>
          <h6>Founder,CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p style={{columnGap:"2.5rem"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC)
          </p>
          <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
