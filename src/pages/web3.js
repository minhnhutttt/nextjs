import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import SDGList from '@/components/common/sdgsList'
import Content from '@/components/content/content'
import ContentProject from '@/components/content/contentProject'
import ContentProjectItems from '@/components/content/contentProjectItems'

import { useAnimation } from '@/hook/animations';


export default function Web3() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/web3/" />
                <title>WEB3.0 | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="WEB3.0 | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/web3/" />
            </Head>
            <main className="page">
                <Title text="ウェブスリー" title="WEB3.0" type="web3" />
                <Text>
                    ブロックチェーンの最先端技術を用いて、Web3.0導入による新たな事業創出、価値提供を支援致します。
                </Text>

                <SDGList numbers={[1, 8, 9, 10, 16]} />

                <Content
                    image="/images/web3/web3-01.jpg"
                    title="SDGS"
                    text=<>
                        「WEB3.0」はいまだ定義が曖昧な最先端の業界でありつつも、あらゆる産業で持続可能な社会を進展させる無限の可能性があります。<br />
                        世界のWEB3.0最先端技術の進展に追随する日本発のWEB3.0先進企業の1つとして、不断のイノベーションと新たなWEB3.0ビジネスの創出を加速し、さまざまな業界の社会課題解決およびおよびデジタルトランスフォーメーション(DX)に向けたWEB3.0活用を推進します。
                    </>
                    type="bg-web3"
                />
                <Content
                    image="/images/web3/web3-02.jpg"
                    title="教育"
                    text=<>
                        デジタルコンテンツのNFT化による不正利用のない教育コンテンツの提供。安心、安全なセキュリティが担保された教育コンテンツへの能動的アクセス。VR空間におけるリアルな体験型学習機会の提供など。これら教育のデジタルトランスフォーメーション(DX)の課題解決に必要なテクノロジーをワンストップで使うための基盤となるWEB3.0技術。<br />
                        私達は先端WEB3.0技術により、新時代のICT教育の実現に貢献します。
                    </>
                    type="bg-web3"
                    isReverse
                />

                <ContentProject type="bg-web3">
                    <ContentProjectItems project="WEB3.0の窓口" />
                    <ContentProjectItems project="ZEXABOX" />
                    <ContentProjectItems project="ZEXAGIFT" />
                    <ContentProjectItems project="ZEXAMARKET" />
                    <ContentProjectItems project="ZEXAMINT" />
                </ContentProject>

            </main>
        </>
    )
}
