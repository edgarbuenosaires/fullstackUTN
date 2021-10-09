import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Footer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      
    </Router>
    // <div className="App">
    //   </Header>
    //   
    //   
    // {/* <header className="App-header">
    // <img src={logo} className="App-logo" alt="logo" />
    // <p>
    //   Edit <code>src/App.js</code> and save to reload.
    // </p>
    // <a
    //   className="App-link"
    //   href="https://reactjs.org"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   Learn React
    // </a>
    // </header> */}
    // </div>
  );
}

export default App;
