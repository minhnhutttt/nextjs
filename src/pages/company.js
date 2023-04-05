import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import SDGList from '@/components/common/sdgsList'
import { useAnimation } from '@/hook/animations';

export default function Company() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/company/" />
                <title>会社情報 | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="会社情報 | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/company/" />
            </Head>
            <main className="page">
                <Title text="会社情報" title="company" type="company" />
                <Text>
                    私たちは「メタバース」「WEB3.0」「３Dスキャン」「ドローン」などの最先端技術を活用した取り組みを通してSDGsに貢献致します。
                </Text>

                <SDGList isNotList numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />

                <div className="c-company">
                    <div className="c-company__wrap">
                        <div className="c-company__content">
                            <h2 className="c-company__content--ttl">会社概要</h2>
                            <div className="c-company__info">
                                <dl className="c-company__info--dl">
                                    <dt>会社名</dt>
                                    <dd>株式会社ZEXAVERSE(ゼクサバース）</dd>
                                </dl>
                                <dl className="c-company__info--dl">
                                    <dt>代表者</dt>
                                    <dd>上瀧　良平</dd>
                                </dl>
                                <dl className="c-company__info--dl">
                                    <dt>CTO</dt>
                                    <dd>市川　泰雅</dd>
                                </dl>
                                <dl className="c-company__info--dl">
                                    <dt>所在地</dt>
                                    <dd>
                                        〒102-0083<br />
                                        東京都千代田区麹町3−5−2<br />
                                        ビュレックス麹町205
                                    </dd>
                                </dl>
                                <dl className="c-company__info--dl">
                                    <dt>電話番号</dt>
                                    <dd>03-6670-1691</dd>
                                </dl>
                                <dl className="c-company__info--dl">
                                    <dt>事業内容</dt>
                                    <dd>
                                        ・ブロックチェーン開発<br />
                                        ・メタバース開発／運営<br />
                                        ・NFT関連システム開発
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
