import React, { Component } from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText:
        "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    };
  }

  updateValue = newVal => {
    this.setState({
      displayText: newVal
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <UserInputDisplay
            initialVal={this.state.displayText}
            updateValue={this.updateValue}
          />
        </div>
        <div className="col-6">
          <MarkdownExample displayText={this.state.displayText} />
        </div>
      </div>
    );
  }
}

class UserInputDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.initialVal
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
    this.props.updateValue(event.target.value);
  };

  render() {
    let textAreaStyle = {
      height: "500px",
      width: "100%"
    };
    return (
      <textarea
        style={textAreaStyle}
        value={this.state.input}
        onChange={this.handleChange}
      />
    );
  }
}

class MarkdownExample extends Component {
  constructor(props) {
    super(props);
  }

  getMarkdownText() {
    var rawMarkup = marked(this.props.displayText, { sanitize: true });
    return { __html: rawMarkup };
  }
  render() {
    let markdownDisplay = {
      backgroundColor: "beige",
      height: "100%",
      color: "black"
    };
    return (
      <div
        style={markdownDisplay}
        dangerouslySetInnerHTML={this.getMarkdownText()}
      />
    );
  }
}

export default App;
