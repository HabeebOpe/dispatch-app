import './main_component.css';
import Nav from './main_component/Nav';
import Home from './main_component/Home';
import Partner from './main_component/Partner';
import Solution from './main_component/Solution';
import Order from './main_component/Order';
import Footer from './main_component/Footer';

export default function App() {
  return (
    <div className="app">
        <div className="nav-home">
          <div className="nav-home-design"></div>
          <Nav />
          <Home />
        </div>
        <Partner />
        <Solution />
        <Order />
        <Footer />
    </div>
  );
}

