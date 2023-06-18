import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Index = () => {
  const { loggedInUser, handleLogout } = useContext(AuthContext);

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <h3>
              Bienvenid@ al desafio mentor experto.
            </h3>
            {loggedInUser && (
              <h6>Sesion iniciada como {loggedInUser.username}</h6>
            )}
            {!loggedInUser && (
              <p>
                Desarrolle una aplicación de react donde un usuario tenga que
                registrarse y posteriormente loguearse. Al hacer login tiene que
                aparecer un mensaje de Correcto si ingresa con los datos validos
                e incorrecto si no encuentra a ningún usuario registrado con
                esos datos.
              </p>
            )}
          </div>
          <div className="card-action">
            {!loggedInUser && (
              <div>
                <Link to="/login" className="waves-effect waves-light btn">
                  Iniciar Sesion
                </Link>
                <Link to="/register" className="waves-effect waves-light btn">
                  Registrarse
                </Link>
              </div>
            )}
            {loggedInUser && (
              <button
                onClick={handleLogout}
                className="waves-effect waves-light btn"
              >
                Cerrar Sesion
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
