import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../Contexts/AppContext";

// import removeFromCartPage  from "../Contexts/AppContext";

function Cardsm(props) {
  const { products, productID, prodQty } = props;
  const { removeFromCartPage } = useContext(AppContext);

  const [detailsLoaded, setDetailsLoaded] = useState(false);
  const [details, setDetails] = useState(
    products.find((prod) => prod.id === productID - 1)
  );
  const [qty, setQty] = useState(prodQty);

  useEffect(() => {
    setDetailsLoaded(false);
    getProdDetails();
  }, []);

  const TrimString = (stringLength, string) => {
    return string.length > stringLength
      ? string.substring(0, stringLength - 3) + "...."
      : string;
  };

  const getProdDetails = () => {
    setDetails(products.find((prod) => prod.id === productID));
    setDetailsLoaded(true);
  };
  return detailsLoaded ? (
    <div className="cardSmall">
      <div
        className="imgSm"
        style={{ height: "100px", width: "150px", overflow: "hidden" }}
        align="left"
      >
        <img src={details.image} style={{ height: "100%" }} alt="" />
      </div>
      <div className="productDetailsm" style={{ width: "70%" }} align="left">
        <p style={{ margin: "0px", marginTop: "-10px" }} align="right">
          <span onClick={() => removeFromCartPage(productID)}>x</span>
        </p>
        <h3 style={{ color: "#7C7C7C" }}>{TrimString(30, details.title)}</h3>
        <h2 style={{ marginTop: "10px", color: "#EE9F8B" }}>
          <small>USD</small>
          {details.price} <span style={{ color: "#e7e7e7" }}>X</span>{" "}
          <span style={{ color: "#000000" }}>{qty < 10 ? `0${qty}` : qty}</span>
        </h2>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Cardsm;
