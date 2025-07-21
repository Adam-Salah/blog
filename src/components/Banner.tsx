import { Major_Mono_Display } from 'next/font/google';
import { useEffect, useState } from 'react';
import Hbr from './mini/Hbr';
import ExportedImage from 'next-image-export-optimizer';
import styles from '@/styles/theme-image.module.css';
import Link from 'next/link';

const mono = Major_Mono_Display({
    weight: '400',
    subsets: ['latin'],
});

export default function Banner(props: { name: string; speed: number }) {
    const [nameBanner, setNameBanner] = useState<string[]>([]);
    const [bannerLetterTranslation, setBannerLetterTranslation] = useState<number>(0);

    const lerp = (a: number, b: number, t: number) => {
        return a * (1 - t) + b * t;
    };

    useEffect(() => {
        const newNameBanner: string[] = [];
        let anagram = props.name.repeat(2);
        newNameBanner.push(anagram);

        for (let i = 0; i < anagram.length - 1; i++) {
            anagram = anagram.charAt(anagram.length - 1) + anagram.slice(0, -1);
            newNameBanner.push(anagram);
        }
        setNameBanner(newNameBanner);
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        let timeAtFrame = Date.now();
        function frameOperations() {
            setBannerLetterTranslation(0);
            const dt = (Date.now() - timeAtFrame) / 1000;
            if (dt > 1 / props.speed) {
                nameBanner.unshift(nameBanner.pop()!);
                setNameBanner(nameBanner);
                timeAtFrame = Date.now();
            } else {
                setBannerLetterTranslation(lerp(0, 100, dt));
            }
            animationFrameId = requestAnimationFrame(frameOperations);
        }
        animationFrameId = requestAnimationFrame(frameOperations);
        return () => cancelAnimationFrame(animationFrameId);
    }, [nameBanner]);

    return (
        <>
            <div className={mono.className + ' flex justify-center'}>
                <div className='text-[3em] sm:text-[5em] max-h-[7ch] max-w-[5ch] leading-none inline-block rounded-full overflow-hidden select-none'>
                    {nameBanner.map((name, i) => (
                        <div key={i} className=' overflow-hidden'>
                            <div className='inline-block -translate-x-20'>
                                <span
                                    className='inline-block m-0 p-p'
                                    style={{ transform: `translate(-${bannerLetterTranslation / (props.name.length * 2)}%, 0%` }}
                                >
                                    {name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Hbr size={2}></Hbr>
            <div className='flex flex-auto gap-10 px-[5%]'>
                <div className='flex justify-center w-full'>
                    <Link href={'https://github.com/Adam-Salah'}>
                        <div className='p-[5%]'>
                            <div className='relative h-12 sm:h-15 aspect-square'>
                                <ExportedImage src={'/resources/images/logos/github-mark.png'} alt={'GitHub logo'} className={styles.imgLight} fill />
                                <ExportedImage
                                    src={'/resources/images/logos/github-mark-white.png'}
                                    alt={'GitHub logo'}
                                    className={styles.imgDark}
                                    fill
                                />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center w-full'>
                    <Link href={'https://linkedin.com/in/adam-salah-mtl'}>
                        <div className='p-[5%]'>
                            <div className='relative h-12 sm:h-15 aspect-square'>
                                <ExportedImage src={'/resources/images/logos/InBug-Black.png'} alt={'GitHub logo'} className={styles.imgLight} fill />
                                <ExportedImage src={'/resources/images/logos/InBug-White.png'} alt={'GitHub logo'} className={styles.imgDark} fill />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex justify-center w-full'>
                    <Link href={'mailto:adam-hamid.salah-salah.1@ens.etsmtl.ca'}>
                        <div className='p-[5%]'>
                            <div className='relative h-12 sm:h-15 aspect-square'>
                                <ExportedImage src={'/resources/images/logos/at-sign-black.png'} alt={'GitHub logo'} className={styles.imgLight} fill />
                                <ExportedImage src={'/resources/images/logos/at-sign-white.png'} alt={'GitHub logo'} className={styles.imgDark} fill />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
