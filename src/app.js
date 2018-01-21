import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>
		This is the dashboard.
	</div>
);

const AddExpensePage = () => (
	<div>
		This is the add expense page.
	</div>
);

const EditExpensePage = () => (
	<div>
		This is the edit expense page.
	</div>
);

const HelpPage = () => (
	<div>
		This is the help page.
	</div>
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/">Home</NavLink>
		<NavLink to="/create">Create Expense</NavLink>
		<NavLink to="/edit">Edit Expense</NavLink>
		<NavLink to="/help">Help</NavLink>
	</header>
);

const NotFoundPage = () => (
	<div>
		404 Error - <Link to="/">Home</Link>
	</div>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
		
	</BrowserRouter>
);


ReactDOM.render(routes, document.getElementById("app"));