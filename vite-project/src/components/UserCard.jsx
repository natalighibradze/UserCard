import React from "react";
function Card({ photoUrl, name, phoneNumber, currentCity, }) {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <div className="card" style={{ backgroundColor: "rgb(202, 201, 201)", padding: "15px", width: "170px", color: "white", borderRadius: "12px", border: "1px solid #ccc"}}>
        <img src={photoUrl} style={{width: "50px"}}  />
        <h4>{name}</h4>
        <h3>{phoneNumber}</h3>
        <h2>{currentCity}</h2>
      </div>
    </div>
  );
}
export default Card;






