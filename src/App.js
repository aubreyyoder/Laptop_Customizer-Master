import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <Main state={this.state} features={this.props.features} />
        <main />
      </div>
    );
  }
}

export default App;
