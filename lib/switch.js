'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var Switch = React.createClass({
  displayName: 'Switch',

  mixins: [PureRenderMixin],

  propTypes: {
    label: React.PropTypes.node,
    style: React.PropTypes.object
  },

  render: function render() {
    return React.createElement(
      'p',
      null,
      'test'
    );
  }

});

module.exports = Switch;