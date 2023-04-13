import ButtonRed from "../../components/ButtonRed/ButtonRed";
import personalImg from "../../assets/personal-img.png";
import "./Personal.scss";
import Phone from "../../icons/Phone";
import WhatsappIcon from "../../icons/WhatsappIcon";
import { useNavigate } from "react-router-dom";

function Personal() {
    const navigate = useNavigate();

    return (
        <div className="personal-wrap">
            <div className="personal-body">
                <div className="personal-img">
                    <img src={personalImg} alt="personal image" />
                </div>

                <h5 className="personal-title">Lorem ipsum</h5>

                <p className="personal-descr round-shadow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                </p>

                <ul className="personal-links">
                    <li>
                        <a
                            target="_blank"
                            href=""
                            className="personal-link round-shadow">
                            <WhatsappIcon />
                            +7 700 000 0000
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href=""
                            className="personal-link btn-red">
                            Мы в 2gis
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href=""
                            className="personal-link round-shadow">
                            <Phone />
                            +7 700 000 0000
                        </a>
                    </li>
                </ul>

                <div className="personal-work-time-address">
                    <p>Пн-Вс 09:00 - 21:00</p>
                    <p>Проспект Туран 48, Алматы</p>
                </div>

                <ButtonRed
                    onClick={() => navigate("settings")}
                    txt="Настройки аккаунта"
                />
            </div>
        </div>
    );
}

export default Personal;
