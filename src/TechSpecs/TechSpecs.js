import React from "react";
import "./TechSpecs.css";
import Feature from "../Feature/Feature";

class TechSpecs extends React.Component {
  render() {
    return (
      <div className="TechSpecs">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {this.props.features}
        <Feature
          features={this.props.features}
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default TechSpecs;
