import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import SDGList from '@/components/common/sdgsList'
import Content from '@/components/content/content'
import ContentProject from '@/components/content/contentProject'
import ContentProjectItems from '@/components/content/contentProjectItems'

import { useAnimation } from '@/hook/animations';


export default function Scan3d() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/3dscan/" />
                <title>3Dスキャン | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="3Dスキャン | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/3dscan/" />
            </Head>
            <main className="page">
                <Title text="3Dスキャン" title="3D Scan" type="scan" />
                <Text>
                    最新ドローンを使った3Dスキャン技術で世界をアーカイブ化、未来にそのリアルな姿を伝えます。
                </Text>

                <SDGList numbers={[3,4,9,11,16]} />
                
                <Content
                    image="/images/3dscan/3d-img-01.jpg"
                    title="SDGS"
                    text=<>
                        "3Dスキャン技術 × ドローンで""地球""をスキャンする "<br />
                        最先端3Dスキャン技術と最先端ドローンを用いて地球の様々な場所を撮影しデジタルデータとしてアーカイブ化することにより、学習・研究に役立てたり、まだ解明されていない世界のミステリーを解く鍵となり、さまざまな産業の社会課題解決に貢献します。
                    </>
                    type="bg-3dscan"
                />
                <Content
                    image="/images/3dscan/3d-img-02.jpg"
                    title="教育"
                    text=<>
                        地理・歴史や3次元バーチャル修学旅行など、VRで学ぶ次世代の教育システムに貢献します。<br />
                        高精度3Dスキャンデータを元にした教材によるリアルで没入感のある体験は、ニューノーマル時代における教育課題解決に貢献します。
                    </>
                    type="bg-3dscan"
                    isReverse
                />

                <ContentProject type="bg-3dscan">
                    <ContentProjectItems project="META TOURS" />
                    <ContentProjectItems project="ZEXAMINT" />
                    <ContentProjectItems project="ZEXAVERSE" />
                    <ContentProjectItems project="ZEXAVERSE TOKYO" />
                </ContentProject>

            </main>
        </>
    )
}
