import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from './pages/HomePage';
import ActividadesPage from './pages/ActividadesPage';
import ContactoPage from './pages/ContactoPage';
import MealsPage from './pages/MealsPage';
import StaffPage from './pages/StaffPage';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Nav />

        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/staff" exact component={StaffPage} />
        <Route path="/actividades" exact component={ActividadesPage} />
        <Route path="/meals" exact component={MealsPage} />
        <Route path="/contacto" exact component={ContactoPage} />    
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
