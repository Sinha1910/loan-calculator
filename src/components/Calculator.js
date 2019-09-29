import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import Sidebar from "./Sidebar"; 
import axios from 'axios'; 
import "../Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 500,
    monthValue: 6,
    interestRate: 0.25,
    amountPerMonth: 93,
    history: localStorage.getItem('oldRecords')
  };

  constructor(state){
    super();
    this.historyValue = this.historyValue.bind(this);
  }

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleMonthChange = value => {
    this.setState({ monthValue: value });
  };

  historyValue(record){
    this.setState({
      amountValue: record.amountValue,
      monthValue: record.monthValue,
      interestRate: record.interestRate,
      amountPerMonth: record.amountPerMonth,
    })
  }

  calculateLoan() {
    axios.get('https://ftl-frontend-test.herokuapp.com/interest?amount='+this.state.amountValue+'&numMonths='+this.state.monthValue)
      .then(res => {
        this.setState({ amountPerMonth: res.data.monthlyPayment.amount, interestRate: res.data.interestRate });
        this.storeValuesLocalStorage();
      })
      .catch(
      );
  }

  storeValuesLocalStorage(){
    var oldValues = localStorage.getItem('oldRecords');
    oldValues = oldValues ? JSON.parse(oldValues) : [];
    var newValues = {'monthValue': this.state.monthValue, 'interestRate': this.state.interestRate, 'amountValue': this.state.amountValue, 'amountPerMonth': this.state.amountPerMonth}; 
    oldValues.push(newValues);
    localStorage.setItem('oldRecords', JSON.stringify(oldValues))
    this.setState({history: localStorage.getItem('oldRecords')})
  }

  render() {
    const { amountValue, monthValue } = this.state;

    return (
      <div className="main-container">
        <div className="App">
          <div className="loan-calculator">
          <div className="LoanDetails">
          <h4>I want to borrow ${amountValue}</h4>
          <InputRange
            step={100}
            maxValue={5000}
            minValue={500}
            value={amountValue}
            onChange={this.handleAmountChange}
          />
          <h4>
            Over {monthValue} month{monthValue > 1 && "s"}
          </h4>
          <InputRange
            step={1}
            maxValue={24}
            minValue={6}
            value={monthValue}
            onChange={this.handleMonthChange}
          />
          </div>
        <button className="submit-button" onClick={() => this.calculateLoan()}>Calculate</button>
        <div className="DataDisplay"> 
          <Display interestRate={this.state.interestRate} amountPerMonth={this.state.amountPerMonth}></Display>
        </div>
        </div>
      </div>
      <div className="sidebar-container">
          <Sidebar historyValue= {this.historyValue} history={this.state.history}/>
      </div>
    </div>
    );
  }
}

export default Calculator;
