import s from "./login.module.css"

function Login () {
    return (
        <div className={s["login"]}>
            <div className={s["container"]}>
                <div className={s["title-container"]}>
                    <span className={s["title"]}>Faça login</span>
                </div>
                <div className={s['inputs']}>
                    <input className={s['text-input']} placeholder="Email"/>
                    <input className={s['text-input']} placeholder="Password"/>
                    <button className={s['login-button']}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login