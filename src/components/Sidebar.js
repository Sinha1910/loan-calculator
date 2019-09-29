import React, { Component } from "react";

class Sidebar extends Component {
    getOldRecords(){
        var oldRecords = this.props.history;
        oldRecords = oldRecords ? JSON.parse(oldRecords) : [];
        return oldRecords.map((record, index) => {
            return ( 
                    <div key={index} className="record-box" onClick={() => this.props.historyValue(record)}>
                        <span><b>Record: {index+1}</b></span><br/>
                        <span><b>Month:</b> {record.monthValue} </span>
                        <span><b>Amount:</b> {record.amountValue} </span><br/>
                        <span><b>Interest Rate:</b> {record.interestRate} </span>
                        <span><b>Amount Per Month:</b> {record.amountPerMonth} </span>
                    </div>
                )
        })

    }

    render() {
    return (
      <div className="sidebar-component">
          {this.getOldRecords()}
      </div>
    );
  }
}


export default Sidebar; 
