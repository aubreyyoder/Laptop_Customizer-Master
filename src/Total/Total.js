import React from "react";
import "./Total.css";

class Total extends React.Component {
  render() {
    const total = "";
    return (
      <div className="Total">
        <div className="summary__total__label">Your Price:</div>
        <div className="summary__total__value">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(total)}
        </div>
      </div>
    );
  }
}
export default Total;
