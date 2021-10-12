import React from 'react';
import '../../styles/components/layout/Header.css';
const Header = (props) => {
    return (
        <header>
            <div className="Holder">
                <div className="logo">
                    <img src="images/logo.png" width="100" alt="Tranpsotes X" />
                    <h1>Transportes X</h1>
                </div>
            </div>
        </header>
    );
}
export default Header;