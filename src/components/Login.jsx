import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const  {handleLogin, loggedInUser} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      toast.error("Ya hay una sesion iniciada"); // Muestra la notificacion de error
      navigate("/"); // Redirecciona al inicio
    }
  }, [loggedInUser, navigate]);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Busca el usuario con el mismo mail y contraseña
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Login exitoso
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      handleLogin(user)
      navigate("/");
    } else {
      // Login fallido
      toast.error("Error al iniciar sesion, nombre de usuario o contraseña invalida. Intente nuevamente.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Iniciar sesion</span>
            <form onSubmit={handleLoginFormSubmit}>
              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Contraseña</label>
              </div>
              <button type="submit" className="btn waves-effect waves-light">
                Iniciar sesion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
