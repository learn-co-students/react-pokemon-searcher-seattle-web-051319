import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
	
	constructor() {
		super();
		this.state = {
			allPokemon: [],
			searchPokemon: []
		};
	}
	
	componentDidMount() {
		fetch("http://localhost:3000/pokemon")
			.then(response => response.json())
			.then(json => {
				this.setState({
					allPokemon: json,
					searchPokemon: json
				})
			})
	}
	
	handleSearchChange = (e, event) => {
		const searchTerm = event.value;
		const foundPokemon = this.state.allPokemon.map(pokemon => {
			if (!!pokemon.name.match(searchTerm)) {
				return pokemon
			} else {
				return null
			}
		});
		const filterPokemon = foundPokemon.filter(pokemon => pokemon !== null);
		
		this.setState({
			searchPokemon: filterPokemon
		});
	}
	
	addPokemon = pokemon => {
		this.setState({
			searchPokemon: [
				...this.state.searchPokemon,
				pokemon
				]
		});
	}
	
	render() {
		return (
			<div>
				<h1>Pokemon Searcher</h1>
				<br />
				<Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
				<br />
				<PokemonCollection searchPokemon={this.state.searchPokemon} />
				<br />
				<PokemonForm addPokemon={this.addPokemon} />
			</div>
		)
	}
	
}

export default PokemonPage;