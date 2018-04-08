import React, { Component } from "react";
import ReactDOM from "react-dom";

class BingoBoard extends Component {

    render() {

        let spaces = [];
        let random = 0;

        for (let counter=0; counter < 25; counter++) {
          random = Math.random() * 70;
          random = Math.round(random);

          if (counter == 12) {
            spaces.push(<BingoSpace isFreeSpace={true} />);
          } else {
            spaces.push(<BingoSpace number={random} />);
          }

        }

        return (
          <div className="bingo-board">
            {spaces}
          </div>
        );
    }
}

class BingoSpace extends Component {

  iWasClicked = () => {
    alert(this.props.number);
  }

  render() {

    if (this.props.isFreeSpace) {
      return <div className="bingo-space" onClick={this.iWasClicked}>FREE</div>;
    } else {
      return <div className="bingo-space" onClick={this.iWasClicked}>{this.props.number}</div>;
    }
  }

}

  
ReactDOM.render(
  <BingoBoard />,
  document.getElementById("root")
);