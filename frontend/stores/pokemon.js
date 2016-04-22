var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    pokemonConstants = require('../constants/pokemonConstants');

var pokemonStore = new Store(AppDispatcher);

var _pokemons = {};

pokemonStore.all = function () {
  var answer = [];
  for (var key in _pokemons) {
    if (_pokemons.hasOwnProperty(key)) {
      answer.push(_pokemons[key]);
    }
  }
  return answer;
};

function resetPokemons(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  pokemonStore.__emitChange();
}

pokemonStore.find = function(id) {
  return _pokemons[id];
};

pokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case pokemonConstants.POKEMONS_RECEIVED:
    resetPokemons(payload.pokemons);
    break;
  case pokemonConstants.POKEMON_RECEIVED:
    resetPokemons(payload.pokemon);
    break;
  }
};

module.exports = pokemonStore;
