'use client';

import Banner from '@/components/Banner';
import Hbr from '@/components/mini/Hbr';
import Socials from '@/components/Socials';

export default function Page() {
    return (
        <>
            <Banner name='adam' speed={1} height={4}></Banner>
            <Hbr size={3}></Hbr>
            <Socials></Socials>
        </>
    );
}
