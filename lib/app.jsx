'use strict';

var React = require('react');

var boxStyle = {
  	color: 'red',
	height:'100px',
	width:'100px'
};

var Box = React.createClass({

	handleClick: function(){
		this.props.handleClick(this.props.rowIndex);
	},

  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={boxStyle} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
});

var Row = React.createClass({

	getInitialState: function() {
		
		return {
			numberClicks : 0,
			boxTab: ['-','-','-']
		};
	},

	handleClick : function(index){

		var newValue='X';
		if(this.state.numberClicks % 2 === 0){ newValue='0';}	
		var boxTab = this.state.boxTab;
		boxTab[index] = newValue;
		this.setState({
			numberClicks : this.state.numberClicks +1,
			boxTab: boxTab
		});
	
	},

	'render': function onRender () {

		var boxes = this.state.boxTab.map(function(value,index){

			return (
			<Box value={value} key={index} rowIndex={index} handleClick={this.handleClick}/>
			);

		}.bind(this));

		return( <div> {boxes} </div> );
	}

});

var Grid = React.createClass({

	'render': function onRender () {
		

		return( 
			<div> 
				<Row/><Row/><Row/>
		 	</div> 
		);
	}

});

React.render(<Grid/>, document.body);
