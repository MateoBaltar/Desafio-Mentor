import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
const Navbar = () => {
  const { loggedInUser, handleLogout } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Desafio mentor
        </Link>
        {!loggedInUser && (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/Login">Iniciar sesion</Link>
            </li>
            <li>
              <Link to="/Register">Registrarse</Link>
            </li>
          </ul>
        )}
        {loggedInUser && (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Bienvenid@ {loggedInUser.username}</li>
            <li>
              <a href="" onClick={handleLogout}>
                Cerrar Sesion
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar