import React from 'react';

// Importing different components
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

// Components used to route based on the address
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


// We use exact because routes are like a switch statement that falls through, exact = true prevents that. Address has to completely match.
// No path is the not found page
const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact={true} path="/" component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
	</BrowserRouter>
);

export default AppRouter;