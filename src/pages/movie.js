import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import { useAnimation } from '@/hook/animations';
import MovieContent from '@/components/movie/movieContent';

export default function Movie() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/movie/" />
                <title>MOVIE | 株式会社ZEXAVERSE</title>
                <meta name="description"
                    content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="MOVIE | 株式会社ZEXAVERSE" />
                <meta property="og:description"
                    content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/movie/" />
            </Head>
            <main className="page">
                <Title text="広報動画" title="PR VIDEO" type="pr-movie" />
                <Text>
                    株式会社ZEXAVERSEではYouYube公式アカウントにて様々なサービスのリリース情報や使い方などを動画で公開しています。
                </Text>
                <MovieContent />
            </main>
        </>
    )
}
