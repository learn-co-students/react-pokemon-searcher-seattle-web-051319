import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(element => {
          return <PokemonCard pokemon={element} key={element.id} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
