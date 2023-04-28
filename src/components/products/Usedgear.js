import React from "react";
import "./Usedgear.css";
import product_card from "@data/used_product_data";

function Usedgear() {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt="test" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <h3>{item.antal}</h3>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          {item.currency}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="body">
      <h1>USED GEAR FOR SALE</h1>
      <div id="download-container">
        <div className="main_content">{listItems}</div>
      </div>
    </div>
  );
}

export default Usedgear;
