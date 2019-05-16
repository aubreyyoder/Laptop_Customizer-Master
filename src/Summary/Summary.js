import React from "react";
import "./Summary.css";
import Feature from "../Feature/Feature";
import Total from "../Total/Total";

class Summary extends React.Component {
  render() {
    return (
      <div className="Summary">
        <Feature />
        <Total />
      </div>
    );
  }
}

export default Summary;
