import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Logo.scss";

function Logo() {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="gofi logotype" className="logo-img" />
        </div>
    );
}

export default Logo;
