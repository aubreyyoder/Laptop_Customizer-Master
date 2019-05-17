import React from "react";
import "./TechSpecs.css";
import Feature from "../Feature/Feature";

class TechSpecs extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  render() {
    return (
      <div className="TechSpecs">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {this.props.features}
        <Feature state={this.state} features={this.props.features} />
      </div>
    );
  }
}

export default TechSpecs;
