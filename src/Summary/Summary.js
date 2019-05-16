import React from "react";
import "./Summary.css";
import Feature from "../Feature/Feature";
import Total from "../Total/Total";

class Summary extends React.Component {
  render() {
    return (
      <div className="Summary">
        <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
        </section>
        <Feature />
        <Total />
      </div>
    );
  }
}

export default Summary;
