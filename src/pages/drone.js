import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import SDGList from '@/components/common/sdgsList'
import Content from '@/components/content/content'
import ContentProject from '@/components/content/contentProject'
import ContentProjectItems from '@/components/content/contentProjectItems'
import { useAnimation } from '@/hook/animations';

export default function Drone() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/drone/" />
                <title>ドローン | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="ドローン | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/drone/" />
            </Head>
            <main className="page">
                <Title text="ドローン" title="drone" type="drone" />
                <Text>
                    農業、物流、インフラ点検など、さまざまな産業の社会課題をドローンで支援。空から産業革命を起こします。
                </Text>

                <SDGList isNotList numbers={[2,4,8,9,11]} />

                <Content
                    image="/images/drone/drone-01.jpg"
                    title="SDGS"
                    text=<>
                        ドローンが人々の日常に役立つ社会、ドローンと共存する社会の実現を目指します。<br />
                        物流、インフラ点検、災害対応等の分野で活用できる最先端技術を搭載したドローン開発を促進するとともに、離島をはじめとした地方地域のクオリティ･オブ･ライフ(QOL)の向上および、地域課題の解決に貢献します。
                    </>
                    type="bg-drone"
                />
                <Content
                    image="/images/drone/drone-02.jpg"
                    title="教育"
                    text=<>
                        一流のマシンを最大限活かすためには一流の操縦士が不可欠です。<br />
                        物流、医療、環境整備、点検、防災、観光など、各産業の課題解決の可能性を秘めているドローン。ドローンの社会実装に向けて、ドローン活用を持続的に行っていくための人材育成に貢献します。<br />
                        また、自社開発のドローンと3Dスキャン技術を使い収集した独自データを活用し、ICT教育にも取り組んでいます。
                    </>
                    type="bg-drone"
                    isReverse
                />
                <ContentProject type="bg-drone">
                    <ContentProjectItems project="META TOURS" />
                    <ContentProjectItems project="ZEXAVERSE" />
                    <ContentProjectItems project="ZEXAVERSE TOKYO" />
                </ContentProject>
            </main>
        </>
    )
}
