const React = require('react/addons');
const PureRenderMixin = React.addons.PureRenderMixin;


const Switch = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    label: React.PropTypes.node,
    style: React.PropTypes.object,
  },

  render: function() {
    return (
      <p>test</p>
    );
  },

});

module.exports = Switch;
