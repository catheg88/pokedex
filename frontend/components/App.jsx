var React = require('react'),
    PokemonIndexItem = require('./pokemonIndexItem'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;

var App = React.createClass({


  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonIndexItem />
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
