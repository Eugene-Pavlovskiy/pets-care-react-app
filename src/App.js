import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Horses from './pages/Horses';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/cats" exact component={Cats} />
				<Route path="/dogs" exact component={Dogs} />
				<Route path="/horses" exact component={Horses} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
