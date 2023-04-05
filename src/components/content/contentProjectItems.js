
import ContentProjectItem from '@/components/content/contentProjectItem'
const data = [
    {
        id: "01",
        image: "/images/project_metatours_tumb.jpg",
        title: "META TOURS",
        text: <>
            最新の3Dスキャン技術によって制作されたVR動画は、2D動画を圧倒的に凌駕する表現力および360度視点の没入体験を実現可能とします。<br />
            いつでもどこでも楽しめる世界旅行という「新たな学び」と「思い出」を同時に実現できる旅行体験を提案し、VRを通して教育とエンターテインメントを融合させた新たな価値を提供し続けます。
        </>,
        link: "https://meta-tours.jp/"
    },
    {
        id: "02",
        image: "/images/project_zexamint_tumb.jpg",
        title: "ZEXAMINT",
        text: <>
            デジタル世界を現実世界とつなぐエコシステムの中核となる可能性を秘めたNFTをもっと身近に。<br />
            ノーコードかつ低コストでNFTのMINTを可能とし、だれもが簡単にデジタル資産としてのNFT化が可能です。<br />
            画像から音楽、さらには動画までさまざまなファイル形式のオリジナルNFTがわずかなステップでノーコード作成可能なMINTプラットフォームです。
        </>,
        link: "https://www.zexamint.com/lp/"
    },
    {
        id: "03",
        image: "/images/project_metaverse_tumb.jpg",
        title: "ZEXAVERSE",
        text: <>
            ドローン映像技術と3Dスキャン技術を融合させ、世界各地の実際のデータを使用した立体映像を元に構築された唯一無二メタバース空間です。<br />
            リアルな世界を再現することで、デジタル世界と現実世界をよりシームレスにつなぐプラットフォームとして、さまざまな社会課題解決をサポートし、バリアフリー社会の実現を目指します。
        </>,
        link: "https://zexa-verse.com/"
    },
    {
        id: "04",
        image: "/images/project_zexaverse-tokyo_tumb.jpg",
        title: "ZEXAVERSE TOKYO",
        text: <>
            ブロックチェーン技術の発展の中で誕生したNFTにより、資産のデジタル表現が可能となりました。<br />
            メタバースの入り口としてのアバターも一つの資産であり、唯一無二のアイデンティとなります。<br />
            ZEXAVERSE TOKYOでは、精巧な3Dスキャン技術によるリアルな3DアバターNFT発行サービスが実体験できる「ゼクサゲート」はじめ、メタバース＆NFTの最先端を体験できます。
        </>,
        link: "https://zexaverse.tokyo/"
    },
    {
        id: "05",
        image: "/images/project_zexamarket_tumb.jpg",
        title: "ZEXAMARKET",
        text: <>
            メタバース空間であるZEXAVERSE上でのコンテンツアクセスや世界中の人々とのさまざまな交流など、仕事、生活、遊びといったリアル世界を拡張する魅力的なユーティリティをメインとしてラインナップされた総合NFTマーケットプレイスです。
        </>,
        link: "https://zexa.com/zexamarket"
    },
    {
        id: "06",
        image: "/images/project_web3.0_tumb.jpg",
        title: "WEB3.0の窓口",
        text: <>
            WEB3.0の窓口とは、名刺やチケットなどの身近な「モノ」を唯一無二かつ代替不可能なNFTとして発行できる窓口です。<br />
            「誰もが身近に使えるWEB3.0」をスローガンにWEB3.0にまだふれたことがない方でも安心してご利用いただけるサービスを目指しています。<br />
            NFT化できるもとして、他にポスターやスタンプなど豊富にご用意しております。
        </>,
        link: "https://web3-madoguchi.com/"
    },
    {
        id: "07",
        image: "/images/project_zexabox_tumb.jpg",
        title: "ZEXABOX",
        text: <>
            ドローンをはじめとした最先端のロボット開発技術に基づいた最高品質のマイニングマシーンを開発しました。<br />
            高いスケーラビリティを誇るマイニングにおいて、業界をリードする1Wあたりのハッシュレートを誇ります。<br />
            これからのWEB事業に不可欠なブロックチェーンにセキュリティを提供する上で、持続可能なマイニングを実現します。
        </>,
        link: "https://zexa-box.com/"
    },
    {
        id: "08",
        image: "/images/project_zexagift_tumb.jpg",
        title: "ZEXAGIFT",
        text: <>
            サービス(商品)提供者と消費者を直接つなぎ、脱中央集権のEコマースを実現するために、ZEXA GIFTは暗号通貨決済に特化したマーケットプレイスを提供します。<br />
            ブロックチェーン技術の基盤となるセキュリティと信頼が担保された国境を超えたシームレスな決済を実現することで、より広い市場へリーチをも可能とします。
        </>,
        link: "https://zexa.com/zexagift"
    },
]
export default function ContentProjectItems ({ project = "" }) {
    return (
        <>
            {project === "META TOURS" && <ContentProjectItem item={data[0]} />}
            {project === "ZEXAMINT" && <ContentProjectItem item={data[1]} />}
            {project === "ZEXAVERSE" && <ContentProjectItem item={data[2]} />}
            {project === "ZEXAVERSE TOKYO" && <ContentProjectItem item={data[3]} />}
            {project === "ZEXAMARKET" && <ContentProjectItem item={data[4]} />}
            {project === "WEB3.0の窓口" && <ContentProjectItem item={data[5]} />}
            {project === "ZEXABOX" && <ContentProjectItem item={data[6]} />}
            {project === "ZEXAGIFT" && <ContentProjectItem item={data[7]} />}
        </>
    )
}