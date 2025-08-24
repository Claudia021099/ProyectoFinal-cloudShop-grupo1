import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";

const schema = yup.object({
  usuario: yup.string().required("El usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
}).required();

function Login({ isLoggedIn, setIsLoggedIn, setCount }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const onSubmit = ({ usuario, password }) => {
    if (usuario === "123" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", usuario);
      setIsLoggedIn(true);
      navigate("/login");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setCount(0);
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <div className="perfil-usuario">
        <h1>Bienvenido {localStorage.getItem("username")}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{ textAlign: "center" }}>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          {...register("usuario")}
        />
        {errors.usuario && <p style={{ color: "red" }}>{errors.usuario.message}</p>}
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;