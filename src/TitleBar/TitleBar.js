import React from "react";
import "./TitleBar.css";

class TitleBar extends React.Component {
  render() {
    return (
      <div className="TitleBar header">
        <div className="TitleBar__heading">
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </div>
      </div>
    );
  }
}

export default TitleBar;
