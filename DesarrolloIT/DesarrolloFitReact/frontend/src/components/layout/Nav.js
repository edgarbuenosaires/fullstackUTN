import { Link } from 'react-router-dom';
import '../../styles/components/layout/Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/staff">Staff</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/actividades">Actividades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/meals">Meals</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;