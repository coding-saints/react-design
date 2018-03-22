import React, {Component} from 'react'
import './DemoTwo.scss'

export default class DemoTwo extends Component {

    state = {
        img: "https://i.imgur.com/Zkjee6Y.png"
    }
    render() {
        return <div id="demo-two-container">
            <div className="two-header">
              <h1>Flexbox Layout</h1>
            </div>
            <ul className="card-list">
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
              <li className="card card1">
                <img src={this.state.img} />
                <div className="card-text">
                  <h2>Card 1</h2>
                  <p>
                    This is the card that has stuff in it about the
                    image on the card
                  </p>
                </div>
              </li>
            </ul>
          </div>;
    }
}
   
