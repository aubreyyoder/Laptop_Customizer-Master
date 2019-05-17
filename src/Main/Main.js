import React from "react";
import "./Main.css";
import TechSpecs from "../TechSpecs/TechSpecs";
import Summary from "../Summary/Summary";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  render() {
    return (
      <div className="Main">
        <TechSpecs state={this.state} features={this.props.features} />
        <Summary state={this.state} features={this.props.features} />
      </div>
    );
  }
}

export default Main;
