import React, { Component } from 'react';
import './Calculator.css';
import Input from './Input';
import Button from './Button';
import ClearButton from './ClearButton';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: "",
            prevNumber: "",
            currNumber: "",
            operator: ""
        }
    }

    addToInput = val => {
        this.setState({
            input: this.state.input + val
        });
    }

    divide = () => {
        this.setState({
            prevNumber: this.state.input,
            input: "",
            operator: "divide"
        });
    }

    multiply = () => {
        this.setState({
            prevNumber: this.state.input,
            input: "",
            operator: "multiply"
        });
    }

    plus = () => {
        this.setState({
            prevNumber: this.state.input,
            input: "",
            operator: "plus"
        });
    }

    substract = () => {
        this.setState({
            prevNumber: this.state.input,
            input: "",
            operator: "substract"
        });
    }

    addZeroDigit = val => {
        //if input not empty, add zero
        if(this.state.input !== "") {
            this.setState({
                input: this.state.input + val
            });
        }
    }

    addDecimalPoint = val => {
        //add decimal if there's no current decimal being presented
        if(this.state.input.indexOf(".") === -1) {
            this.setState({
                input: this.state.input + val
            });
        }
    }

    clearInput = () => {
        this.setState({
            input: ""
        });
    }

    evaluate = () => {
        this.state.currNumber = this.state.input;

        switch(this.state.operator){
            case "plus":
                this.setState({
                    input: parseFloat(this.state.prevNumber) + parseFloat(this.state.currNumber)
                });
                break;

            case "substract":
                this.setState({
                    input: parseFloat(this.state.prevNumber) - parseFloat(this.state.currNumber)
                });
                break;

            case "multiply":
                this.setState({
                    input: parseFloat(this.state.prevNumber) * parseFloat(this.state.currNumber)
                });
                break;
            
            case "divide":
                this.setState({
                    input: parseFloat(this.state.prevNumber) / parseFloat(this.state.currNumber)
                });
                break;
            default:
        }
    }

        render() { 
        return ( 
        <div className="wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
        
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
            
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.plus}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addDecimalPoint}>.</Button>
            <Button handleClick={this.addZeroDigit}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>

          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>

        </div>
         );
    }
}
 
export default Calculator;