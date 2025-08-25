'use client';

import Banner from '@/components/Banner';
import Hbr from '@/components/mini/Hbr';
import PostCardContainer from '@/components/PostCardContainer';
import { LanguageContext } from '@/global/LanguageContext';
import Link from 'next/link';
import { useContext } from 'react';

export default function Page() {
    const language = useContext(LanguageContext);

    return (
        <div className='mx-auto max-w-200'>
            {/* <Banner name='garu' speed={1} height={4}></Banner>
            <Hbr size={2}></Hbr>
            <PostCardContainer numOfPosts={1} />
            <Link href={'/' + language + '/blog/'} className='flex justify-center'>
                <p className='text-xl underline'>More...</p>
            </Link> */}
        </div>
    );
}
