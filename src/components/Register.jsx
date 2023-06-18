import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Register = ({ history }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      toast.error("Ya hay una sesion iniciada"); // Display toast notification
      navigate("/"); // Redirect to the index page
    }
  }, [loggedInUser, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists in the user data
    const emailExists = existingUsers.some((user) => user.email === email);
    const usernameExists = existingUsers.some(
      (user) => user.username === username
    );
    if (password !== password2) {
      toast.error("Las contraseñas no coinciden");
      setPassword('');
      setPassword2('');
    }else if (password.length < 6) {
      toast.error("La contraseña debe tener más de 6 caracteres");
      setPassword("");
      setPassword2("");
    }else if (emailExists) {
      // Display an error message or handle the duplicate email case
      toast.error("El correo ya esta en uso. Por favor, ingrese otro.");
      setEmail("");
    } else if (usernameExists) {
      // Display an error message or handle the duplicate username case
      toast.error("El nombre de usuario ya esta en uso. Por favor, ingrese otro.");
      setUsername("");
    } else {
      const newUser = { username, email, password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Registro</span>
            <form onSubmit={handleRegister}>
              <div className="input-field">
                <i class="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username">Usuario</label>
              </div>
              <div className="input-field">
                <i class="material-icons prefix">email</i>
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
                <i class="material-icons prefix">lock</i>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Contraseña</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Debe tener más de 6 caracteres
                </span>
              </div>
              <div className="input-field">
                <i class="material-icons prefix">lock</i>
                <input
                  type="password"
                  id="password2"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
                <label htmlFor="password2">Contraseña nuevamente</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Las contraseñas deben coincidir
                </span>
              </div>
              <button type="submit" className="btn waves-effect waves-light">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
