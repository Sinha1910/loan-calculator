import React, { Component } from "react";
import PropTypes from "prop-types";

class Display extends Component {
  render() {
    return (
      <div className="DataDisplay">
        <div className="interest-rate">
          {this.props.interestRate ? <span>Interest Rate: {this.props.interestRate} </span> : ''}
        </div>
        <div className="amount-per-month">
          {this.props.amountPerMonth ? <span>Amount Per Month: ${this.props.amountPerMonth} </span> : ''}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  monthvalue: PropTypes.number.isRequired,
  amountValue: PropTypes.number.isRequired
};

export default Display; 
