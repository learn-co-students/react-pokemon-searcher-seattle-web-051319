import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {	
	
	constructor(props) {
		super();
		this.state = {
			image: props.pokemon.sprites.front
		}
	}
	
	findHp = () => {
		const stats = this.props.pokemon.stats;
		
		for (let i = 0; i < stats.length; i++) {
			if (stats[i].name === "hp") {
				return stats[i].value
			}
		}
	}
	
	handleClick = () => {
		if (this.state.image === this.props.pokemon.sprites.front) {
			this.setState({
				image: this.props.pokemon.sprites.back
			})	
		} else {
			this.setState({
				image: this.props.pokemon.sprites.front
			})
		}
	}
	
	render() {		
		return (
			<Card onClick={this.handleClick}>
				<div>
					<div className="image">
						<img src={this.state.image} alt="oh no!" />
					</div>
					<div className="content">
						<div className="header">{this.props.pokemon.name}</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat red" />
							{this.findHp()} hp
						</span>
					</div>
				</div>
			</Card>
		)
	}
	
}

export default PokemonCard;