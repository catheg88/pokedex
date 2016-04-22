var Dispatcher = require('../dispatcher/dispatcher'),
    PokemonConstants = require('../constants/pokemonConstants.js');

module.exports = {
  receiveAllPokemons: function(allPokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: allPokemons
    });
  },

  receiveOnePokemon: function(onePokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: onePokemon
    });
  }
};
