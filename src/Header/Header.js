import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__heading">
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </div>
      </div>
    );
  }
}

export default Header;
