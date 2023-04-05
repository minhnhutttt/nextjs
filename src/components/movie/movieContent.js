import MovieItem from '@/components/movie/movieItem'

const special = {
    link: "https://www.youtube.com/watch?v=BEXQQaMvlCA",
    thumb: "/images/movie/movie__sp.jpg",
    title: "DIVER",
    text: "DIVER Game Centralization Teaser"
}
const data = [
    {
        id: "01",
        link: "https://www.youtube.com/watch?v=vImm5t6d_gw",
        thumb: "/images/movie/movie__202331_3.jpg",
        title: "ZEXAVERSE",
        text: "Webブラウザからログインできるメタバースβ版の13ワールド一挙紹介！【後編】。"
    },
    {
        id: "02",
        link: "https://www.youtube.com/watch?v=KjPUxWpxDps",
        thumb: "/images/movie/movie__202331_2.jpg",
        title: "ZEXAVERSE",
        text: "Webブラウザからログインできるメタバースβ版の13ワールド一挙紹介！【前編】。"
    },
    {
        id: "03",
        link: "https://www.youtube.com/watch?v=sdEr-e4gp4U",
        thumb: "/images/movie/movie__202331_1.jpg",
        title: "ZEXAVERSE",
        text: "Webブラウザ版の「ゼクサバース」は【マイクロメタバース】をコンセプトにワールド制作を行っております。メタバースをより身近に感じて頂けると共にURLを共有することで、同じワールドで交流することができるものとなっています。"
    },
    {
        id: "04",
        link: "https://www.youtube.com/watch?v=N2b5y86QPsE",
        thumb: "/images/movie/movie__2023130_5.jpg",
        title: "Meta Diver",
        text: "「Meta Diver」は、高精度の3Dスキャンによりデジタルアーカイブ化されたエジプトや日本の奈良など様々な世界遺産をVR動画で視聴できるスマートフォンアプリ（iOS/Android）です。"
    },
    {
        id: "05",
        link: "https://www.youtube.com/watch?v=HjTiHUzrTeY",
        thumb: "/images/movie/movie__2023130_4.jpg",
        title: "haribin clinic",
        text: ""
    },
    {
        id: "06",
        link: "https://www.youtube.com/watch?v=0vXUeZlnakY&t=84s",
        thumb: "/images/movie/movie__2023130_3.jpg",
        title: "ZEXAMINT",
        text: "ノーコードで誰でもNFTを無限に自動発行できるWeb3サービス登場！大切なデジタルデータを【誰が見ても本物】だと証明出来ます！画像から音楽、さらに動画までさまざまなファイル形式のオリジナルNFTがわずかなステップで作成可能です。"
    },
    {
        id: "07",
        link: "https://www.youtube.com/watch?v=ClpyT5gfnNc",
        thumb: "/images/movie/movie__2023130_2.jpg",
        title: "ZEXAVERSE TOKYO",
        text: "ZEXAVERSE TOKYOでは初心者の方でも安心してNFTの発行、購入などの取引について相談できる窓口NFTカウンターを開設しています。"
    },
    {
        id: "08",
        link: "https://www.youtube.com/watch?v=rdcCgeK8_PY",
        thumb: "/images/movie/movie__2023130_1.jpg",
        title: "ZEXAVERSE TOKYO",
        text: "ZEXAVERSE TOKYOにあるメタバース空間で愛蔵品をデータ化、活用する【持ち物SCAN STUDIO】をご紹介。思い出の品を３Dデータ化できます！"
    },
    {
        id: "09",
        link: "https://www.youtube.com/watch?v=WTcoBXn4y6A",
        thumb: "/images/movie/movie__20221221_1.jpg",
        title: "ZEXAVERSE TOKYO",
        text: "ZEXAVERSE TOKYOの最先端歩行型VR機器【第2世代VRトレッドミル】のガイダンス動画。メタバース空間を自由に歩き回れます！"
    },
    {
        id: "10",
        link: "https://www.youtube.com/watch?v=Jjfg7Y2QgW4",
        thumb: "/images/movie/movie__20221221_2.jpg",
        title: "ZEXAVERSE TOKYO",
        text: "ZEXAVERSE TOKYOの【ZEXAGATE】をご紹介する動画。全身3Dスキャンして超リアルなアバターを作れ、メタバース空間ZEXAVERSEで操作できます。"
    },
    {
        id: "11",
        link: "https://www.youtube.com/watch?v=6qtvuJ0wftU",
        thumb: "/images/movie/movie__20221221_3.jpg",
        title: "サンタクロースからの手紙（NFT）",
        text: "フィンランドの本物のサンタクロースからよい子のみんなへのメッセージ動画です。"
    },
    {
        id: "12",
        link: "https://www.youtube.com/watch?v=agXOIAFaVdI",
        thumb: "/images/movie/movie__20221221_4.jpg",
        title: "サンタクロースからの手紙（NFT）",
        text: "【申し込み方法の動画】サンタクロースからの手紙（NFT）では申し込みをするとサンタクロースからのメッセージが入った手紙(NFT)を手に入れることができます。"
    },
]
export default function MovieContent() {
    return (
        <div className="pr-video">
            <span className="c-content__bg">
                <img className="left-to-right" src="/images/movie/bg-movie.png" alt="movie" />
            </span>
            <div className="pr-video__wrap">
                <h4 className="pr-video__ttl">最近のリリース</h4>
                <div className="pr-video__special">
                    <MovieItem link={special.link} thumb={special.thumb} title={special.title} text={special.text} />
                </div>
                <div className="pr-video__flex">
                    {data.map((item)=> {
                        return (
                            <MovieItem link={item.link} thumb={item.thumb} title={item.title} text={item.text} key={item.id} />
                        )
                    })}
                </div>
            </div>
            <div className="pr-video__more-link">
                <div className="pr-video__more-link--line"></div>
                <a href="https://www.youtube.com/channel/UC57pmp0OQf7egnTeecFRLTg">YouTubeチャンネルへ</a>
            </div>
        </div>
    )
}
