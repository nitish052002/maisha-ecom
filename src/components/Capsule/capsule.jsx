import React from "react";
import "./capsule.css";

function Capsule({ img, title }) {
  return (
    <div className="capsule">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="text-center   font-bold text-lg py-4">{title}</div>
    </div>
  );
}

export default Capsule;
