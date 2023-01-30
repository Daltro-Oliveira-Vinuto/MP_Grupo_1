import s from "./register.module.css"

function Register () {
    return (
        <div className={s["register"]}>
            <form className={s["container"]}>
                <div className={s["title-container"]}>
                    <span className={s["title"]}>Cadastre-se</span>
                </div>
                <div className={s['inputs']}>
                    <input className={s['text-input']} placeholder="Nome"/>
                    <input type="email" className={s['text-input']} placeholder="Email"/>
                    <input type="password" className={s['text-input']} placeholder="Password"/>
                    <div className={s['options']}>
                        <div className={s['option']}>
                            <input id="estudante" type="radio" name="tipo"></input>
                            <label for="estudante">Estudante</label>
                        </div>
                        <div className={s['option']}>
                            <input id="professor" type="radio" name="tipo"></input>
                            <label for="professor">Professor(a)</label>
                        </div>
                    </div>
                    <button className={s['register-button']}>CADASTRAR</button>
                </div>
            </form>
        </div>
    )
}

export default Register