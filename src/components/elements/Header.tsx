
import { Link } from "react-router-dom";
export default function Header(){
    return (
      <header className="header">
        
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ProfilePage" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  </header>
         

    )
}