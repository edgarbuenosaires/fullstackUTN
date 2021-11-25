import '../../styles/components/layout/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'

var element = <FontAwesomeIcon icon={faRunning} size="4x" style={{alignItems:'center'}}/>

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <h4>{element}</h4>
                <h1>DesarrolloFIT</h1>
            </div>
        </header>
    )
}

export default Header;