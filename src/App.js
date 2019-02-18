import React, { Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import SpeechSynthesis from "./SpeechSynthesis";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSpeechSynthesis: true };
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch() {
    this.setState(state => {
      return { isSpeechSynthesis: !state.isSpeechSynthesis };
    });
  }
  // const [isSpeechSynthesis,setIsSpeechSynthesis] = useState(false);
  render() {
    return (
      <div className="App">
        <button onClick={this.handleSwitch}>switch</button>
        {this.state.isSpeechSynthesis && <SpeechSynthesis />}
        {!this.state.isSpeechSynthesis && (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        )}
      </div>
    );
  }
}

export default App;
