import "./NotificationList.scss";
import GarbageBasket from "../../icons/GarbageBasket";

function NotificationList({ data = [] }) {
    return (
        <ul className="notification-list">
            {data.map((item) => (
                <li className="notification-item" key={item.descr}>
                    <div className="notification-item-img">
                        <img src={item.img} alt="logotype notification list" />
                    </div>
                    <div className="notification-item-body">
                        <div className="notification-item-row">
                            <span className="notification-item-logo-name">
                                GO FI
                            </span>
                            <span className="notification-item-date">
                                19:18
                            </span>
                        </div>
                        <div className="notification-item-bttm">
                            <span className="notification-item-descr">
                                { item.descr }
                            </span>

                            <button
                                type="button"
                                className="notification-item-logo-name">
                                <GarbageBasket />
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default NotificationList;
