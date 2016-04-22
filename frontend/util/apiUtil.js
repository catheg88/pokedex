var ServerActions = require('../actions/serverActions');

module.exports = {
  fetchAllPokemons: function() {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon',
      success: function(response) {
        ServerActions.receiveAllPokemons(response);
      }
    });
  },

  fetchSinglePokemon: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/pokemon/' + id,
      success: function(response) {
        ServerActions.receiveOnePokemon(response);
      }
    });
  }
};
