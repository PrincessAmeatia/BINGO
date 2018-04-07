import React, { Component } from "react";
import ReactDOM from "react-dom";

class BingoBoard extends Component {

    render() {

        let spaces = [];
        let random = 0;

        for (let counter=0; counter < 5; counter++) {
          random = Math.random() * 70;
          random = Math.round(random);
          spaces.push(<BingoSpace number={random} />);
        }

        return (
          <table border={1}>
            <tr>
              {spaces}
            </tr>
            <tr>
              {spaces}
            </tr>
            <tr>
              {spaces}
            </tr>
            <tr>
              {spaces}
            </tr>
            <tr>
              {spaces}
            </tr>            
          </table>
        );
    }
}

class BingoSpace extends Component {
  render() {
    return <td>{this.props.number}</td>;
  }
}

  
ReactDOM.render(
  <BingoBoard />,
  document.getElementById("root")
);