import "./AuthLogin.scss";
import logo from "../../assets/logo-2.svg";
import ButtonRed from "../../components/ButtonRed/ButtonRed";
import InputBase from "../../components/InputBase/InputBase";
import { useNavigate } from "react-router-dom";

function AuthLogin() {

	const navigate = useNavigate()


	const loginSubmitHandler = (ev) => {
		ev.preventDefault()
		console.log('loginSubmitHandler auth-login-form')

		navigate('/personal')
	}

    return (
        <div className="auth-wrap">
            <div className="auth-card">
                <div className="auth-img">
                    <img src={logo} alt="auth login logotype image" />
                    <div className="auth-txt">ВХОД</div>
                </div>
                <form className="auth-login-form">
                    <InputBase
                        name="userLogin"
                        id="userLogin"
                        type="text"
                        placeholder="Логин"
                    />
                    <InputBase
                        placeholder="Пароль"
                        name="userPass"
                        id="userPass"
                        type="text"
                    />
                    <ButtonRed txt="Отправить" onClick={loginSubmitHandler} />
                </form>
            </div>
        </div>
    );
}

export default AuthLogin;
