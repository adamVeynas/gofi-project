import './NotificationBadge.scss'
import Notification from '../../icons/Notification';

function NotitficationBadge({ badgeCount, ...args }) {
    return (
        <div className="notification" {...args} >
            <Notification />
            <span className="notification-badge">{badgeCount}</span>
        </div>
    );
}

export default NotitficationBadge;
