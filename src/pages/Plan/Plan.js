import React from 'react'

import Card from './Card'

import './Plan.css';

import traffic_lights from '~assets/images/traffic_lights.png';

class Plan extends React.Component {

  constructor(props) {
    super(props);

    const availableCards = [
      {
        label: 'puste',
        colors: []
      },
      {
        label: '',
        colors: ['CROSSING']
      },
      {
        label: '',
        colors: ['CROSSING_LEFT']
      },
      {
        label: '',
        colors: ['CROSSING_RIGHT']
      },
      {
        label: '',
        colors: ['CROSSING_UP']
      },
      {
        label: '',
        colors: ['CROSSING_DOWN']
      },
      {
        label: '',
        colors: ['HORIZONTAL']
      },
      {
        label: '',
        colors: ['VERTICAL']
      },
      {
        label: '',
        colors: ['TURN_LEFT_UP']
      },
      {
        label: '',
        colors: ['TURN_LEFT_DOWN']
      },
      {
        label: '',
        colors: ['TURN_RIGHT_UP']
      },
      {
        label: '',
        colors: ['TURN_RIGHT_DOWN']
      },

      {
        label: 'jedź w lewo',
        colors: ['green', 'black', 'red']
      },
      {
        label: 'jedź prosto',
        colors: ['blue', 'black', 'red']
      },
      {
        label: 'jedź w prawo',
        colors: ['blue', 'red', 'green']
      },
      {
        label: 'zawróc',
        colors: ['blue', 'red', 'blue']
      },

      {
        label: 'szukaj po lewej',
        colors: ['green', 'red', 'green']
      },
      {
        label: 'szukaj na wprost',
        colors: ['green', 'blue', 'green']
      },
      {
        label: 'szukaj po prawej',
        colors: ['red', 'green', 'red']
      },
      {
        label: 'zawróc (koniec)',
        colors: ['blue', 'red']
      },

      {
        label: 'stopper start',
        colors: ['red', 'black', 'blue', 'green']
      },
      {
        label: 'stopper stop',
        colors: ['green', 'blue', 'black', 'red']
      },
      {
        label: 'pauza',
        colors: ['red', 'blue', 'red']
      },
      {
        label: 'nitro boost',
        colors: ['blue', 'green', 'red']
      },

      {
        label: 'bardzo wolno',
        colors: ['red', 'green', 'blue']
      },
      {
        label: 'wolno',
        colors: ['red', 'black', 'red']
      },
      {
        label: 'podróz',
        colors: ['green', 'black', 'green']
      },
      {
        label: 'szybko',
        colors: ['blue', 'black', 'blue']
      },

      {
        label: 'turbo',
        colors: ['blue', 'green', 'blue']
      },

    ]

    const initialCards = [];
    for (let i = 0; i < 7 * 10; i++) {
      initialCards.push(['RIGHT']);
    }

    this.state = {
      showCodes: true,
      showGrid: true,
      selectedCard: -1,
      selectedImgUrl: '',
      direction: 'RIGHT',
      cards: initialCards,
      availableCards: availableCards,
    }
  }

  updateCard(colors) {
    let currentCards = this.state.cards.slice(0);
    currentCards[this.state.selectedCard] = colors;
    this.setState({ selectedCard: -1, cards: currentCards })
  }

  render() {

    return (
      <div>

        <div className="plan">
          {this.state.cards.map((codes, i) =>
            (<Card key={i}
              colors={codes}
              selected={this.state.selectedCard === i}
              showCodes={this.state.showCodes}
              showGrid={this.state.showGrid}
              onClick={() => this.setState({ selectedCard: i })} />)
          )}
        </div>

        <div>
          <label>
            <input type="checkbox" checked={this.state.showCodes}
              onClick={() => this.setState({ showCodes: !this.state.showCodes })} />
            SHOW CODES
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={this.state.showGrid}
              onClick={() => this.setState({ showGrid: !this.state.showGrid })} />
            SHOW GRID
          </label>
        </div>

        {this.state.selectedCard > -1 &&
          <div>
            <fieldset>
              <button className={`arrow ${this.state.direction === 'LEFT' ? 'selected' : ''}`} onClick={() => this.setState({ direction: 'LEFT' })}>&#x2b05;</button>
              <button className={`arrow ${this.state.direction === 'RIGHT' ? 'selected' : ''} mirrorFont`} onClick={() => this.setState({ direction: 'RIGHT' })}>&#x2b05;</button>
              <button className={`arrow ${this.state.direction === 'DOWN' ? 'selected' : ''}`} onClick={() => this.setState({ direction: 'DOWN' })}>&#x2b07;</button>
              <button className={`arrow ${this.state.direction === 'UP' ? 'selected' : ''}`} onClick={() => this.setState({ direction: 'UP' })}>&#x2b06;</button>
            </fieldset>
            <div>
              <img src={this.state.selectedImgUrl} className="cardImg" />
              <label>URL:</label><input type="text" onChange={(e) => this.setState({ selectedImgUrl: e.target.value })} />
              <button onClick={() => this.updateCard(['IMAGE', this.state.selectedImgUrl])}>select</button>
            </div>
            {this.state.availableCards.map((card, i) => {
              const codes = [this.state.direction].concat(card.colors);
              return (
                <div key={i} className="cardSelector">
                  <Card
                    colors={codes}
                    showCodes={true}
                    onClick={() => this.updateCard(codes)}
                  />
                  <label>{card.label}</label>
                </div>
              )
            })}
          </div>
        }
      </div>
    )
  }

}

export default Plan;