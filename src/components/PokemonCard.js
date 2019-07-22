import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  handleClick = ev => {
    const image = ev.target.parentNode.parentNode.children[0].children[0]
    if (image.src.includes("back")) {
      image.src = this.props.pokemon.sprites.front
    }
    else {
      image.src = this.props.pokemon.sprites.back
    }
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
