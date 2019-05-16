import React from "react";
import "./Feature.css";
import Options from "../Options/Options";

class Feature extends React.Component {
  render() {
    const key = "";
    const options = "";
    return (
      <div className="Feature">
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">{options}</ul>
        </div>
        <Options />
      </div>
    );
  }
}

export default Feature;
