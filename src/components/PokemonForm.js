import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
	constructor() {
		super()

		this.state = {
			name: '',
			hp: '',
			frontUrl: '',
			backUrl: ''
		}
	}
	
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})		
	}

	handleSubmit = event => {
		const pokemon = {
			name: this.state.name,
			stats: [{
				name: "hp",
				value: this.state.hp
			}],
			sprites: {
				front: this.state.frontUrl,
				back: this.state.backUrl
				}
		}

		const configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(pokemon)
		}
	
		fetch("http://localhost:3000/pokemon", configObj)
			.then(response => response.json())
			.then(json => this.props.addPokemon(json))
				
		this.setState({
			name: "",
			hp: "",
			frontUrl: "",
			backUrl: ""
		});
	}
	
	render() {
		return (
			<div>
				<h3>Add a Pokemon!</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths="equal">
						<Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
						<Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
						<Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
						<Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</div>
		)
	}
}

export default PokemonForm;