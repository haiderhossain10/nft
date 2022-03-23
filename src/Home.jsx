import Logo from "./img/logo.png";
import BannerLeft from "./img/banner-img-02.png";
import BannerRight from "./img/banner-img-01.png";
import Nft01 from "./img/nft-01.png";
import Nft02 from "./img/nft-02.png";
import Nft03 from "./img/nft-03.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BsReddit } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";
import ImgSlider from "./components/slider/ImgSlider";
import sharing from "./img/sharing.png";
import banner from "./img/banner.png";

function Home() {
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return (
        <>
            <header className="main-header-box">
                <div className="main-container">
                    <div className="main-header">
                        <div className="main-logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="main-nav">
                            <a href="#home" className="active">
                                Home
                            </a>
                            <a href="#nft">Nft Intro</a>
                            <a href="#about">About Us</a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="main-banner" id="home">
                <div className="banner-content">
                    <div className="banner-head">
                        <img src={banner} alt="banner text" />
                        <p>WEALTH SHARING NFT’s. THE NFT WITH UTILITY</p>
                    </div>
                    <div className="banner-wallet">
                        <h2>0/5555</h2>
                        <p>0x51444s2214x</p>
                        <h4>WAPES Costs 0.2 BnB</h4>
                        <p>Excluding Gas fees</p>
                        <button>Connect</button>
                        <p>Connect to Binance Smart Chain Network </p>
                    </div>
                    <div className="banner-bottom">
                        <h4>We Welcome You To Our Communities</h4>
                        <h4>**Place social media icons here**</h4>
                        <p>
                            <span>
                                WEALTH SHARING NFT’s - 5% ROYALTY FEE THAT
                                REWARDS THE NFT HOLDERS
                            </span>
                            Please make sure you are connected to the right
                            network (Binance Smart Chain Mainnet) and the
                            correct address. Please note: Once you make the
                            purchase, you cannot Undo this action.
                        </p>
                    </div>
                </div>
                <img
                    className="banner-img-left"
                    src={BannerLeft}
                    alt="bannerimage"
                />
                <img
                    className="banner-img-right"
                    src={BannerRight}
                    alt="bannerimage"
                />
            </section>

            <ImgSlider />

            <section className="nft-section" id="nft">
                <div className="main-container">
                    <div className="nft-content">
                        <div className="nft-left">
                            <img src={sharing} alt="sharing" />
                            <p>
                                <b>The NFT With Utilitiy!</b> These NFT's will
                                come with utility based on rarities for the Tier
                                Levels to provide access to Wealth Protocol’s
                                Ecosystem. All NFT’s will include Wealth Sharing
                                regardless of the rarity. The first level will
                                provide the investors with access to the base
                                tier of Wealth Protocol’s Ecosystem. The
                                intermediate level will give access to the
                                second tier. The third level will give access to
                                the top tier. Rewards will be automatically
                                distributed to the NFT holders. No gas fee will
                                be required from the investor.
                            </p>
                        </div>
                        <img src={Nft01} alt="nft 1" />
                    </div>
                    <div className="nft-content">
                        <img src={Nft02} alt="nft 2" />
                        <div className="nft-left">
                            <p>
                                <span>Wealthy Apes NFT Collection</span> of 6655
                                Wealthy Ape NFT s are digital collectibles with
                                utility which will be released on the Binance
                                Smart Chain with the Ethereum blockchain to
                                follow. The collection is brought to you by
                                Wealth Pro-tocol. The first release of Wealthy
                                Apes will be the collection of 5555 for the
                                Bi-nance Smart Chain to be released to the
                                public. The remaining 1100 will be minted and
                                given out to the community to private sale as
                                well as presale holders and for giveaways or
                                contests.
                            </p>
                            <button>MINT BSC NFT'S</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-box" id="about">
                <div className="main-container">
                    <div className="about-content">
                        <div className="about-left">
                            <h2>About Us</h2>
                            <p>
                                Wealth Protocol is the world's first ever,
                                comprehensive Crypto-Wealth Management
                                application that makes investing in crypto
                                simple, safe, and convenient. Wealth Wallet can
                                help you save money and stay tax compliant.
                                There are a variety of tax forms which may apply
                                for your cryptocurrency tax filing depending on
                                your tax residency as well as other factors.{" "}
                            </p>
                            <p>
                                Wealth wallet can automatically perform these
                                accounting calculations for you to minimize your
                                cryptocurrency capital gains and by utilizing
                                tax loss harvesting transactions which allow you
                                to realize capital losses, enable you to save on
                                your tax bill. Our Wealth Wallet app empowers
                                users to track their cryp-tocurrency investment
                                performances and provide detailed reporting to
                                assist in staying tax compliant.{" "}
                            </p>
                            <p>
                                Keep an eye on your portfolio, no matter where
                                you are. The utilities will pro-vide the
                                investor with access to our hybrid tier system
                                for the Wealth Protocol Platform comprising of
                                the Wealth Wallet.
                            </p>
                        </div>
                        <img src={Nft03} alt="about image" />
                    </div>
                </div>
            </section>

            <section>
                <div className="main-container">
                    <div className="about-text">
                        <p>
                            WEALTH SHARING NFT's - 5% ROYALTY FEE THAT
                            AUTOMATICALLY REWARDS THE NFT HOLDERS. NO GAS FE
                            REQUIRED
                        </p>
                    </div>
                </div>
            </section>

            <section className="footer-head-box">
                <div className="main-container">
                    <div className="footer-head">
                        <h4>
                            ETH NFT's coming soon! brought to you by{" "}
                            <h2>WEALTH PROTOCOL</h2>
                        </h4>
                    </div>
                </div>
            </section>

            <footer className="footer-box">
                <div className="main-container">
                    <div className="footer-content">
                        <div className="footer-social">
                            <a href="#">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <BsReddit />
                            </a>
                            <a href="#">
                                <BsTelegram />
                            </a>
                        </div>
                        <div className="footer-link">
                            <ul>
                                <li>
                                    Copyright © 2022 Wealth Protocol{" "}
                                    <a href="#">wealthprotocol.io</a>
                                </li>
                                <li>
                                    Send us email{" "}
                                    <a href="#">admin@wealthprotocol.io</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="back-top">
                        <a href="javascript:void(0)" onClick={backToTop}>
                            <HiArrowUp />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
