'use client';

import Link from 'next/link';

export default function Header() {
    const language = () => {
       window.location.pathname = window.location.pathname.substring(3);
    };

    return (
        <div className='header sticky z-[100] top-[0] flex p-5 bg-(--background) text-xl' id='header'>
            <Link href={'/fr/'} className='cursor-pointer'>
                <div className='header-logo m-auto py-5 sm:px-5 text-[1.5em]'>Adam Salah</div>
            </Link>
            <div className='flex flex-auto flex-wrap justify-end m-auto gap-3'>
                <Link href={'/fr/projects'}>
                    <div className='pl-5 sm:pr-5 py-2 sm:py-5 cursor-pointer'>Projets</div>
                </Link>
                {/* <Link href={'/fr/blog'}>
                    <div className='pl-5 sm:pr-5 py-2 sm:py-5 cursor-pointer'>
                        Blog
                    </div>
                </Link> */}
                {/* <Link href={'/fr/about'}>
                    <div className='pl-5 sm:pr-5 py-2 sm:py-5 cursor-pointer'>
                        À propos
                    </div>
                </Link> */}
                <Link href={''} onClick={language}>
                    <div className='pl-5 sm:pr-5 py-2 sm:py-5 cursor-pointer'>EN</div>
                </Link>
            </div>
        </div>
    );
}
