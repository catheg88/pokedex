var React = require('react'),
    ReactDOM = require('react-dom'),
    APIUtil = require('./util/apiUtil.js'),
    pokemonStore = require('./stores/pokemon.js'),
    PokemonIndex = require('./components/pokemonsIndex.jsx'),
    App = require('./components/App'),
    clientActions = require('./actions/clientActions'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonDetail = require('./components/pokemonDetail'),
    HashHistory = require('react-router').hashHistory;

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
);




$(function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Router history={HashHistory}>{routes}</Router>, root);
});
