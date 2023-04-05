import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div class="c-footer">
                    <div class="c-footer__wrap">
                        <div class="c-footer__logo">
                            <div class="c-footer__logo--wrap">
                                <Link href="/">
                                    <img src="/images/logo-footer.png" alt="" />
                                </Link>
                                <div class="c-footer__address">
                                    <p>
                                        BUREX205 3-5-2 <br />
                                        KOJIMACHI,CHIYODA-KU<br />
                                        TOKYO, 102-0083 JAPAN<br />
                                        <br />
                                        03-6670-1691
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="c-footer__nav">
                            <ul>
                                <li>
                                    <Link href="/drone/">ドローン</Link>
                                </li>
                                <li>
                                    <Link href="/metaverse/">メタバース</Link>
                                </li>
                                <li>
                                    <Link href="/web3/">WEB3.0</Link>
                                </li>
                                <li>
                                    <Link href="/3dscan/">3Dスキャン</Link>
                                </li>
                                <li>
                                    <Link href="/movie/">広報動画</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="https://zexa.com/" class="c-external-link" target="_blank" rel="noopener noreferrer">プロジェクト一覧</Link>
                                </li>
                                <li>
                                    <Link href="/download/">PC版ダウンロード</Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@zexaverse.co.jp">お問い合わせ</Link>
                                </li>
                                <li>
                                    <Link href="/company/">会社情報</Link>
                                </li>
                                <li>
                                    <Link href="/policy/">プライバシーポリシー</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="c-footer__socical">
                            <Link href="https://www.instagram.com/zexaverse/"><img src="/images/ic-insta.svg" alt="instagram" /></Link>
                            <Link href="https://twitter.com/zexaverse"><img src="/images/ic-twitter.svg" alt="twitter" /></Link>
                            <Link href="https://www.youtube.com/channel/UC57pmp0OQf7egnTeecFRLTg"><img src="/images/ic-yt.svg" alt="youtube" /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
