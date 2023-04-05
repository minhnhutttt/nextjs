import { useEffect } from 'react';
import  gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useScaleDownAnimation = () => {
    gsap.utils.toArray('.scale-down').forEach((el) => {
        gsap.fromTo(
            el,
            {
                autoAlpha: 0,
                scale: 1.2,
            },
            {
                autoAlpha: 1,
                scale: 1,
                duration: 1.5,
                ease: 'easeOutSine',
                scrollTrigger: {
                    trigger: el,
                },
            }
        );
    });
};

export const useZoomOutAnimation = () => {
        gsap.utils.toArray('.zoom-out').forEach((el) => {
            gsap.fromTo(
                el,
                {
                    autoAlpha: 0,
                    scale: 0.8,
                },
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'expo',
                    scrollTrigger: {
                        trigger: el,
                    },
                }
            );
        });
};

export const useLeftToRightAnimation = () => {
    gsap.utils.toArray('.left-to-right').forEach((el) => {
        gsap.fromTo(
            el,
            {
                x: '-30%',
            },
            {
                x: '0',
                duration: 1.5,
                ease: 'easeOutSine',
                scrollTrigger: {
                    trigger: el,
                    start: 'top center+=300',
                    end: 'bottom top',
                    scrub: 0.8,
                },
            }
        );
    });
};

export const useAnimation = () => {
    useEffect(() => {
        useScaleDownAnimation()
        useZoomOutAnimation()
        useLeftToRightAnimation()
    }, [useScaleDownAnimation, useZoomOutAnimation, useLeftToRightAnimation]);
}