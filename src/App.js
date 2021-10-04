import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<>

			<Router>
				<Nav />

				<Switch>

					<Route exact path="/">
						<Header />
					</Route>

					<Route exact path="/home">
						<Header />
					</Route>

					<Route exact path="/about">
						<About />
					</Route>

					<Route exact path="/services">
						<Services />
					</Route>

					<Route exact path="/contact">
						<Contact />
					</Route>

					<Route path="*">
						<Notfound />
					</Route>

				</Switch>

				<Footer />

			</Router>

		</>
	);
}

export default App;
