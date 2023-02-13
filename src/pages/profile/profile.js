import s from "./profile.module.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className={s["profile"]}>
      <form className={s["container"]}>
        <div className={s["title-container"]}>
          <span className={s["title"]}>Olá, usuário.</span>
        </div>
        <div className={s["sub-container"]}>
          <div>
            <div className={s["title-container"]}>
              <span className={s["subtitle"]}>Questões</span>
            </div>
            <button
              className={s["button"]}
              onClick={() => navigate("/createQuestion")}
            >
              CRIAR QUESTÃO
            </button>
          </div>
          <div
            style={{
              borderLeft: "1px solid black",
              height: "100%",
              left: "50%",
              margin: "auto",
            }}
          />
          <div>
            <div className={s["title-container"]}>
              <span className={s["subtitle"]}>Provas</span>
            </div>
            <button className={s["button"]}>CRIAR PROVA</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
