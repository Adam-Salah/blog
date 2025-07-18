'use client';

import Link from "next/link";

export default function Header() {
    return (
        <div className='header sticky z-[100] top-[0] flex p-5 bg-(--background) text-lg' id='header'>
            <Link href={'/'} className='cursor-pointer'>
                <div className='header-logo m-auto p-5 text-[1.5em]'>
                    Adam Salah
                </div>
            </Link>
            <div className='flex flex-auto flex-wrap justify-end m-auto gap-3'>
                <Link href={'/projects'}>
                    <div className='px-5 py-2 sm:py-5 cursor-pointer'>
                        Projects
                    </div>
                </Link>
                {/* <Link href={'/blog'}>
                    <div className='px-5 py-2 sm:py-5 cursor-pointer'>
                        Blog
                    </div>
                </Link> */}
                {/* <Link href={'/about'}>
                    <div className='px-5 py-2 sm:py-5 cursor-pointer'>
                        About
                    </div>
                </Link> */}
            </div>
        </div>
    );
}