import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
      <img src="./apifake/imagem/logo1.png" alt="react-bootstrap" height="100"></img>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/Apartamentos`}>Apartamentos</Link>
        </li>
        <li>
          <Link to={`/Lançamentos`} >Lançamentos</Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            Fazer Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
