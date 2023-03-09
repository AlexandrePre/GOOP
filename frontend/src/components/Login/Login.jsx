import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { authContext } from "../../hooks/authContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(authContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (auth.data.role === 1) {
  //     navigate("/home");
  //   }
  // }, []);

  const emailValidation = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  // const handleShowhide = () => {
  //   setShow(!show);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("user/login", { email, password })
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
