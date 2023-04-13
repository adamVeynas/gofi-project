import logo2 from "../../assets/logo-2.svg";
import InputBase from "../../components/InputBase/InputBase";
import "./Support.scss";

function Support() {
    return (
        <div className="support-wrap">
            <div class="auth-img support-img">
                <img src={logo2} alt="auth login logotype image" />
            </div>
            <h6 className="support-title">Команда GO FI</h6>

            <h6 className="support-subtitle">
                Заполните форму и мы обязательно с вами свяжемся
            </h6>

            <form className="support-form">
                <div className="support-inp-wrap">
                    <input
                        type="text"
                        name="supportUserName"
                        className="support-inp"
                        placeholder="Имя"
                    />
                </div>
                <div className="support-inp-wrap">
                    <input
                        type="text"
                        name="supportUserNumber"
                        className="support-inp"
                        placeholder="Номер телефона"
                    />
                </div>
                <div className="support-inp-wrap">
                    <textarea
                        name="supportQuestion"
                        className="support-inp"
                        cols="30"
                        rows="6"
                        placeholder="Напишите свой вопрос"
                    />
                </div>

                <div className="support-form-txt">отвечаем 24/7</div>

                <button
                    type="submit"
                    className="support-form-submit-btn btn-red">
                    Отправить
                </button>
            </form>

            <div className="support-bttm-txt">ПОДДЕРЖКА</div>
        </div>
    );
}

export default Support;
