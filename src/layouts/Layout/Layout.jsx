import Logo from "../../components/Logo/Logo";
import SidebarList from "../../components/SidebarList/SidebarList";
import UserProfile from "../../components/UserProfile/UserProfile";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {

    return (
        <>
            <div className="layout-wrap">
                <div className="layout-body">
                    <aside className="layout-sidebar">
                        <div className="sidebar-top-logo">
                            <Logo />
                        </div>
						<SidebarList />
                    </aside>
                    <section className="layout-content">
						<div className="layout-content-top">
							<UserProfile />
						</div>
						<Outlet />
					</section>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Layout;
