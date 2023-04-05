import Head from 'next/head'
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import ThreeJsScene from "@/components/three/webgl";
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Navigation]);

export default function Home() {
  const speed = 6850;

  const mainSlider = useRef(null);
  const subSlider = useRef(null);
  const sliderNum = useRef(null);

  const handleSlideChangeTransitionStart = () => {
    const bar = document.querySelector('.mv__slider-progress--bar span');
    bar.style.transitionDuration = '0s';
    bar.style.transform = 'scaleX(0)';
  };

  const handleSlideChangeTransitionEnd = () => {
    const bar = document.querySelector('.mv__slider-progress--bar span');
    bar.style.transitionDuration = `${speed}ms`;
    bar.style.transform = 'scaleX(1)';
  };

  useEffect(() => {
    document.querySelector('.swiper-slide-0')?.play();
    if (mainSlider.current && subSlider.current) {
      const swiperInstance = mainSlider.current.swiper;
      const subSwiperInstance = subSlider.current.swiper;

      swiperInstance.on('slideChange', () => {
        const currentSlide = swiperInstance.realIndex;
        sliderNum.current.textContent = ('00' + (currentSlide + 1)).slice(-2);
        subSwiperInstance.slideToLoop(currentSlide);

        const videos = document.querySelectorAll('.mv_video');

        videos.forEach((video) => {
          video.pause();
        });

        const slideClass = document.querySelector(`.swiper-slide-${currentSlide}`);
        if (slideClass) {
          slideClass.currentTime = 0;
          slideClass.play();
        }
      });
    }
  }, [mainSlider, subSlider]);
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
      <main className="">
        {/* <ThreeJsScene /> */}
        <div className="mv">
          <div className="mv__inner">
            <div className="mv__content">
              <Swiper
                className="mv__slider-main"
                ref={mainSlider}
                loop={true}
                allowTouchMove={false}
                autoplay={{
                  delay: speed,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".mv__slider--next-btn",
                }}
                onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
                onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
              >
                <SwiperSlide>
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
                    <Link className="mv__btn" href="/drone/">詳細を見る</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                    <Link className="mv__btn" href="/metaverse/">詳細を見る</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                    <Link className="mv__btn" href="/web3/">詳細を見る</Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                    <Link className="mv__btn" href="/3dscan/">詳細を見る</Link>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="mv__slider-sub">
                <div className="mv__slider-sub--media">
                  <Swiper
                    ref={subSlider}
                    allowTouchMove={false}
                    slidesPerView={1}
                    effect='fade'
                    fadeEffect={{
                      crossFade: true
                    }}
                  >
                    <SwiperSlide>
                      <video className="mv_video swiper-slide-0" poster="/images/index/slider_drone.jpg" muted playsInline>
                        <source src="/video/mv_drone.mp4" type="video/mp4" />
                      </video>
                    </SwiperSlide>
                    <SwiperSlide>
                      <video className="mv_video swiper-slide-1" poster="/images/index/slider_zexaverse.jpg" muted playsInline>
                        <source src="/video/mv_zexaverse.mp4" type="video/mp4" />
                      </video>
                    </SwiperSlide>
                    <SwiperSlide>
                      <video className="mv_video swiper-slide-2" poster="/images/index/slider_web3.jpg" muted playsInline>
                        <source src="/video/mv_web3.mp4" type="video/mp4" />
                      </video>
                    </SwiperSlide>
                    <SwiperSlide>
                      <video className="mv_video swiper-slide-3" poster="/images/index/slider_zexaverse-tokyo.jpg" muted playsInline>
                        <source src="/video/mv_zexaverse-tokyo.mp4" type="video/mp4" />
                      </video>
                    </SwiperSlide>
                  </Swiper>
                  <div className="mv__slider--next-btn">skip</div>
                </div>

                <div className="mv__slider-progress">
                  <p className="mv__slider-progress--number current-slider" ref={sliderNum}>01</p>
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
