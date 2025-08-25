import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";
import usuarios from "../../data/usuarios";

const schema = yup.object({
  usuario: yup.string().required("El usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

function Login({ isLoggedIn, setIsLoggedIn, setCount, onLogout }) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const onSubmit = ({ usuario, password }) => {
    const user = usuarios.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (user) {
      reset();
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("nombre", user.nombre);
      localStorage.setItem("email", user.email);
      localStorage.setItem("edad", user.edad);
      setIsLoggedIn(true);
      navigate("/login");
    } else {

    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("nombre");
    localStorage.removeItem("email");
    localStorage.removeItem("edad");
    setIsLoggedIn(false);
    setCount(0);
    reset();
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <div className="perfil-usuario">
        <ul>
          <li>Nombre: <span>{localStorage.getItem("nombre")}</span></li>
          <li>Email: <span>{localStorage.getItem("email")}</span></li>
          <li>Edad: <span>{localStorage.getItem("edad")}</span></li>
          <button onClick={() => {
            handleLogout();
            onLogout();
          }}>Logout</button>

        </ul>
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
        <alert style={{ color: 'red' }}>{errors.usuario?.message}</alert>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
        <alert style={{ color: 'red' }}>{errors.password?.message}</alert>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
