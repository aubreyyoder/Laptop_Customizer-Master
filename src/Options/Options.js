import React from "react";
import "./Options.css";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  render() {
    return <div className="Options" />;
  }
}

export default Options;
