import React from "react";
import "./Main.css";
import TechSpecs from "../TechSpecs/TechSpecs";
import Summary from "../Summary/Summary";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>

        <TechSpecs />
        <Summary />
      </div>
    );
  }
}

export default Main;
