import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Test</h1>
		<h2>{ props.info }</h2>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p> Private Info </p> }
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthenticated = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.auth ? (
				<WrappedComponent {...props} />
			) : (
				<p> Login to view info</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticated(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info="Test Message" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo auth={false} info="Test Message" />, document.getElementById('app'));