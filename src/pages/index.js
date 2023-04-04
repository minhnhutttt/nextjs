import Head from 'next/head'
import React, { useRef, useEffect } from 'react';
import { Inter } from 'next/font/google'
import ThreeJsScene from "@/components/three/webgl";
import Swiper from 'swiper';
import "swiper/swiper-bundle.css";
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  useEffect(() => {
    document.querySelector('.swiper-slide-0')?.play();

    const sliderNum = document.querySelector('.mv__slider-progress--number.current-slider');
    const bar = document.querySelector('.mv__slider-progress--bar span');
    const speed = 6850;

    const mainSlider = new Swiper(".mv__slider-main", {
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: speed,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mv__slider--next-btn",
      },
      on: {
        slideChangeTransitionStart: function () {
          bar.style.transitionDuration = '0s',
            bar.style.transform = 'scaleX(0)'
        },
        slideChangeTransitionEnd: function () {
          bar.style.transitionDuration = speed + 'ms',
            bar.style.transform = 'scaleX(1)'
        },
      }
    });

    const subSlider = new Swiper(".mv__slider-sub", {
      //loop: true,
      allowTouchMove: false,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });

    mainSlider.on('slideChange', function () {
      sliderNum.textContent = ('00' + (mainSlider.realIndex + 1)).slice(-2);
      subSlider.slideToLoop(mainSlider.realIndex);

      const videos = document.querySelectorAll('.mv_video');

      Array.prototype.forEach.call(videos, function (video) {
        video.pause();
      });

      const slideClass = document.querySelector('.swiper-slide-' + mainSlider.realIndex);
      if (slideClass) {
        slideClass.currentTime = 0;
        slideClass.play();
      }
    });
  }, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://zexaverse.co.jp/" />
        <title>株式会社ZEXAVERSE</title>
        <meta name="description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />

        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />

        <meta property="og:title" content="株式会社ZEXAVERSE" />
        <meta property="og:description" content="私たち ZEXAVERSE ＜ゼクサバース＞はメタバース関連サービスの自社開発とメタバース導入に向けた構築支援・運用を行う会社です。 メタバース開発・運用・NFTマーケットプレイスのことならゼクサバースにご相談ください。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zexaverse.co.jp/assets/images/og_image.png" />
        <meta property="og:url" content="https://zexaverse.co.jp/" />
        <meta property="og:site_name" content="株式会社ZEXAVERSE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="">
        {/* <ThreeJsScene /> */}
        <div className="mv">
          <div className="mv__inner">
            <div className="mv__content">
              <div className="swiper mv__slider mv__slider-main">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="mv__slider-main--ttl">
                      <p>ドローン</p>
                      <h2>drone</h2>
                    </div>
                    <div className="mv__slider-main--txt">農業、物流、インフラ点検など、さまざまな産業の社会課題をドローンで支援。空から産業革命を起こします。</div>
                    <div className="mv__slider-main--sdgs">
                      <div><img src="/images/sdgs/ic_sdgs2.png" alt="飢餓をゼロに" /></div>
                      <div><img src="/images/sdgs/ic_sdgs4.png" alt="質の高い教育をみんなに" /></div>
                      <div><img src="/images/sdgs/ic_sdgs8.png" alt="働きがいも経済成長も" /></div>
                      <div><img src="/images/sdgs/ic_sdgs9.png" alt="産業と技術革新の基盤をつくろう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs11.png" alt="住み続けられるまちづくりを" /></div>
                    </div>
                    <div className="mv__btn-wrap">
                      <a className="mv__btn" href="/html/drone/">詳細を見る</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mv__slider-main--ttl">
                      <p>メタバース</p>
                      <h2>metaverse</h2>
                    </div>
                    <div className="mv__slider-main--txt">誰もが平等かつ公正にアクセス可能なメタバース空間は、テクノロジーとの融合により新たな一つの社会として無限の可能性を秘めています。</div>
                    <div className="mv__slider-main--sdgs">
                      <div><img src="/images/sdgs/ic_sdgs4.png" alt="質の高い教育をみんなに" /></div>
                      <div><img src="/images/sdgs/ic_sdgs5.png" alt="ジェンダー平等を実現しよう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs8.png" alt="働きがいも経済成長も" /></div>
                      <div><img src="/images/sdgs/ic_sdgs9.png" alt="産業と技術革新の基盤をつくろう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs10.png" alt="人や国の不平等をなくそう" /></div>
                    </div>
                    <div className="mv__btn-wrap">
                      <a className="mv__btn" href="/html/metaverse/">詳細を見る</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mv__slider-main--ttl">
                      <p>ウェブスリー</p>
                      <h2>WEB 3.0</h2>
                    </div>
                    <div className="mv__slider-main--txt">ブロックチェーンの最先端技術を用いて、Web3.0導入による新たな事業創出、価値提供を支援致します。</div>
                    <div className="mv__slider-main--sdgs">
                      <div><img src="/images/sdgs/ic_sdgs1.png" alt="貧困をなくそう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs8.png" alt="働きがいも経済成長も" /></div>
                      <div><img src="/images/sdgs/ic_sdgs9.png" alt="産業と技術革新の基盤をつくろう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs10.png" alt="人や国の不平等をなくそう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs16.png" alt="平和と公正をすべての人に" /></div>
                    </div>
                    <div className="mv__btn-wrap">
                      <a className="mv__btn" href="/html/web3/">詳細を見る</a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mv__slider-main--ttl">
                      <p>3Dスキャン</p>
                      <h2>3D Scan</h2>
                    </div>
                    <div className="mv__slider-main--txt">最新ドローンを使った3Dスキャン技術で世界をアーカイブ化、未来にそのリアルな姿を伝えます。</div>
                    <div className="mv__slider-main--sdgs">
                      <div><img src="/images/sdgs/ic_sdgs3.png" alt="すべての人に健康と福祉を" /></div>
                      <div><img src="/images/sdgs/ic_sdgs4.png" alt="質の高い教育をみんなに" /></div>
                      <div><img src="/images/sdgs/ic_sdgs9.png" alt="産業と技術革新の基盤をつくろう" /></div>
                      <div><img src="/images/sdgs/ic_sdgs11.png" alt="住み続けられるまちづくりを" /></div>
                      <div><img src="/images/sdgs/ic_sdgs16.png" alt="平和と公正をすべての人に" /></div>
                    </div>
                    <div className="mv__btn-wrap">
                      <a className="mv__btn" href="/html/3dscan/">詳細を見る</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper mv__slider mv__slider-sub">
                <div className="swiper-wrapper mv__slider-sub--media">
                  <div className="swiper-slide">
                    <video className="mv_video swiper-slide-0" poster="/images/index/slider_drone.jpg" muted playsinline>
                      <source src="/video/mv_drone.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="swiper-slide">
                    <video className="mv_video swiper-slide-1" poster="/images/index/slider_zexaverse.jpg" muted playsinline>
                      <source src="/video/mv_zexaverse.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="swiper-slide">
                    <video className="mv_video swiper-slide-2" poster="/images/index/slider_web3.jpg" muted playsinline>
                      <source src="/video/mv_web3.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="swiper-slide">
                    <video className="mv_video swiper-slide-3" poster="/images/index/slider_zexaverse-tokyo.jpg" muted playsinline>
                      <source src="/video/mv_zexaverse-tokyo.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="mv__slider--next-btn">skip</div>
                </div>
                <div className="mv__slider-progress">
                  <p className="mv__slider-progress--number current-slider">01</p>
                  <div className="mv__slider-progress--bar">
                    <span></span>
                  </div>
                  <p className="mv__slider-progress--number total-slider">04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
