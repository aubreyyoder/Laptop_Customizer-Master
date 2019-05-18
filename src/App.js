import React from "react";
import "./App.css";
import Header from "./Header/Header";
import STORE from "./STORE";
import Feature from "./Feature/Feature";
import Summary from "./Summary/Summary";
import Total from "./Total/Total";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      STORE,
      selected: {
        Processor: {
          name: "",
          cost: ""
        },
        "Operating System": {
          name: "",
          cost: ""
        },
        "Video Card": {
          name: "",
          cost: ""
        },
        Display: {
          name: "",
          cost: ""
        }
      }
    };
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <section slassName="main_form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>

            <Feature
              features={this.state.STORE.FEATURES}
              selected={this.state.selected}
              updateFeature={(index, item) => this.updateFeature(index, item)}
            />
          </section>
          <section className="main_summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary selected={this.state.selected} />
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
