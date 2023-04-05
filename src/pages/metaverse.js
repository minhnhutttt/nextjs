import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import SDGList from '@/components/common/sdgsList'
import Content from '@/components/content/content'
import ContentProject from '@/components/content/contentProject'
import ContentProjectItems from '@/components/content/contentProjectItems'
import { useAnimation } from '@/hook/animations';

export default function Metaverse() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/metaverse/" />
                <title>メタバース | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="metaverse | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/metaverse/" />
            </Head>
            <main className="page">
                <Title text="メタバース" title="metaverse" type="metaverse" />
                <Text>
                    誰もが平等かつ公正にアクセス可能なメタバース空間は、テクノロジーとの融合により新たな一つの社会として無限の可能性を秘めています。
                </Text>

                <SDGList isNotList numbers={[4, 5, 8, 9, 10]} />

                <Content
                    image="/images/metaverse/metaverse-01.jpg"
                    title="SDGS"
                    text=<>
                        物理世界とデジタル世界の架け橋となるリアルなメタバース空間の提供により、世界中の人々の生活の質を向上させることに貢献します。<br />
                        複数の人々がメタバース空間でリアルタイムで仮想的に共同作業を行うことで、個人、企業の枠を超えて協力して、持続可能性の問題に関する解決策を見つけることなども可能となります。
                    </>
                    type="bg-metaverse"
                />
                <Content
                    image="/images/metaverse/metaverse-02.jpg"
                    title="教育"
                    text=<>
                        時間や場所などの制約がなく、その場にいながら世界中の人々とつながることが可能なメタバースにより、世界中の叡智が集まり、さまざまな専門家や専門的なコンテンツにアクセスできるようになる教育空間としての活用も期待されます。<br />
                        私達はメタバースにより、世界中の人々に平等で質の高い教育機会の提供に貢献します。
                    </>
                    type="bg-metaverse"
                    isReverse
                />
                <ContentProject type="bg-metaverse">
                    <ContentProjectItems project="META TOURS" />
                    <ContentProjectItems project="ZEXAMARKET" />
                    <ContentProjectItems project="ZEXAVERSE" />
                    <ContentProjectItems project="ZEXAVERSE TOKYO" />
                </ContentProject>
            </main>
        </>
    )
}
