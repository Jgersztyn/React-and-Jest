import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class IncrementButton extends React.Component {

	handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const ButtonResult = (props) => {
	return (
  	<div>
    	Value is {props.counter}
    </div>
  );
};

const TextForm = (props) => {
	return (
  	<div>
  	  <br />
    	<label for="input1"> Put Things: </label>
      <br />
      <input type="text" name="anydata" id="input1" placeholder="Enter text" className="formControl"></input>
  	</div>
  );
};

const DropsAndTops = (props) => {
	return (
  	<div>
    <br />
    	<select name="Favorite Thing Ever">
      	<option value="pizza" selected> Pizza </option>
        <option value="sleep"> Sleep </option>
        <option value="football"> Football </option>
        <option value="geology"> Geology </option>
      </select>
    </div>
  );
};

class ToggleButton extends React.Component {
	onRadioClick = () => {
  	console.log('Event: ');
  };

  render() {
    return (
      <div className="blueText">
        <br />
        <label for="radio1"> Are you cool? </label>
        <br />
        <input onClick={this.onRadioClick} type="radio" name="coolradio" id="radio1"></input>
      </div>
    );
  }
}

const SweetList = (props) => {
	return (
  	<div>
    	<br />
      Results:
    	<ul>
    	  <li>{props.numOne}</li>
        <li>{props.numTwo}</li>
    	</ul>
    </div>
  );
};

class App extends React.Component {
	state = {counter: 0 };

	incrementCounter = (incrementValue) => {
  	this.setState((prevState) => ({
			counter: prevState.counter + incrementValue
		}));
  }
  
	render() {
  	return (
    	<div>
      	<IncrementButton
        	incrementValue={1}
      		onClickFunction={this.incrementCounter}
        />
        <IncrementButton
        	incrementValue={5}
      		onClickFunction={this.incrementCounter}
        />
        <IncrementButton
        	incrementValue={10}
      		onClickFunction={this.incrementCounter}
        />
      	<ButtonResult counter={this.state.counter} />
        <TextForm />
        <DropsAndTops />
        <ToggleButton
        	radioClick={this.toggleButton}
        	reverseResults={this.toggleResults}
        />
        <SweetList
        	numOne={1}
          numTwo={2}
        />
      </div>
    );
  }
}

export default App;
