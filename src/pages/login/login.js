import s from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className={s["login"]}>
      <form className={s["container"]}>
        <div className={s["title-container"]}>
          <span className={s["title"]}>Faça login</span>
        </div>
        <div className={s["inputs"]}>
          <input type="email" className={s["text-input"]} placeholder="Email" />
          <input
            type="password"
            className={s["text-input"]}
            placeholder="Password"
          />
          <button
            className={s["login-button"]}
            onClick={() => navigate("/profile")}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
