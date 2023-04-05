import Head from 'next/head'
import React from 'react';
import Title from '@/components/common/title'
import Text from '@/components/common/text'
import { useAnimation } from '@/hook/animations';

export default function Download() {
    useAnimation()

    return (
        <>
            <Head>
                <link rel="canonical" href="https://zexaverse.co.jp/download/" />
                <title>DOWNLOAD | 株式会社ZEXAVERSE</title>
                <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:title" content="DOWNLOAD | 株式会社ZEXAVERSE" />
                <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
                <meta property="og:url" content="https://zexaverse.co.jp/download/" />
            </Head>
            <main className="page">
                <Title text="PC版ダウンロード" title="DOWNLOAD" type="install" />
                <Text>
                    ZEXAVERSEのメタバースを体験するにはアプリケーションのダウンロードが必要になります。下記のダウンロードボタンよりインストーラーのダウンロードをお願いします。
                </Text>
                <div className="c-download">
                    <div className="c-download__inner">
                        <a href="https://dl.zexaverse.dev/zexaverse_installer_20230118_0.4.1_signed.zip" target="_blank" rel="noopener noreferrer" className="c-download__btn">DOWNLOAD(PC版)</a>
                        <p className="c-download__note">※アプリケーションのダウンロードはWi-Fiに接続しているPCでおこなってください。(5.28GB)<br />※ダウンロードの前に動作環境を必ずご確認ください。</p>
                    </div>
                </div>

                <div className="download">
                    <div className="download__wrap">
                        <div className="download__operating-environment">
                            <h2 className="download__ttl">&#9632; ZEXAVERSEの動作環境</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>OS</th>
                                        <td>Windows® 10 64 bit</td>
                                    </tr>
                                    <tr>
                                        <th>CPU</th>
                                        <td>Intel® Core™i5 12世代以上<br />11世代の場合4.4GHz以上</td>
                                    </tr>
                                    <tr>
                                        <th>メインメモリ</th>
                                        <td>8GB以上(16GB以上推奨)</td>
                                    </tr>
                                    <tr>
                                        <th>ストレージ</th>
                                        <td>100GB以上</td>
                                    </tr>
                                    <tr>
                                        <th>グラフィックカード</th>
                                        <td>NVIDIA® Geforce® GTX1660以上<br />AMD Radeon™ RX580 以上</td>
                                    </tr>
                                    <tr>
                                        <th>画面解像度</th>
                                        <td>特になし</td>
                                    </tr>
                                    <tr>
                                        <th>インターネット</th>
                                        <td>ブロードバンド接続</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="download__operating-environment__note">
                                ※上記環境よりも性能が低いPCの場合、起動しない場合がございます。
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </>
    )
}
