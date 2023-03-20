import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import good from "../../assets/img/good.png";
import bad from "../../assets/img/bad.png";
import eyes from "../../assets/img/oeil.png";
import eyesInvisibles from "../../assets/img/oeilcache.png";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [logoValide, setLogoValide] = useState(false);

  const { login } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const emailValidation = (e) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,2})+$/;
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      setLogoValide(true);
    } else {
      setLogoValide(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("user/login", { email, password })
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
            navigate("/home");
          }
        })
        .catch((err) => err.response);
    }
  };

  const navigateCreateLogin = () => {
    navigate("/inscription");
  };

  return (
    <div className="containerFormLogin">
      <form className="formLogin" onSubmit={handleSubmit}>
        <h2 className="titleLogin">Connexion</h2>

        <div className="emailLogin">
          <input
            type="text"
            name="mail"
            placeholder="Email"
            onKeyUp={emailValidation}
            value={email}
            onChange={emailValidation}
            required="required"
            id="inputEmailLogin"
          />
          <img
            id="logoValidationLogin"
            src={logoValide ? good : bad}
            alt="validation"
          />
        </div>

        <div className="passwordLogin">
          <input
            name="password"
            type={passwordVisibility ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required="required"
            id="inputPasswordlogin"
          />
          <img
            id="btn-visibility-inscription-login"
            onClick={handleVisibility}
            src={passwordVisibility ? eyesInvisibles : eyes}
            role="presentation"
            alt="oeil"
          />
        </div>

        <button type="submit" className="btnlogin" value="Login">
          Connexion
        </button>
        <button onClick={navigateCreateLogin} type="button" id="btnCreateLogin">
          Je n'ai pas de compte
        </button>
      </form>
    </div>
  );
}
