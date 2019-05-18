import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import STORE from "./STORE";

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
        <Header />
        <Main
          features={this.state.STORE.features}
          selected={this.state.selected}
          updateFeature={(index, item) => this.updateFeature(index, item)}
        />
      </div>
    );
  }
}

export default App;
