var React = require('react');

var PokeListItem = React.createClass({
  render: function() {
    return (
      <li onClick={this.showDetail} className='poke-list-item'>
        {this.props.pokemon}
      </li>
    );
  }
});

module.exports = PokeListItem;
