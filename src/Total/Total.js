import React from "react";
import "./Total.css";

class Total extends React.Component {
  render() {
    console.log(this.props.selected);
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

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
