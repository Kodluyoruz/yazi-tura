import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import options from "../../constants";
import { getRandomElement, findTotal } from "../../helpers";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: options[0],
      flipping: false,
      flips: [],
    };
  }
  handleClick = () => {
    this.setState({ flipping: true });
    const randomElement = getRandomElement(options);
    setTimeout(
      () =>
        this.setState({ flipping: false }, () => {
          this.setState({
            side: randomElement,
            flips: [...this.state.flips].concat([randomElement]),
          });
        }),
      1000
    );
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.flips.length} </strong>
          atıştan
          <div>
            {options.map((option) => {
              return (
                <div key={option}>
                  <strong> {findTotal(this.state.flips, option)} </strong>
                  {option}
                </div>
              );
            })}
          </div>
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
