var React = require('react'),
    clientActions = require('../actions/clientActions'),
    PokemonStore = require('../stores/pokemon.js');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return {
      pokemon: this.getStateFromStore()
    };
  },

  componentDidMount: function() {
    PokemonStore.addListener(this.getStateFromStore);
    clientActions.fetchSinglePokemon(this.props.params.pokemonId);
  },

  getStateFromStore: function() {
    this.setState({pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId))});
  },

  render: function() {
    if (this.state.pokemon !== undefined) {
      return (
        <div>
          <div className='pokemon-detail-pane'>
            <div className='detail'>
              {this.state.pokemon.props}
              <img src={this.state.pokemon.props.image_url} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = PokemonDetail;
