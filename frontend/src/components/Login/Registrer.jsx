import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function PatientSignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (
      formData.passwordConfirm &&
      formData.password !== formData.passwordConfirm
    ) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      setError("");
    }
  }, [formData]);
  const handleSubmit = (event) => {
    if (error === "") {
      axios
        .post(
          "http://localhost:5000/api/users/new",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 201) {
            navigate("/");
          }
        })
        .catch((err) => setError(err.response.data.error));
    }
    event.preventDefault();
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-green-300 rounded-2xl">
      <div className="w-[100%] h-[100%] flex flex-col items-center">
        <p className="text-2xl mt-6">dc</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center h-full"
        >
          <div className="flex flex-col">
            <label className="" htmlFor="Email">
              Adresse email:
            </label>
            <input
              className="w-96 h-10 rounded-xl pl-4 focus:border-2 focus:border-orange-500 focus:outline-none"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="password">
              Mot de passe:
            </label>
            <div className="relative">
              <input
                className={`appearance-none border ${
                  formData.passwordConfirm && !error && "border-green-500"
                } ${
                  error && "border-red-500"
                } w-96 h-10 rounded-xl pl-4 focus:border-2 focus:border-orange-500 focus:outline-none ${
                  formData.passwordConfirm && !error && "focus:border-green-500"
                } ${error && "focus:border-red-500"}`}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="password-confirm">
              Confirmez votre mot de passe:
            </label>
            <input
              className={`appearance-none border ${
                formData.passwordConfirm && !error && "border-green-500"
              } ${
                error && "border-red-500"
              } w-96 h-10 rounded-xl pl-4 focus:border-2 focus:border-orange-500 focus:outline-none ${
                formData.passwordConfirm && !error && "focus:border-green-500"
              } ${error && "focus:border-red-500"}`}
              type="password"
              id="password-confirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </div>
          <p className="flex text-sm italic">{error}</p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-400 py-2 px-3 rounded-xl text-white"
            >
              Se connecter
            </button>
          </div>
        </form>
        <p className="my-3">
          Vous avez déjà un compte ?{" "}
          <span className="link-animation">
            <Link to="/login" className="underline decoration-orange-500">
              S’identifier
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default PatientSignUp;