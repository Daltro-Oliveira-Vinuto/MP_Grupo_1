import s from "./createQuestion.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuestion() {
  const [selectedQuestionType, setSelectedQuestionType] = useState("numeric");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedQuestionType(event.target.value);
  };

  return (
    <div className={s["create-question"]}>
      <form className={s["container"]}>
        <div className={s["title-container"]}>
          <span className={s["title"]}>Crie uma questão</span>
        </div>
        <div className={s["inputs"]}>
          <label for="question-type">Selecione o tipo de questão:</label>
          <select
            id="question-type"
            name="question-type"
            onChange={handleChange}
            className={s["select-input"]}
          >
            <option value="numeric">Numérica</option>
            <option value="multiple-choice">Múltipla escolha</option>
            <option value="true-false">Certo/Errado</option>
          </select>
          <label for="difficulty-level">
            Escolha o nível de dificuldade da questão:
          </label>
          <select
            id="difficulty-level"
            name="difficulty-level"
            className={s["select-input"]}
          >
            <option value="easy">Fácil</option>
            <option value="medium">Médio</option>
            <option value="hard">Difícil</option>
          </select>
          <label for="question-statement">
            Digite o enunciado da da questão:
          </label>
          <textarea
            id="question-statement"
            name="question-statement"
            className={s["text-input"]}
            placeholder="Enunciado"
          ></textarea>
          {selectedQuestionType === "multiple-choice" && (
            <div className={s["inputs"]}>
              <div>
                <label for="option1">a)</label>
                <input
                  type="text"
                  id="option1"
                  name="option1"
                  className={s["text-input"]}
                />
              </div>
              <div>
                <label for="option2">b)</label>
                <input
                  type="text"
                  id="option2"
                  name="option2"
                  className={s["text-input"]}
                />
              </div>
              <div>
                <label for="option3">c)</label>
                <input
                  type="text"
                  id="option3"
                  name="option3"
                  className={s["text-input"]}
                />
              </div>
              <div>
                <label for="option4">d)</label>
                <input
                  type="text"
                  id="option4"
                  name="option4"
                  className={s["text-input"]}
                />
              </div>
            </div>
          )}

          <button
            className={s["create-question-button"]}
            onClick={() => navigate("/profile")}
          >
            CRIAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestion;
