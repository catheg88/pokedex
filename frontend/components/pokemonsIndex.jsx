var React = require('react'),
    PokemonStore = require('../stores/pokemon.js'),
    ClientActions = require('../actions/clientActions'),
    PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemon: PokemonStore.all()
    };
  },

  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokemonStore.removeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({pokemon: PokemonStore.all()});
  },

  render: function() {
    var PokeIndexItems = this.state.pokemon.map(function(poke) {
      return <PokemonIndexItem pokemon={poke.name} key={poke.id}/>;
    });

    return (
      <ul>
        {PokeIndexItems}
      </ul>
    );
  }

});

module.exports = PokemonsIndex;
