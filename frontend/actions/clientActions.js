var apiUtil = require('../util/apiUtil');

module.exports = {
  fetchAllPokemons: function() {
    apiUtil.fetchAllPokemons();
  },

  fetchSinglePokemon: function(id) {
    apiUtil.fetchSinglePokemon(id);
  }
};
