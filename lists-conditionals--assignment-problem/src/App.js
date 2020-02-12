import React, { Component } from 'react';

import ValidationComponent from './ValidationComponent/validationComponent';
import CharComponent from './CharComponent/charComponent';

import './App.css';

class App extends Component {
  state = {
    stringLenght: 0,
    chars:[]
  }

  inputTextListener = (event) => {
    const enteredString = event.target.value;
    this.setState({stringLenght: enteredString.length})

    const chars = [...this.state.chars];
    chars.push(enteredString.charAt(enteredString.length-1));

    this.setState(
      {
        chars: chars
      }
    )
  }

  removeCharHandler = (id) => {
    const chars = [...this.state.chars];
    chars.splice(id, 1);
    this.setState(
      {
        chars: chars
      }
    )
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>

          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        <input type="text" onChange={(event) => this.inputTextListener(event)}/>
        <p>Length of entered String: {this.state.stringLenght}</p>
        <ValidationComponent lenght={this.state.stringLenght}/>

        {this.state.chars.map((char, index) => {
          return(
            <CharComponent
              key={index}
              value={char}
              clicked={() => this.removeCharHandler(index)}

            />
          )
        })}
      </div>
        );
        }
        }

export default App;
