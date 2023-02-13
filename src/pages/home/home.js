import s from "./home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={s["home"]}>
      <form className={s["container"]}>
        <div className={s["title-container"]}>
          <span className={s["title"]}>Home</span>
        </div>
        <button className={s["button"]} onClick={() => navigate("/login")}>
          LOGIN
        </button>
        <button className={s["button"]} onClick={() => navigate("/register")}>
          CADASTRO
        </button>
      </form>
    </div>
  );
}

export default Home;
