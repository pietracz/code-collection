import React from "react";

function Card({ title, value }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>{title}</h4>
          <img src="../assets/" />
        </div>
        <div className="card-body">
          <p>{value}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
