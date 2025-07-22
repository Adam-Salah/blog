import { Major_Mono_Display } from 'next/font/google';
import { useEffect, useState } from 'react';
import { lerp } from '@/modules/MathUtils';

const mono = Major_Mono_Display({
    weight: '400',
    subsets: ['latin'],
});

export default function Banner(props: { name: string; speed: number; height: number }) {
    const [nameBanner, setNameBanner] = useState<string[]>([]);
    const [letterTranslation, setLetterTranslation] = useState<number>(0);
    const [lineHighlight, setLineHighlight] = useState<number>();

    useEffect(() => {
        const newNameBanner: string[] = [];
        let anagram = props.name;
        anagram = (anagram.slice(2) + anagram.substring(0, 2)).repeat(2);
        newNameBanner.push(anagram);
        for (let i = 0; i < props.height - 1; i++) {
            anagram = anagram.charAt(anagram.length - 1) + anagram.slice(0, -1);
            newNameBanner.push(anagram);
        }
        setNameBanner(newNameBanner);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        let timeAtFrame = Date.now();
        function frameOperations() {
            setLetterTranslation(0);
            const dt = (Date.now() - timeAtFrame) / 1000;
            if (dt > 1 / props.speed) {
                nameBanner.unshift(nameBanner.pop()!);
                setNameBanner(nameBanner);
                timeAtFrame = Date.now();
            } else {
                setLetterTranslation(lerp(0, 100, dt * props.speed));
            }
            animationFrameId = requestAnimationFrame(frameOperations);
        }
        animationFrameId = requestAnimationFrame(frameOperations);
        return () => cancelAnimationFrame(animationFrameId);
    }, [nameBanner]);

    useEffect(() => {
        let animationFrameId: number;
        let timeAtFrame = Date.now();
        function frameOperations() {
            const dt = (Date.now() - timeAtFrame) / 1000;
            if (dt > (1 / props.speed) * props.height) {
                timeAtFrame = Date.now();
            } else {
                setLineHighlight(lerp(0, 100, (dt * props.speed) / props.height) - (0.5 * 100) / props.height);
            }
            animationFrameId = requestAnimationFrame(frameOperations);
        }
        animationFrameId = requestAnimationFrame(frameOperations);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <>
            <div className={mono.className + ' flex justify-center'}>
                <div className='relative text-[3em] sm:text-[5em] max-w-[5ch] leading-none inline-block rounded-full overflow-hidden select-none'>
                    <div
                        className='-z-10 absolute bg-(--foreground) w-full'
                        style={{ height: `${100 / props.height}%`, top: `${lineHighlight}%` }}
                    ></div>
                    <div
                        className='-z-10 absolute bg-(--foreground) w-full'
                        style={{ height: `${100 / props.height}%`, top: `${lineHighlight! - 100}%` }}
                    ></div>
                    <div
                        className='-z-10 absolute bg-(--foreground) w-full'
                        style={{ height: `${100 / props.height}%`, top: `${lineHighlight! + 100}%` }}
                    ></div>
                    <div className='relative'>
                        <div className='absolute'>
                            {nameBanner.map((name, i) => (
                                <div key={i} className='overflow-hidden'>
                                    <div className='inline-block -translate-x-20'>
                                        <span
                                            className='inline-block m-0 p-p'
                                            style={{ transform: `translate(-${letterTranslation / (props.name.length * 2)}%, 0%)` }}
                                        >
                                            {name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className='text-(--background)'
                            style={{
                                clipPath: `polygon(
                                0 ${lineHighlight! - 100}%, 
                                100%  ${lineHighlight! - 100}%, 
                                100% ${lineHighlight! - 100 + 100 / props.height}%, 
                                0 ${lineHighlight! - 100 + 100 / props.height}%,
                                0 ${lineHighlight}%, 
                                100%  ${lineHighlight}%, 
                                100% ${lineHighlight! + 100 / props.height}%, 
                                0 ${lineHighlight! + 100 / props.height}%,
                                0 ${lineHighlight! + 100}%, 
                                100%  ${lineHighlight! + 100}%, 
                                100% ${lineHighlight! + 100 + 100 / props.height}%, 
                                0 ${lineHighlight! + 100 + 100 / props.height}%
                                )`,
                            }}
                        >
                            {nameBanner.map((name, i) => (
                                <div key={i} className='overflow-hidden'>
                                    <div className='inline-block -translate-x-20'>
                                        <span
                                            className='inline-block m-0 p-p'
                                            style={{ transform: `translate(-${letterTranslation / (props.name.length * 2)}%, 0%)` }}
                                        >
                                            {name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
