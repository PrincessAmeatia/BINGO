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
          <div className="container">
            <div className="bingo-board">
              {spaces}
            </div>
          </div>
        );
    }
}

class BingoSpace extends Component {

  constructor() {
    super();

    this.state = {
      active: false
    }
  }

  iWasClicked = () => {
    // this.setState({
    //   active: true
    // })

    this.setState({
      active: !this.state.active
    })
  }

  render() {

    let circleClassNames = "bingo-circle";

    if (this.state.active) {
      circleClassNames = "bingo-circle active";
    }

    if (this.props.isFreeSpace) {
      return (
        <div className="bingo-space" onClick={this.iWasClicked}>
          <div className={circleClassNames}>
              FREE
          </div>
        </div>
      )
    } else {
      return (
        <div className="bingo-space" onClick={this.iWasClicked}>
          <div className={circleClassNames}>
              {this.props.number}
          </div>
        </div>
      )
    }
  }

}

  
ReactDOM.render(
  <BingoBoard />,
  document.getElementById("root")
);