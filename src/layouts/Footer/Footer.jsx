import "./Footer.scss";
import Instagram from "../../icons/Instagram";
import Phone from "../../icons/Phone";
import Linkicon from "../../icons/Linkicon";

const footerItems = [
    {
        title: "gofi.kz",
        link: "http://www.instagram.com/gofi.kz",
        icon: <Instagram />,
        isBlank: true,
    },
    {
        title: "+7 (708) 327 0965",
        link: "tel:+77083270965",
        icon: <Phone />,
        isBlank: false,
    },
    {
        title: "gofiofficial.kz@gmail.com",
        link: "mailto:gofiofficial.kz@gmail.com",
        icon: <Linkicon />,
        isBlank: false,
    },
];

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-links-list">
                {footerItems.map((item) => (
                    <li className="footer-links-item" key={item.title}>
                        <a
                            href={item.link}
                            target={ item.isBlank ? '_blank' : '_self' }
                            className="footer-link">
                            { item.icon }
                            { item.title }
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
