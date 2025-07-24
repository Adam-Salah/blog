'use client';

import { LanguageContext } from '@/global/LanguageContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function Header() {
    const language = useContext(LanguageContext);
    const pathname = usePathname().substring(3);

    return (
        <div className='header sticky z-[100] top-[0] flex p-5 bg-(--background) text-lg' id='header'>
            <Link href={'/' + language} className='cursor-pointer'>
                <div className='header-logo m-auto sm:py-5 sm:px-5 text-[1.5em]'>Garutako</div>
            </Link>
            <div className='flex flex-auto flex-wrap justify-end m-auto gap-3'>
                <Link href={'/' + language + '/projects'}>
                    <div className='pl-3 sm:pr-3 sm:py-2 sm:py-5 cursor-pointer'>Projects</div>
                </Link>
                {/* <Link href={'/blog'}>
                    <div className='pl-3 sm:pr-3 py-2 sm:py-5 cursor-pointer'>
                        Blog
                    </div>
                </Link> */}
                {/* <Link href={'/about'}>
                    <div className='pl-3 sm:pr-3 py-2 sm:py-5 cursor-pointer'>
                        About
                    </div>
                </Link> */}
                <Link href={'mailto:garutako@garutako.com'}>
                    <div className='pl-3 sm:pr-3 sm:py-2 sm:py-5 cursor-pointer'>Contact</div>
                </Link>
                {
                    <Link href={'/' + (language != 'en' ? 'en' : 'fr') + '/' + pathname}>
                        <div className='pl-3 sm:pr-3 sm:py-2 sm:py-5 cursor-pointer'>
                            {(language != 'en' ? 'EN' : 'FR')}
                        </div>
                    </Link>
                }
            </div>
        </div>
    );
}
