import { useLocation, useNavigate } from "react-router-dom";
import UserIcon from "../../icons/UserIcon";
import PostIcon from "../../icons/PostIcon";
import StatisticIcon from "../../icons/StatisticIcon";
import TargetIcon from "../../icons/TargetIcon";
import FinanceIcon from "../../icons/FinanceIcon";
import SupportIcon from "../../icons/SupportIcon";
import "./SidebarList.scss";

const sidebarItems = [
    {
        title: "Личный кабинет",
        icon: <UserIcon />,
        to: "/personal",
    },
    {
        title: "Посты",
        icon: <PostIcon />,
        to: "/posts",
    },
    {
        title: "Статистика",
        icon: <StatisticIcon />,
        to: "/statistic",
    },
    {
        title: "Таргет",
        icon: <TargetIcon />,
        to: "/target",
    },
    {
        title: "Финансы",
        icon: <FinanceIcon />,
        to: "/finance",
    },
    {
        title: "Поддержка",
        icon: <SupportIcon />,
        to: "/support",
    },
];

function SidebarList() {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    return (
        <ul className="sidebar-list">
            {sidebarItems.map((item) => (
                <li
                    key={item.title}
                    className={
                        pathname.startsWith(item.to)
                            ? "sidebar-items sidebar-active-item"
                            : "sidebar-items"
                    }
                    onClick={() => navigate(item.to)}>
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            ))}
        </ul>
    );
}

export default SidebarList;
