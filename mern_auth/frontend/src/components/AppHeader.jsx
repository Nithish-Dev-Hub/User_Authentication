import logo from '../logo.svg';
import { Link } from "react-router-dom";

function AppHeader() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div>
                <nav>
                    <ul className="btn-container">
                        <li>
                            <Link className="btn-element" to="/login">Login</Link>
                        </li>
                        <li>
                            <Link className="btn-element" to="/register">Register</Link>
                        </li>
                        <li>
                            <Link className="btn-element" to="/update">Update</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default AppHeader;