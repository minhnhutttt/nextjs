import { useState } from 'react';
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <header id="header">
                <div className="c-header">
                    <div className="c-header__logo">
                        <Link href={"/"}><img src="/images/logo.png" /></Link>
                    </div>
                    <div className="c-header__toggle">
                        <div className="menu-toggle hamburger" onClick={toggleMenu}>
                            <div className={`hamburger-lines ${menuOpen ? 'is-active' : ''}`}>
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={`g-nav ${menuOpen ? 'is-active' : ''}`}>
                    <div className="g-nav__inner">
                        <div className="g-nav__main">
                            <ul className="g-nav__list">
                                <li className="g-nav__list--item">
                                    <Link href="/drone/">DRONE<span>-ドローン-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="/metaverse/">METAVERSE<span>-メタバース-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="/web3/">WEB 3.0<span>-ウェブスリー-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="/3dscan/">3D SCAN<span>-3Dスキャン-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="https://zexa.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="external-link">ALL PROJECT</div>
                                        <span>-プロジェクト一覧-</span>
                                    </Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="/movie/">PR VIDEO<span>-広報動画-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="/download/">DOWNLOAD<span>-PC版ダウンロード-</span></Link>
                                </li>
                                <li className="g-nav__list--item">
                                    <Link href="mailto:info@zexaverse.co.jp">CONTACT<span>-お問い合わせ-</span></Link>
                                </li>
                            </ul>
                            <div className="g-nav__company">
                                <p className="g-nav__company--ttl">ZEXAVERSE Inc</p>
                                <div className="g-nav__company--address">
                                    <p>
                                        BUREX205 3-5-2 <br />
                                        KOJIMACHI,CHIYODA-KU<br />
                                        TOKYO, 102-0083 JAPAN<br />
                                        <br />
                                        03-6670-1691
                                    </p>
                                </div>
                                <div className="g-nav__company--leagal">
                                    <Link href="/company/">会社情報</Link>
                                    <br />
                                    <Link href="/policy/">プライバシーポリシー</Link>
                                </div>
                            </div>
                            <div className="g-nav__sns">
                                <p className="g-nav__sns--ttl">Official SNS</p>
                                <div className="g-nav__sns--list">
                                    <Link href="https://www.instagram.com/zexaverse/">
                                        <img src="/images/ic-insta-bl.svg" alt="instagram" />
                                    </Link>
                                    <Link href="https://twitter.com/zexaverse">
                                        <img src="/images/ic-twitter-bl.svg" alt="twitter" />
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UC57pmp0OQf7egnTeecFRLTg">
                                        <img src="/images/ic-yt-bl.svg" alt="youtube" />
                                    </Link>
                                </div>
                            </div>
                            <div className="g-nav__copy">
                                © 2022 ZEXAVERSE Inc.
                            </div>
                        </div>
                        <div className="g-nav__bg"></div>
                    </div>
                </nav>
            </header>
        </>
    )
}
