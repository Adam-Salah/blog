import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import styles from '@/styles/theme-image.module.css';

export default function Socials() {
    return (
        <>
            <div className='flex flex-auto gap-10 px-[5%]'>
                <div className='flex justify-center w-full'>
                    <Link href={'mailto:garutako@garutako.com'}>
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
