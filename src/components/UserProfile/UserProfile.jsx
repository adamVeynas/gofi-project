import { useEffect, useState } from "react";
import logo2 from '../../assets/logo-2.svg'
import NotitficationBadge from "../NotificationBadge/NotificationBadge";
import NotificationList from "../NotificationList/NotificationList";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import { useNavigate } from "react-router-dom";
import './UserProfile.scss'


const notifList = [
    {
        img: logo2,
        descr: "Регистрация успешно завершена",
    },
    {
        img: logo2,
        descr: "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
];

function UserProfile() {
    const [isLogged, setIsLogged] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
	const navigate = useNavigate()

	const loginHandler = () => {
		setIsLogged(true)
		localStorage.setItem('isSigned', 'true')
		navigate('/auth/login')
	}

	const logoutHandler = () => {
		setIsLogged(false)
		localStorage.clear()
		navigate('/')
	}

	useEffect(() => {
		const isSigned = !!localStorage.getItem('isSigned')
		
		if (isSigned) {
			setIsLogged(true)
		}
	}, [])

    return (
        <div className="user-profile">
            {isLogged ? (
                <>
                    <NotitficationBadge
                        onClick={() => setIsClicked(!isClicked)}
                        badgeCount={notifList.length}
                    />
                    <ProfileBtn onClick={logoutHandler}>ВЫЙТИ</ProfileBtn>
                    {
						isClicked && <NotificationList data={notifList} />
					}
                </>
            ) : (
                <ProfileBtn onClick={loginHandler}>ВОЙТИ</ProfileBtn>
            )}
        </div>
    );
}

export default UserProfile;
