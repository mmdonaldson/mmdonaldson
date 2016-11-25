var React = require('react');
var ReactDOM = require('react-dom');
var ReactTooltip = require('react-tooltip');

var Tooltip = React.createClass({
  render: function() {
    return (
      <div style={{width: "200px",  margin: '0 auto', position: 'absolute', zIndex: 200, top: 200}}>
        <a data-tip="React-tooltip"> ◕‿‿◕ </a>
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    );
  }
});

ReactDOM.render(
  <Tooltip />,
  document.getElementById('app')
);
