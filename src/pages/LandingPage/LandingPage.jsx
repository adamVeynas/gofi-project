
import UserProfile from "../../components/UserProfile/UserProfile";
import Logo from "../../components/Logo/Logo";
import iphoneBgLeft from '../../assets/iphone-left.png'
import iphoneBgRight from '../../assets/iphone-right.png'
import "./LandingPage.scss";
import PartnerJoin from "../../components/PartnerJoin/PartnerJoin";
import Footer from "../../layouts/Footer/Footer";


function LandingPage() {

    return (
        <div className="landing-wrap">
            <header className="header">
                <section className="header-section">
                    <Logo />
                    <UserProfile />
                </section>
            </header>

            <main className="main">
                <section className="main-section">
                    <div className="partner-join">
                        <h5 className="partner-join-title">
                            Станьте нашим партнером
                        </h5>
                        <PartnerJoin />
                    </div>
                    <div className="landing-promo">
                        <h1 className="landing-promo-title landing-promo-title_top">
                            <span>Размещайте бесплатно</span>
                            <span>свой товар</span>
                        </h1>

						<div className="landing-promo-imgs">
							<div className="landing-promo-img">
								<img src={iphoneBgRight} alt="iphone first promo image" />
							</div>
							<div className="landing-promo-img">
								<img src={iphoneBgLeft} alt="iphone second promo image" />
							</div>
						</div>

                        <h2 className="landing-promo-title landing-promo-title_bttm">
                            <span>Получайте большой</span>
                            <span>приток клиентов</span>
                        </h2>
                    </div>
                </section>
            </main>

			<Footer />
        </div>
    );
}

export default LandingPage;
