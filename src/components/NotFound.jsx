import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <i className="material-icons error">error</i>
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">
        <button className="waves-effect waves-light btn back-home">Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
