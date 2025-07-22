import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from '@/styles/theme-image.module.css';

export default function Banner() {
    return (
        <>
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
                                <ExportedImage
                                    src={'/resources/images/logos/at-sign-black.png'}
                                    alt={'GitHub logo'}
                                    className={styles.imgLight}
                                    fill
                                />
                                <ExportedImage
                                    src={'/resources/images/logos/at-sign-white.png'}
                                    alt={'GitHub logo'}
                                    className={styles.imgDark}
                                    fill
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
