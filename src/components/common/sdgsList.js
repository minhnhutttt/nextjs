import React from 'react';

const SDGList = ({ numbers, isNotList = false }) => {
    const sdgs = {
        1: {
            src: '/images/sdgs/ic_sdgs1.png',
            alt: '貧困をなくそう'
        },
        2: {
            src: '/images/sdgs/ic_sdgs2.png',
            alt: '飢餓をゼロに'
        },
        3: {
            src: '/images/sdgs/ic_sdgs3.png',
            alt: 'すべての人に健康と福祉を'
        },
        4: {
            src: '/images/sdgs/ic_sdgs4.png',
            alt: '質の高い教育をみんなに'
        },
        5: {
            src: '/images/sdgs/ic_sdgs5.png',
            alt: 'ジェンダー平等を実現しよう'
        },
        6: {
            src: '/images/sdgs/ic_sdgs6.png',
            alt: '安全な水とトイレを世界中に'
        },
        7: {
            src: '/images/sdgs/ic_sdgs7.png',
            alt: 'エネルギーをみんなに。そしてクリーンに'
        },
        8: {
            src: '/images/sdgs/ic_sdgs8.png',
            alt: '働きがいも経済成長も'
        },
        9: {
            src: '/images/sdgs/ic_sdgs9.png',
            alt: '産業と技術革新の基盤をつくろう'
        },
        10: {
            src: '/images/sdgs/ic_sdgs10.png',
            alt: '人や国の不平等をなくそう'
        },
        11: {
            src: '/images/sdgs/ic_sdgs11.png',
            alt: '住み続けられるまちづくりを'
        },
        12: {
            src: '/images/sdgs/ic_sdgs12.png',
            alt: 'つくる責任、つかう責任'
        },
        13: {
            src: '/images/sdgs/ic_sdgs13.png',
            alt: '気候変動に具体的な対策を'
        },
        14: {
            src: '/images/sdgs/ic_sdgs14.png',
            alt: '海の豊かさを守ろう'
        },
        15: {
            src: '/images/sdgs/ic_sdgs15.png',
            alt: '陸の豊かさも守ろう'
        },
        16: {
            src: '/images/sdgs/ic_sdgs16.png',
            alt: '平和と公正をすべての人に'
        },
        17: {
            src: '/images/sdgs/ic_sdgs17.png',
            alt: 'パートナーシップで目標を達成しよう'
        },
        18: {
            src: '/images/sdgs/ic_sdgs18.png',
            alt: ''
        }
    };

    return (
        <div className={`${!isNotList ? 'c-sdgs-list' : 'c-sdgs-all' }`}>
            {numbers.map((number) => (
                <div><img key={number} src={sdgs[number].src} alt={sdgs[number].alt} /></div>
            ))}
        </div>
    );
};

export default SDGList;
