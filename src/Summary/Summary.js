import React from "react";
import "./Summary.css";
import Feature from "../Feature/Feature";
import Total from "../Total/Total";

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.state.selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">
          {this.state.selected[key].name}
        </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(this.state.selected[key].cost)}
        </div>
      </div>
    ));
    return (
      <div className="Summary">
        <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
          {summary}
          <div className="summary__total" />
        </section>
        <Feature
          features={this.props.features}
          selected={this.props.selected}
        />
        <Total selected={this.state.selected} />
      </div>
    );
  }
}

export default Summary;
