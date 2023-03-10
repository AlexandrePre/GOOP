import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import good from "../../assets/img/good.png";
import bad from "../../assets/img/bad.png";
import eyes from "../../assets/img/oeil.png";
import eyesInvisibles from "../../assets/img/oeilcache.png";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [logoValide, setLogoValide] = useState(false);

  const { login, auth } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.data) {
      navigate("/dashboard");
    }
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
        .post("user/login", { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            login(res.data);
          }
        })
        .catch((err) => err.response);
    }
  };

  return (
    <div className=" flex justify-center items-center rounded-2xl">
      <div className="w-[100%] h-[100%] flex flex-col items-center">
        <p className="text-2xl mt-6">Connexion</p>
        <form
          className="flex flex-col gap-6 justify-center h-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col relative">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className=" w-96 h-10 rounded-xl pl-4 focus:border-2 focus:border-orange-500 focus:outline-none"
              name="mail"
              placeholder="Email"
              onKeyUp={emailValidation}
              value={email}
              onChange={emailValidation}
              required="required"
            />
            <img
              id="logoValidationconnexion"
              src={logoValide ? good : bad}
              alt="validation"
            />
          </div>

          <div className="flex flex-col relative ">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="w-96 h-10 rounded-xl pl-4 focus:border-2 focus:border-orange-500 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
            <img
              id="btn-visibility"
              onClick={handleVisibility}
              src={passwordVisibility ? eyesInvisibles : eyes}
              role="presentation"
              alt="oeil"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-400 py-2 px-3 rounded-xl text-white"
              value="Login"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
