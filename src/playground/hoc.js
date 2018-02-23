import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Test</h1>
		<h2>{ props.info }</h2>
	</div>
);

ReactDOM.render(<Info info="Test Message" />, document.getElementById('app'));