import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
  state = {
    chars: [],
    inputLength: 0,
    inputText: ''
  }
  inputChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({
      chars: text.split(''),
      inputLength: text.length,
      inputText: text
    })
  }
  charClickHandler = (index) => {
    const charsCopy = [...this.state.chars]
    charsCopy.splice(index, 1)
    this.setState({
      chars: charsCopy,
      inputLength: charsCopy.length,
      inputText: charsCopy.join('')
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.inputChangeHandler} />
        <ValidationComponent textLength={this.state.inputLength} minLength="5" />
        <p>Length: <b>{this.state.inputLength}</b></p>
        {this.state.chars.map((char, index) => {
          return <CharComponent char={char} key={index}
                  click={() => this.charClickHandler(index)} />
        })}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
