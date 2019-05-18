import React from "react";
import "./Main.css";
import TechSpecs from "../TechSpecs/TechSpecs";
import Summary from "../Summary/Summary";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <TechSpecs features={this.props.features} />
        <Summary features={this.props.features} />
      </div>
    );
  }
}

export default Main;
